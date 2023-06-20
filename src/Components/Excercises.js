import React , { useEffect , useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box , Stack , typography } from '@mui/material';
import { exerciseOptions , fetchData } from '../utils/fetchData';
import { Container } from 'react-bootstrap';
import ExerciseCard from './ExerciseCard';


const Excercises = ({ excercises , setExercises , bodyPart  }) => {
  const [ currentPage , setCurrentPage ] = useState(1);
  const exercisesPerPage= 9 ;
  const indexOfLastExercise = currentPage * exercisesPerPage ;
  const indexOfFirstExercise= indexOfLastExercise - exercisesPerPage;
  const currentExercises = excercises.slice( indexOfFirstExercise , indexOfLastExercise );

  const paginate = ( e , value ) =>{
    setCurrentPage(value);
    window.scrollTo({ top:1200 , behavior:'smooth' })
    
  }

 


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesdata = [] ;

      if ( bodyPart === 'all' ){
        exercisesdata = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises' , exerciseOptions );
      }else {
        exercisesdata = await fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseOptions );
      }

      setExercises(exercisesdata);
    }

    fetchExercisesData();
} , [bodyPart] );
  return (

    <Container>
       <Box id="exercises"
          sx={{mt: {lg:'110px'}}}
          mt="50px"
          p="20px"
       >
     
         <h3 className='mb-5 result-h3'>Showing Result</h3>
  
         <Stack
          direction="row"
          sx={{gap:{ xs:'50px'}}}
          flexWrap='wrap' 
          justifyContent='center'
         >
            
            {currentExercises.map((exercise , index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
            
         </Stack>

         <Stack mt='100px' alignItems='center'>
           {excercises.length > 9 && (
             
             <Pagination
             className='pagg mb-3'
             color='standard'
             shape='ronded'
             defaultPage={1}
             count={Math.ceil(excercises.length / exercisesPerPage )}
             page={currentPage}
             onChange={paginate}
             size='large'
             >

             </Pagination>

           ) }
         </Stack>
       </Box>
    </Container>
  
  )
}

export default Excercises