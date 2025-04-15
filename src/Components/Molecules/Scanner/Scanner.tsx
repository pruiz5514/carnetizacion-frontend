import './Scanner.css'
import { useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const [scannerStarted, setScannerStarted] = useState(false);
  const navigate = useNavigate();

  const startScanner = () => {
    setScannerStarted(true);
    
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result: string) {
      scanner.clear();
      navigate(`/apply-discount/${encodeURIComponent(result)}`);
    }

    function error(err: string) {
      console.warn(err);
    }
  };

  return (
    <>

      {!scannerStarted && (
        <div className='w-full flex justify-center'>
          <button className='bg-orange rounded-lg text-white text-3xl px-5 py-2 cursor-pointer' onClick={startScanner}>
            Iniciar escáner
          </button>
        </div>

      )}

      <div id="reader" className="mx-auto w-full min-w-[300px] max-w-[800px] rounded-lg shadow-lg" />

    </>
  );
};

export default Scanner;
