import React from 'react';
import nodata from '../nodata-01.png';
import { Link } from 'react-router-dom';

export default function Nodata() {
  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-md-6 text-center">
            <img className='img-fluid' src={nodata} alt="" />
            <p className="lead fw-bold text-center text-danger p-0 m-0">Character with the given name not found</p>
            <p>Please try with a different keyword.</p>
            <Link to='/' className="btn btn-outline-light">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
