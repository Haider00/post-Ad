import React from 'react'
import styles from './result.module.css';


export default ({formData}) => {

    console.log(formData);
    
return <>

  <h4 className='text-center mt-4 mb-4'>Result</h4>
    
    <div className="container">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <td>{formData.select1}</td>
            <td>{formData.breed}</td>
        </tr>
        <tr>
            <td>{formData.select2}</td>
            <td>{formData.age}</td>
        </tr>
        <tr>
            <td>{formData.select3}</td>
            <td>{formData.color}</td>
        </tr>
        <tr>
            <td>{formData.select4}</td>
            <td>{formData.price}</td>
        </tr>
        <tr>
            <td colspan="2">{formData.information}</td>
        </tr>
        <tr>
            <td colspan="2">{formData.picture}</td>
        </tr>
        <tr>
            <td>{formData.name}</td>
            <td>{formData.phone}</td>
        </tr>
        <tr>
            <td colspan="2">{formData.city}</td>
        </tr>
    </table>

    </div>
  
  </>
}
