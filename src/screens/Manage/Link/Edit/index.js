import React from "react";

import Layout from "../../../Layouts/Manage";

const Edit = () => {
  return (
    <Layout>
      <h1>Edit Link</h1>

      <div>
        <form>
          <div className='form-group'>
            <label>Label</label>
            <input type='text' className='form-control' />
          </div>

          <div className='form-group'>
            <label>Url</label>
            <input type='text' className='form-control' />
          </div>

          <div class='form-group form-check'>
            <input type='checkbox' class='form-check-input' id='isSocial' />
            <label class='form-check-label' for='isSocial'>
              Is social
            </label>
          </div>

          <div className='d-flex justify-content-end'>
            <button className='btn btn-theme-base'>Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Edit;
