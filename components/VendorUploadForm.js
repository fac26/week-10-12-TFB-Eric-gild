import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css';
// import { LOCAL_STORAGE_KEY } from '../components/AddDetaiils'

export default function FoodVendorDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handlePost = async () => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    await DetailsToDB(data);
  }
  

  return (
    <form>
      <label htmlFor="companyDescription">Tell us about your company</label>
      {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
      <br />
      <textarea
        id="companyDescription"
        {...register("companyDescription", { required: true, maxLength: 300 })}
      />
      {errors.companyDescription && errors.companyDescription.type === "required" && 
        <span>This field is required and should not exceed 300 characters.</span>
      }
      <br />
      <label htmlFor="companyName">Company name</label>
      <br />
      <input
        id="companyName"
        {...register("companyName", { required: true, maxLength: 100 })}
      />
      {errors.companyName && (
        <span>This field is required and should not exceed 100 characters.</span>
      )}
      <br />
      <label htmlFor="address">Address</label>
      <br />
      <input
        id="address"
        {...register("address", { required: true, maxLength: 200 })}
      />
      {errors.address && (
        <span>This field is required and should not exceed 200 characters.</span>
      )}
      <br />
      <label htmlFor="phone">Phone number</label>
      <br />
      <input
        id="phone"
        {...register("phone", {
            required: true,
            pattern: /^(\+?\d{1,2}\s?)?(\d{3,4}\s?\d{3}\s?\d{4})$/,
        })}
        //xxx-xxx-xxxx or xxx xxx xxxx
        />
      <br />
      <button onClick={handleSubmit(handlePost)}>Submit</button>
     
    </form>
   
  );
}

//phone number input field needs improvement
//uploading onto airtable