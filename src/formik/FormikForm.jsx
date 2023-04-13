import { useFormik } from "formik"
import '../App.css'

const validate = (values) =>{
let errors = {}

if(!values.username){
    errors.username = "This is required" 
}
if(!values.email){
    errors.email = "This is required" 
}
if(!values.password){
    errors.password = "This is required" 
}

return errors;
}

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: values =>{
            console.log("non functional formik", values)
        },
        validate
    })

  return (
    <form className="form-wrapper" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username}/>
        {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}

        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>: null}

        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <button type="submit">submit</button>
    </form>
  )
}

export default FormikForm