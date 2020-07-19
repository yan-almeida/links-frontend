import React from "react";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <nav className='navbar navbar-expand-lg bg-theme-base text-light'>
        <div className='container d-flex justify-content-around'>
          <div>
            <span className='font-weight-light'>Back</span>
          </div>

          <div className='text-center'>
            <span>Links</span>
          </div>

          <div>
            <span className='font-weight-light'>Exit</span>
          </div>
        </div>
      </nav>

      <div className='container'>{children}</div>
    </div>
  );
};

export default Layout;
