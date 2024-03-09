import {useFormik} from 'formik';
function FormikForm(){

    const formInitialValues = {
        name:'',
        email:''
    }
    const formik = useFormik({
        initialValues: formInitialValues
    });
    return(
      <div>
        <form>
            <label>Enter Name:</label>
            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
            <br/><br/>
            <label>Enter Email:</label>
            <input type="text" name="email" value={formik.values.email}/>
            <br></br>
            <input type="submit" value="submit" /> 
        </form>
      </div>
    )
}
export default FormikForm;