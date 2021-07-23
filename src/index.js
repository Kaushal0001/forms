import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useFormik } from 'formik';


const EComponent=()=>{
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Contactno: '',
      Email:'',
      Type:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  
  return (
    <center>
    <table id="table_con">
    <div>
    <h2 align='center'>Sample Forms...</h2>
    <form onSubmit={formik.handleSubmit}  >
      <p>
      <label htmlFor="Id">FirstName&nbsp;</label>
      <input
        id="FirstName"
        name="FirstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.FirstName}
      />
      </p>
      
      <p>
      <label htmlFor="Name">LastName &nbsp;</label>
      <input
        id="LastName"
        name="LastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.LastName}
      />
      </p>
      <p>
      <label htmlFor="Location">Contact no </label>
      <input
        id="Contactno"
        name="Contactno"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Contactno}
      />
      </p>
      <p>
      <label htmlFor="Salary">Email-Id &nbsp;&nbsp;&nbsp;</label>
      <input
        id="Email"
        name="Email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Email}
      />
      </p>
      <label htmlFor="Type">Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <select id="Type"
        name="Type"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Type} >
      <option selected>Choose...</option>
      <option value='React'>React</option>
      <option value='Bootstrap'>Bootstrap</option>
      <option value='Nothing'>Nothing</option>
      </select><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" class="btn btn-light" >Submit</button>
    </form>
    </div>
    </table>
    </center>
  );
  }

const element=<EComponent></EComponent>

ReactDOM.render(element,document.getElementById("root"));