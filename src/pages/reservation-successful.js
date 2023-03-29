import Layout from 'components/Layout';

const ReservationSuccessfulPage = ({ pickUpCode }) => {
  const pageTitle = 'Reservation Successful';
  return (
    <>
      <Layout pageTitle={pageTitle}>
        <p className='flex justify-center font-cursive text-accentcolor1 text-4xl py-6'>
          CONGRATULATIONS!
        </p>
        <p>Your reservation is successful</p>
        <p>Your Pick Up code is: {pickUpCode}</p>
      </Layout>
    </>
  );
};

export default ReservationSuccessfulPage;

export async function getStaticProps() {
  const pickUpCode = Math.floor(Math.random() * 9000) + 1000;
  return {
    props: {
      pickUpCode,
    },
  };
}
