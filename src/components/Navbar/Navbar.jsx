import React from 'react';

import "./navbar.css";

import Searchbox from "../Searchbox/Searchbox";

const Navbar = () => {
  return (
    <div className='p-3 pt-3 d-flex jsutify-content-start align-items-center border-bottom'>
      <div className='px-3 me-5 d-flex align-items-center logo-text'>Gogol</div>
      <div className='flex-fill'>
        <Searchbox />
      </div>
    </div>
  )
}

export default Navbar;