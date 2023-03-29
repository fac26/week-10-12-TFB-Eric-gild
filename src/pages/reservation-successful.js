import Layout from 'components/Layout';
import { useState, useEffect } from 'react';

const ReservationSuccessful = () => {
  const pageTitle = 'Reservation Successful';
  const [pickUpCode, setPickUpCode] = useState(0);

  useEffect(() => {
    setPickUpCode(Math.floor(Math.random() * 9000) + 1000);
  }, []);

  return (
    <>
      <Layout pageTitle={pageTitle}>
        <p className='flex justify-center font-cursive text-accentcolor1 text-4xl py-6'>
          CONGRATULATIONS!
        </p>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          Your reservation is successful
        </p>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          Your Pick Up code is: {pickUpCode}
        </p>
      </Layout>
    </>
  );
};

export default ReservationSuccessful;
