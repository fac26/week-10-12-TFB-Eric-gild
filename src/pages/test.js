import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Button from 'components/Button';
import { useState } from 'react';

export default function MoreInfo() {
  const router = useRouter();
  const { item } = router.query;
  console.log(item);
  const { name, description, image, allergens, menuName } = JSON.parse(item);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <br></br>
      <div className='bg-white flex flex-col items-center justify-center gap-2 w-full'>
        <img src={image[0].url} alt={name} width={200} height={200} />

        <h1 className='font-cursive text-accentcolor1 text-5xl'>{name}</h1>
        <p className='flex justify-center text-center text-accentcolor1 text-sm'>
          {description}
        </p>
        <div className='text-accentcolor1 text-center text-sm mb-40'>
          <p>{menuName === 'pret' ? 'Pret a Manger' : menuName}</p>
          {/* should show table name */}
          <p>271 Holloway Road, London N7, UK</p>
          {/* show address from collaborators */}
          <p>Collect: </p>
          <button onClick={setModalOpen}>
            Click here for ingredients and allergens
          </button>
          {/* open a modal */}
          <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
            <div>{allergens}</div>
            <div className='flex justify-end mt-4'>
              <button
                className='flex items-center justify-center max-w-xs w-40 bg-dim-black font-cursive text-accentcolor3 tracking-widest text-3xl bg-accentcolor1 py-2 px-2 rounded-lg hover:bg-green hover:text-accentcolor1'
                onClick={() => setModalOpen(false)}
              >
                Close Modal
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </Layout>
  );
}
