import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { useState } from 'react';

export default function MoreInfo() {
  const router = useRouter();
  const { item, collaborator } = router.query;
  const { name, description, image, allergens } = JSON.parse(item);
  const { Name, Address, Hours, PhoneNumber } = JSON.parse(collaborator);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <div className='bg-white flex flex-col items-center justify-center gap-2 w-full h-screen'>
        <div className='h-1/2 w-screen flex items-center justify-center'>
          <img src={image[0].url} alt={name} className='h-full' />
        </div>
        <h1 className='font-cursive text-accentcolor1 text-5xl'>{name}</h1>
        <p className='flex justify-center text-center text-accentcolor1 text-sm'>
          {description}
        </p>
        <div className='text-accentcolor1 text-center text-sm mb-40'>
          <p>{Name}</p>
          <p>{Address}</p>
          <p>Collect: {Hours}</p>
          <p>Contact: {PhoneNumber}</p>
          <button onClick={setModalOpen}>
            Click here for ingredients and allergens
          </button>
          <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
            <div>{allergens}</div>
            <div className='flex justify-end mt-4'>
              <button
                className='flex items-center justify-center max-w-xs w-40 bg-dim-black font-cursive text-accentcolor3 tracking-widest text-3xl bg-accentcolor1 py-2 px-2 rounded-lg hover:bg-green hover:text-accentcolor1'
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </Layout>
  );
}
