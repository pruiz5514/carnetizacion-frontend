import { IoClose } from 'react-icons/io5';
import Modal from '../../Atoms/Modal/Modal'
import EstablishmentForm from '../../Organisms/Forms/EstablishmentForm'

interface IEstablishmentsModalProps{
    closeModal: ()=> void;
}

const EstablismentModal:React.FC<IEstablishmentsModalProps> = ({closeModal}) => {
  return (
    <Modal>
        <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <EstablishmentForm closeModal={closeModal}/>
    </Modal>
  )
}

export default EstablismentModal