import Layout from 'components/Layout';

const ReservationSuccessful = () => {
  const pageTitle = 'Reservation Successful';
  return (
    <>
      <Layout pageTitle={pageTitle}>
        <p>CONGRATULATIONS!</p>
        <p>Your reservation is successful</p>
        <p>Your Pick Up code is:</p>
      </Layout>
    </>
  );
};

export default ReservationSuccessful;
