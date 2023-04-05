import Layout from 'components/Layout';
import ButtonSmall from 'components/ButtonSmall';
import { useEffect, useState } from 'react';
import airtableModule from 'utils/airtable';
import { cards } from '@styles/index.js';

export default function ReservationsPage() {
  //airtable extraction instead
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      const records = await airtableModule.getReservation('reservations');
      setReservations(records);
    }
    fetchReservations();
  }, []);

  const removeReservation = async (recordId) => {
    await airtableModule.removeAReservation(recordId);
    setReservations(
      reservations.filter((reservation) => reservation.ID !== recordId)
    );
  };
  return (
    <Layout pageTitle={'Your reservations'}>
      <div className={cards.flexDiv}>
        {reservations.map((reservation, index) => (
          <div key={index} className={cards.containerDiv}>
            <h2 className={cards.headingSmall}>{reservation.foodName}</h2>
            <p className={`font-sans ${cards.normalText}`}>
              {reservation.restaurantName},{reservation.Address}
            </p>
            <h1 className={cards.headingXSmall}>
              Your Pick up code is: {reservation.pickupcode}
            </h1>
            <div className='flex justify-end'>
              <ButtonSmall
                buttonName='Cancel'
                className='ml-4'
                onClick={() => removeReservation(reservation.ID)}
              />
            </div>
          </div>
        ))}
        <div className={cards.containerDiv}>
          <h1 className={cards.headingSmall}>Frequently Asked Questions</h1>
          <p className={`font-sans ${cards.normalText}`}>
            How do I collect my food?
          </p>
          <p className={`font-sans ${cards.normalText}`}>
            Simply turn up at the shop before the closing time and show them
            your pick up code.
          </p>
        </div>
      </div>
    </Layout>
  );
}
