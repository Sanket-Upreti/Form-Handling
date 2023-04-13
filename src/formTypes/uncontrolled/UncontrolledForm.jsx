import { useEffect, useRef } from 'react';
import '../../App.css'

const UncontrolledForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log("uncontrolled form",{username, password});
  };

  return (
    <form className='form-wrapper' onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          ref={usernameRef}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          ref={passwordRef}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
