import { Form, Field, ErrorMessage, Formik } from "formik"
import * as Yup from "yup";
import '../App.css'

const validationSchema = Yup.object({
    username: Yup.string().required("This is required"),
    email: Yup.string().email("Invalid email format").required("This is required"),
    password: Yup.string().required("This is required").matches("(?=.*?[0-9])", "It should have atleast a digit")
})

const FormikWithYup = () => {
  return (
    <Formik 
        initialValues={
            {
                username: "",
                email: "",
                password: ""
            }
        }
        validationSchema = {validationSchema}
        onSubmit={(values)=>{
            console.log("functional formik with yup", values)
        }}
    >
        {(formik)=>(
            <Form className='form-wrapper'>
                <label>username</label>
                <Field type="text" id="username" name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username}/>
                <ErrorMessage  name="username"/><br/>

                <label>email</label>
                <Field type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
                <ErrorMessage  name="email"/><br/>

                <label>password</label>
                <Field type="password" id="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
                <ErrorMessage  name="password"/><br/>
                <button type="submit">submit</button>
            </Form>
        )
        }
    </Formik>
  )
}

export default FormikWithYup