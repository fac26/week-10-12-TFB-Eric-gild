import { useState } from "react";

export default function FoodVendorDetails() {
  
  const [vendorDetails, setVendorDetails] = useState({ name: "", description: "", address: "", phone: "" })

  const updateDetails = e => {
    const fieldDetails = e.target.name
    setVendorDetails(existingValues => ({
      ...existingValues,
      [fieldDetails]: e.target.value,
    }))
  }

  return (
    <form onSubmit={updateDetails}>
      <label htmlFor="companyDescription">Tell us about your company</label>
      <br></br>
      <input
          type="text"
          name="description"
          id="companyDescription"
          value={vendorDetails.description}
          
        />
         <br></br>
      <label htmlFor="companyName">Company name</label>
      <br></br>
      <input
          type="text"
          name="name"
          id="companyName"
          value={vendorDetails.name}
         
        />
         <br></br>
      <label htmlFor="companyAddress">Address</label>
      <br></br>
      <input
          type="text"
          name="address"
          id="companyaddress"
          value={vendorDetails.address}
      
        />
         <br></br>
      <label htmlFor="companyPhone">Phone number</label>
      <br></br>
      <input
          type="text"
          name="phone"
          id="companyPhone"
          value={vendorDetails.phone}
          
        />
        <input type="submit" value="Update data" />
         <br></br>
         
      <div>
        Details: { vendorDetails.name } { vendorDetails.description}  { vendorDetails.address } { vendorDetails.phone }
      </div>
    </form>
  );
}


{/* <form>
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
     
    </form> */}