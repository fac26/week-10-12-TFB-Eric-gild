import Layout from 'components/Layout';

const ReservationSuccessful = () => {
  const pageTitle = 'Reservation Successful';
  return (
    <>
      <Layout pageTitle={pageTitle}>
        <p className='flex justify-center font-cursive text-accentcolor1 text-4xl py-6'>
          CONGRATULATIONS!
        </p>
        <p>Your reservation is successful</p>
        <p>Your Pick Up code is:</p>
      </Layout>
    </>
  );
};

export default ReservationSuccessful;
