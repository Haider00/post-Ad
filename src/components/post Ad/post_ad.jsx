import React, { useState } from 'react'
import styles from './post_ad.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default ({ data }) => {

  let form = useForm();
  let navigate = useNavigate();


  return (
    <div className="container">
      <form onSubmit={form.handleSubmit((it) => { data(it); navigate('/result') })}>
        <h4 className="mt-3 mb-5 text-center">POST YOUR AD</h4>

        <div className="row mb-4">
          <div className="col-md-6 text-center">
            <select {...form.register("select1")} className="form-select py-3 mb-3">
              <option selected>Animal Type</option>
              <option>Wild Animal</option>
              <option>Pet Animal</option>
              <option>Farm Animal</option>
            </select>
          </div>
          <div className="col-md-6 text-center">
            <div class="form-floating mb-3">
              <input {...form.register("breed")} required type="text" className="form-control" placeholder="Breed" />
              <label for="floatingInput">Breed</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 text-center">
            <select {...form.register("select2")} className="form-select py-3 mb-3 ">
              <option selected>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-6 text-center">
            <div class="form-floating mb-3">
              <input {...form.register("age")} required type="text" className="form-control" placeholder="Age" />
              <label for="floatingInput">Age</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 text-center">
            <select {...form.register("select3")} className="form-select py-3 mb-3 ">
              <option selected>Training Level</option>
              <option>Beginer</option>
              <option>Mid-level</option>
              <option>Expert</option>
            </select>
          </div>
          <div className="col-md-6 text-center">
            <div class="form-floating mb-3">
              <input {...form.register("color")} required type="text" className="form-control" placeholder="Colour" />
              <label for="floatingInput">Color</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 text-center">
            <select {...form.register("select4")} className="form-select py-3 mb-3 ">
              <option selected>Vaccination</option>
              <option>P-fizer</option>
              <option>Cinovac</option>
              <option>Cinoform</option>
            </select>
          </div>
          <div className="col-md-6 text-center">
            <div class="form-floating mb-3">
              <input {...form.register("price")} required type="text" className="form-control" placeholder="price" />
              <label for="floatingInput">Price</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <h5>More Information</h5>
            <div class="form-floating mb-3">
              <textarea {...form.register("information")} className="form-control py-2 fs-5" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <h5>Upload Picture</h5>
            <div class="form-floating mb-3">
              <textarea {...form.register("picture")} required className="form-control py-2 fs-5" />
            </div>
          </div>
        </div>


        <div className="row mb-4">
          <h5>Seller Details</h5>
          <div className="col-md-6">
            <div class="form-floating mb-3">
              <input {...form.register("name")} required type="text" className="form-control" placeholder="name@example.com" />
              <label for="floatingInput">Name</label>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div class="form-floating mb-3">
              <input {...form.register("phone")} required type="text" className="form-control" placeholder="name@example.com" />
              <label for="floatingInput">Phone</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <div class="form-floating mb-3">
              <input {...form.register("city")} required type="text" className="form-control" placeholder="name@example.com" />
              <label for="floatingInput">City</label>
            </div>
          </div>
        </div>

        {/* <div className="row mb-4"> */}
        <button type="Submit" className="btn btn-danger rounded-0 px-4 mb-3">Submit</button>
        {/* </div> */}

      </form>
    </div>
  )
}
