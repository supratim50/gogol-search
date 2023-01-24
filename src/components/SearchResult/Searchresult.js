import React from 'react';
import "./searchresult.css";

const Searchresult = ({link, title, description}) => {
  return (
    <div className='main-box mt-4'>
        <div className='link-box text-decoration-none'>
            <p className='link fs-6 mb-1'>{link}<span className='text-muted ms-1'>&gt; {title}</span></p>
            <p className='title fs-5 mb-1 text-primary'>{title}</p>
        </div>
        <div>
            <p className='details fs-6 text-muted'>{description}</p>
        </div>
    </div>
  )
}

export default Searchresult;