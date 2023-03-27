import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //   console.log(watch('example')); // watch input value by passing the name of it

  return (
    <Layout pageTitle='Vendor Details Upload'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Company name</label>
        <br></br>
        <input defaultValue='test' {...register('companyname')} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <label>Tell us about your company</label>
        <br></br>
        <textarea {...register('description', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <label>Address</label>
        <br></br>
        <textarea {...register('address', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <label>Phone number</label>
        <br></br>
        <input {...register('phonenumber', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <input type='submit' />
      </form>
    </Layout>
  );
}
