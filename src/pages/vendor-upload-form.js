import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Button from 'components/Button';

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyPQ3ZegGxQ8Pg3j' }).base(
  'appwjTMNZwwnhuRzz'
);

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    //   console.log(watch('example')); // watch input value by passing the name of it

    //update records
    base('Collaborators').create(
      [
        {
          fields: {
            Name: data.companyname,
            Description: data.description,
            Address: data.address,
            PhoneNumber: data.phonenumber,
          },
        },
      ],
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  };

  return (
    <Layout pageTitle='Vendor Details Upload'>
      <form
        className='h-screen flex flex-col 
        items-center font-cursive text-accentcolor1 text-base w-1/2 mx-auto'
      >
        <label>Company name</label>
        <br></br>
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
        <br></br>
        <center>
          <label>Tell us about your company</label>
        </center>
        <br></br>
        <textarea
          {...register('description', { required: true })}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.description && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br></br>
        <label>Address</label>
        <br></br>
        <textarea
          {...register('address', { required: true })}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.address && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br></br>
        <label>Phone number</label>
        <br></br>
        <input
          {...register('phonenumber', { required: true })}
          className='bg-accentcolor3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans'
        />
        {errors.phonenumber && (
          <span className='text-red-600 text-custom'>
            This field is required
          </span>
        )}
        <br></br>
        <Button
          buttonName={'Submit'}
          buttonLink={'/find-food'}
          ButtonOnClick={handleSubmit(onSubmit)}
        />
      </form>
    </Layout>
  );
}
