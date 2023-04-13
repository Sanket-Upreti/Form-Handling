import './App.css'
import UncontrolledForm from './formTypes/uncontrolled/UncontrolledForm'
import ControlledForm from './formTypes/controlled/ControlledForm'
import FormWithFormData from './formTypes/uncontrolled/formDataAPI/FormWithFormData'
import FormikForm from './formik/FormikForm'
import FormikWithYup from './formik/FormikWithYup'

function App() {
  return (
    <>
    <h1>Different Forms Demonstration</h1>
    
    <div className='form'>
    <strong>---Controlled form----</strong>
      <ControlledForm />
    </div>

    <div className='form'>
    <strong>---FormData API----(no validation)</strong>
      <FormWithFormData />
    </div>

    <div className='form'>
    <strong>---Uncontrolled form----(no validation)</strong>
      <UncontrolledForm />
    </div>

    <div className='form'>
    <strong>---Non functional Formik form without Yup----</strong>
      <FormikForm />
    </div>

    <div className='form'>
    <strong>---Functional Formik form with Yup----</strong>
      <FormikWithYup />
    </div>
    </>
  )
}

export default App
