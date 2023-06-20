import React from 'react'
import { Stack , typography  } from "@mui/material"
const BodyPart = ({ item , setBodyPart , bodyPart }) => {
  return (
    <>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item? ' 4px solid #FF2625' : '',
            backgroundColor:'transparent',
            borderBottomLeftRadius:'20px',
            width:'150px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({top:1800 , left: 100, behavior:'smooth'});
        }}
        
      >
      <i class="fa-solid fa-dumbbell icon-dumpp"></i>

      <h4 className='item-h4'>{item}</h4>
      </Stack>

    </>
  )
}

export default BodyPart