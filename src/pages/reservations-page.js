import Layout from 'components/Layout';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import airtableModule from 'utils/airtable';

export default function ReservationsPage() {
  //airtable extraction instead
  const [reservations, setReservations] = useState([]);

  //   function removeReservation() {
  //     console.log(recordId);
  //     // removeAReservation(recordId);
  //   }

  useEffect(() => {
    async function fetchReservations() {
      const records = await airtableModule.getReservation('reservations');
      setReservations(records);
    }
    fetchReservations();
  }, []);
  console.log(reservations);

  return (
    <Layout pageTitle={'Your reservations'}>
      <div className='pb-20'>
        <h1 className='flex justify-center font-cursive text-accentcolor1 text-6xl'>
          Food reserved:
        </h1>
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 py-6 px-6 rounded-lg mb-4'
          >
            <h2 className='font-cursive  text-4xl'>{reservation.foodName}</h2>
            <p className=' text-1xl'>
              {reservation.restaurantName},{reservation.Address}
            </p>
            <h1 className='font-cursive text-4xl'>
              Your Pick up code is: {reservation.pickupcode}
            </h1>
            <div className='flex justify-end'>
              <Button
                buttonName='Cancel'
                className='ml-4'
                // ButtonOnClick={removeReservation(reservation.ID)}
              />
            </div>
          </div>
        ))}
        <div>
          <h1 className='flex justify-center font-cursive text-accentcolor1 text-6xl'>
            Frequently Asked Questions
          </h1>
          <p className='flex justify-center text-accentcolor1 font-cursive text-4xl'>
            How do I collect my food?
          </p>
          <p className='flex justify-center text-accentcolor1'>
            Simply turn up at the shop before the closing time and show them
            your pick up code.
          </p>
        </div>
      </div>
    </Layout>
  );
}
//rememebr to merge with main before pushing final changes
//collaborator id where they ordered the food from
//and item/food id
