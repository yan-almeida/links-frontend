import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='container d-flex justify-content-end'>
      <div className='h-100 p-3 pt-5'>
        <h1>Sign Up</h1>

        <div className='h-100'>
          <form>
            <div className='form-group'>
              <label>Email</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input type='password' className='form-control' />
            </div>

            <div className='form-group'>
              <label>Password Confirmation</label>
              <input type='password' className='form-control' />
            </div>

            <div className='d-flex justify-content-end'>
              <button className='btn btn-theme-base'>Sign Up</button>
            </div>
          </form>

          <div className='container text-center fixed-bottom pb-5'>
            <div className='text-muted'>Already have and Account?</div>

            <Link to='/sign-in'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
