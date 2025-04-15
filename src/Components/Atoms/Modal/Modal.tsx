import { ReactNode, useEffect } from "react"
import './Modal.css'

interface IModalProps{
  children: ReactNode
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-50 flex justify-center items-center px-[30px] py-[50px] bg-bgModal backdrop-blur-md">
      <div className="w-full max-w-[600px] min-w-[300px] max-h-[800px] overflow-y-auto hide-scrollbar bg-white rounded-lg relative p-6 flex flex-col gap-6"> 
        {children}
      </div>
    </div>
  );
};

export default Modal