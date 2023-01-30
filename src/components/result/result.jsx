import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './result.module.css';


export default ({formData}) => {
    
    console.log(formData);
    
    let navigate = useNavigate();
    
    if(formData ==null){
        navigate('/');
        }
    
return <>

  <h4 className='text-center mt-4 mb-4'>Result</h4>
    
    <div className="container">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <td> <b>Type</b> <br/>{formData.select1}</td>
            <td> <b>Breed</b> <br/>{formData.breed}</td>
        </tr>
        <tr>
            <td> <b>Gender</b> <br/>{formData.select2}</td>
            <td> <b>Age</b> <br/>{formData.age}</td>
        </tr>
        <tr>
            <td> <b>Training Level</b> <br/>{formData.select3}</td>
            <td> <b>Color</b> <br/>{formData.color}</td>
        </tr>
        <tr>
            <td> <b>Vaccination</b> <br/>{formData.select4}</td>
            <td> <b>Price</b> <br/>{formData.price}</td>
        </tr>
        <tr>
            <td colspan="2"> <b>Information</b> <br/>{formData.information}</td>
        </tr>
        <tr>
            <td colspan="2"> <b>Picture</b> <br/> <img width="100px" height="100px" src={formData.picture} alt="" /> </td>
        </tr>
        <tr>
            <td> <b>Name</b> <br/>{formData.name}</td>
            <td> <b>Phone</b> <br/>{formData.phone}</td>
        </tr>
        <tr>
            <td colspan="2"> <b>City</b> <br/>{formData.city}</td>
        </tr>
    </table>

    </div>
  
  </>
}
