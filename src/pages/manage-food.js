import Card from 'components/Card';
import Layout from 'components/Layout';
import Button from 'components/Button';
import BackButton from 'c';

export default function FindFood() {
  const pageTitle = 'Manage Food';
  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          What’s available at Pret, Holloway Road?
        </p>
      </div>
      <div className='flex flex-col m-4 items-center'>
        <Card />
      </div>
      <Button buttonName={'Save'} buttonLink='/' />
    </Layout>
  );
}
