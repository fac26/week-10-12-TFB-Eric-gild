import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MoreInfo() {
  const router = useRouter();
  const { item, collaborator } = router.query;
  const { name, description, image, allergens } = item ? JSON.parse(item) : {};
  const { Name, Address, Hours, PhoneNumber } = collaborator
    ? JSON.parse(collaborator)
    : {};
  const [modalOpen, setModalOpen] = useState(false);
  const [reservationMade, setReservationMade] = useState(false);
  const [pickUpCode, setPickUpCode] = useState(0);
  const foodreservation = [];

  const handleReservation = () => {
    // Do any necessary reservation logic here
    setReservationMade(true);
    const newCode = Math.floor(Math.random() * 9000) + 1000;
    setPickUpCode(newCode);
    foodreservation.push(name, Name, Address, newCode);
    localStorage.setItem('orderedItem', foodreservation);
    console.log(foodreservation);
    // storeReservations();
    // console.log(name); //name of food
    // console.log(Name); //name of restaurant
    // console.log(Address); //address
  };

  // const storeReservations = () => {
  //   localStorage.setItem('listofstoredreservations', listoffoodreservations);
  //   listoffoodreservations.push(foodreservation);
  // };

  return (
    <Layout>
      <div className='bg-white flex flex-col items-center justify-center gap-2 w-full h-screen'>
        <div className='h-1/2 w-screen flex items-center justify-center'>
          <img src={image?.[0]?.url} alt={name} className='h-full' />
        </div>
        {reservationMade ? (
          <div className='text-accentcolor1 flex flex-col items-center justify-center mb-40'>
            <h1 className='font-cursive text-accentcolor1 text-5xl'>
              CONGRATULATIONS!
            </h1>
            <p className='flex justify-center text-center text-accentcolor1 text-sm'>
              You have successfully reserved this {name.toLowerCase()}!
            </p>
            <br></br>
            <h2 className='font-cursive text-accentcolor1 text-4xl'>
              Your Pick Up code is: {pickUpCode}
            </h2>
            <Modal
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
            >
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
        ) : (
          <div className='text-accentcolor1 flex flex-col items-center justify-center mb-40'>
            <h1 className='font-cursive text-accentcolor1 text-5xl'>{name}</h1>
            <p className='flex justify-center text-center text-accentcolor1 text-sm'>
              {description}
            </p>
            <br></br>
            <p>{Name}</p>
            <p>{Address}</p>
            <p>Collect: {Hours}</p>
            <p>Contact: {PhoneNumber}</p>
            <br></br>
            <button onClick={setModalOpen}>
              Click here for ingredients and allergens
            </button>
            <br></br>
            <button
              className='flex items-center justify-center max-w-xs w-40 bg-dim-black font-cursive text-accentcolor3 tracking-widest text-3xl bg-accentcolor1 py-2 px-2 rounded-lg hover:bg-green hover:text-accentcolor1'
              onClick={handleReservation}
            >
              Reserve
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
