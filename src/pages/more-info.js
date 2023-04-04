import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import ModalComponent from 'components/ModalComponent';
import { useState } from 'react';
import airtableModule from 'utils/airtable';
import { cards } from '@styles/index.js';
import Button from 'components/Button';
import BackButton from 'components/BackButton';

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
    setReservationMade(true);
    const newCode = Math.floor(Math.random() * 9000) + 1000;
    setPickUpCode(newCode);
    foodreservation.push(name, Name, Address, newCode);
    localStorage.setItem('orderedItem', foodreservation);
    airtableModule.createReservation({
      name: name,
      Name: Name,
      Address: Address,
      newCode: newCode,
    });
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <Layout noTopBar>
      <ModalComponent
        allergens={allergens}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <div className='relative'>
        <img
          src={image?.[0]?.url}
          alt={name}
          className='w-full md:max-h-96 object-contain bg-white'
        />
        <div className='absolute top-4 left-2'>
          <BackButton colour={'text-accentcolor4'} />
        </div>
        <h1 className={`${cards.headingWithinImage} ${cards.heading}`}>
          {!name ? null : name.toUpperCase()}
        </h1>
      </div>
      <div className='bg-white items-center justify-center w-full h-screen'>
        <div className={`${cards.infoDiv} pl-4 pr-8 py-4`}>
          {reservationMade ? (
            <>
              <h1 className={`${cards.heading} text-left text-2xl`}>
                CONGRATULATIONS!
              </h1>
              <p className={cards.normalText}>
                You have successfully reserved this {name.toLowerCase()}!
              </p>
              <h2 className={`${cards.heading} text-2xl`}>
                Your Pick Up code is: {pickUpCode}
              </h2>
            </>
          ) : (
            <>
              <p className={cards.normalText}>{description}</p>
              <hr className={cards.line} />
              <p className={cards.normalText}>{Name}</p>
              <p className={cards.normalText}>{Address}</p>
              <p className={cards.normalText}>Collect: {Hours}</p>
              <p className={cards.normalText}>Contact: {PhoneNumber}</p>
              <button
                className={`text-left p-0 m-0 ${cards.underlineLink}`}
                onClick={handleModal}
              >
                Click here for ingredients and allergens
              </button>
              <hr className={cards.line} />
              <div className='flex items-center justify-center'>
                <Button
                  whiteBackground={'true'}
                  buttonName={'Reserve'}
                  onClick={handleReservation}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
