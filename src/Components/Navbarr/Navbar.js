import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
const NavBar = () => {
    const [showBasic, setShowBasic] = useState(false);
  return (
    
    <>
  <MDBNavbar expand='lg' dark className='navv'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='ms-3' href=' https://amr-elsherbiny-5r94.vercel.app/'>AmrElsherbiny</MDBNavbarBrand>

         
        </MDBContainer >
    </MDBNavbar>
    </>
  )
}

export default NavBar