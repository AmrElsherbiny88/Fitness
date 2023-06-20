import React from 'react'

import { MDBFooter } from 'mdb-react-ui-kit';
const footer = () => {
  return (
    <>
          <MDBFooter  className='text-center text-lg-left foot'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://amr-elsherbiny-5r94.vercel.app/'>
         AmrElsherbiny
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default footer