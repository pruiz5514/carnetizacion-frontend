import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useNavigate } from "react-router-dom";

const Scanner = () => {
    const [scanResult, setScanResult] = useState<string | null>(null)
    const navigate = useNavigate();

    useEffect(()=>{
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
        setScanResult(String(result))
        navigate(`/apply-discount/${result}`)
      }
    
      function error(err: string){
        console.warn(err)
      }
    },[])
  
  
  
    return (
      <>
        <p>{scanResult}</p>
        <div id='reader'>
  
        </div>
      </>
    )
}

export default Scanner