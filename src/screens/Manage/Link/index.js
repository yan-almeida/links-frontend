import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../Layouts/Manage";

const Links = () => {
  return (
    <Layout>
      <div className='row'>
        <div className='col'>
          <h1>Links</h1>
        </div>

        <div className='col text-right pt-2'>
          <Link to='/manage/links/create' className='btn btn-theme-base'>
            Add
          </Link>
        </div>
      </div>

      <div className='py-2 pl-1 pr-3 d-flex justify-content-between'>
        <div className='pr-3'>
          <img src='https://via.placeholder.com/100' alt='Link icon' />
        </div>

        <div className=''>
          <p className='text-theme-base mt-3'>Item Label</p>
          <p className='text-theme-base '>Item Url</p>
        </div>

        <div className='ml-auto p-2 clearfix'>
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
    </Layout>
  );
};

export default Links;
