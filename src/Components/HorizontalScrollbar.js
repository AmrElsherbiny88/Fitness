import React, { useContext } from 'react'
import { Col, Container } from 'react-bootstrap'
import BodyPart from './BodyPart'
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material'






const HorizontalScrollbar = ({ data , bodyPart , setBodyPart}) => {
  return (
    <ScrollMenu  className='scroll'>
     {data.map((item) =>(
        <Box
        className="mt-5"
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m='0 40px'
        >
         <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
     )

     )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar