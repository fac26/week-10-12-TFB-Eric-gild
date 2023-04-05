import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cards } from '@styles/index.js';

export default function ModalComponent({ message, modalOpen, setModalOpen }) {
  return (
    <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
      <div className='flex justify-end mt-4'>
        <button onClick={() => setModalOpen(false)}>
          <XMarkIcon className='h-10 w-10 bg-accentcolor1 text-white rounded-full' />
        </button>
      </div>
      <div className=' mt-10 text-center text-accentcolor1'>
        <div className=' mt-4 '>{message}</div>
      </div>
    </Modal>
  );
}
