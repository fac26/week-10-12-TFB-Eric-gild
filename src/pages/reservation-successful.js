import Layout from 'components/Layout';
import { useState, useEffect } from 'react';

const ReservationSuccessful = () => {
  const pageTitle = 'Reservation Successful';
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setNum(randomNumberInRange(1000, 9000));
  }, []);

  return (
    <>
      <Layout pageTitle={pageTitle}>
        <p className='flex justify-center font-cursive text-accentcolor1 text-4xl py-6'>
          CONGRATULATIONS!
        </p>
        <p>Your reservation is successful</p>
        <p>Your Pick Up code is: {num}</p>
      </Layout>
    </>
  );
};

export default ReservationSuccessful;
