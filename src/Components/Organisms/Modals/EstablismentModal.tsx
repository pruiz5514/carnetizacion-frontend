import { IoClose } from 'react-icons/io5';
import Modal from '../../Atoms/Modal/Modal'
import EstablishmentForm from '../Forms/EstablishmentForm'

interface IEstablishmentsModalProps{
    closeModal: ()=> void;
    getEstablishments: ()=> void
}

const EstablismentModal:React.FC<IEstablishmentsModalProps> = ({closeModal, getEstablishments}) => {
  return (
    <Modal>
        <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <EstablishmentForm getEstablishments={getEstablishments} closeModal={closeModal}/>
    </Modal>
  )
}

export default EstablismentModal