**This is introduction to forms**
- There is no Css on my implementations, sorry for colorless visuals
- Some of the form uses repetitive state hook, it can be refactored like

const [initialVal , setInitialVal] = useState({
    username: "",
    email: "",
    password: ""
})

const handleChange = (e) =>{
    const {name, value} = e.target
    setInitialVal({
        [name]: value
    })
}

What are controlled inputs?
-  Condition where whatever you type gets stored on a state value. 
-  It can be one value which stores all values or one value for each.

What are formData API?
-  uncontrolled, used with more than one input
-  should have a name

What are uncontrolled inputs?
-  Condition where whatever you type gets stored on a state value from dom. 
-  used ref to handle this

**use of formik**

- easy handling of form,
- provides lots of helpful props out of the box

**use of yup**
- for object schema validation,
- makes it easier to add errors and warnings