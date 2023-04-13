import { useState } from "react";
import '../../../App.css'

const FormWithFormData = () => {
  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObject = new FormData(e.currentTarget);
    const user = Object.fromEntries(formDataObject);
    console.log("formData API",user)
    setValue(value + 1)
    e.currentTarget.reset();
  };

  return (
    <form className='form-wrapper' onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          id="username"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          id="password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithFormData