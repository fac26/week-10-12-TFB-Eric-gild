import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Button from 'components/Button';
import airtable from 'services/airtable';
import { useRouter } from 'next/router';

export default function App() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    // code-review: don't forget that airtable is a promise. It's best to resolve it first and update collaborator data before showing manage food page
    await airtable.createCollaborator(data);
    router.push('/manage-food');
  };

  return (
    <Layout pageTitle={'Vendor Details Upload'} isBusinessPage>
      <form
        className='h-screen flex flex-col 
        items-center font-cursive text-accentcolor1 text-base w-1/2 mx-auto'
      >
        <label>Company name</label>
        <br />
        <input
          defaultValue='Pret'
          {...register('companyname')}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.companyname && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br />
        <center>
          <label>Tell us about your company</label>
        </center>
        <br />
        <textarea
          {...register('description', { required: true })}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.description && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br />
        <center>
          <label>Opening hours</label>
        </center>
        <br />
        <input
          {...register('companyhours')}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.hours && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br />
        <label>Address</label>
        <br />
        <textarea
          {...register('address', { required: true })}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.address && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br />
        <label>Phone number</label>
        <br />
        <input
          {...register('phonenumber', { required: true })}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.phonenumber && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br />
        <Button
          buttonName={'Submit'}
          ButtonOnClick={handleSubmit(onSubmitHandler)}
        />
      </form>
    </Layout>
  );
}
