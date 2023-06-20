import React from 'react'
import { Link } from 'react-router-dom'
import { Button , Stack , Typography } from '@mui/material'

// to={`/exercise/${exercise.id}`}
const ExerciseCard = ( {exercise} ) => {
  return (
    <Link className='exercise-card'>

       <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" /> 
 
         <Stack direction="row">
             <Button
             sx={{ mt:'15px', color: '#fff' , backgroundColor:"red" ,
                fontSize:'14px', borderRadius:'20px', textTransform:'capitalize',
            }}
             >
               {exercise.bodyPart}
             </Button>


             <Button
             sx={{ ml:'8px', mt:'15px', color: '#fff' , backgroundColor:"black" ,
                fontSize:'14px', borderRadius:'20px', textTransform:'capitalize',
            }}
             >
               {exercise.target}
             </Button>
             
         </Stack>
             <Typography mt='11px'
              color='white' fontWeight='bold' pb='10px' 
              textTransform='capitalize' 
              
              >
                {exercise.name}
             </Typography>
    </Link>
  )
}

export default ExerciseCard