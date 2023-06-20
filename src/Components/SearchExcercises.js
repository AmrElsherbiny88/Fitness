import React , {useEffect  ,  useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HorizontalScrollbar from './HorizontalScrollbar';
import {
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';

import { exerciseOptions , fetchData } from '../utils/fetchData';

const SearchExcercises = ( { setExercises , bodyPart , setBodyPart } ) => {
    const[ search , setSearch ] = useState("")
   
    const [bodyParts , setBodyParts] = useState([])
    useEffect(() => {
     const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" , exerciseOptions);
        setBodyParts(['all' , ...bodyPartsData]);
     }

      fetchExercisesData();

    } , [])

    const handleSearch = async () =>{
        if(search) {
            const exercisesdata = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises' , exerciseOptions );
            
            const searchedExercises = exercisesdata.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch("");
            setExercises(searchedExercises);
        }
        
    }

  return (
    <>
           
      <Container>
        <Row>
            <Col xl={12} md={12} lg={12} sm={12} className='text-center search-title mt-5' >
                <h1>Awesome Exercises You <br/>Should Know</h1>
            </Col>

            <Col xl={12} md={12} lg={12} sm={12}  >
          

      <MDBInputGroup className='mb-3 mt-5'>
        <input 
        className='form-control' 
        placeholder="Search Exercise" 
        type='text' 
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <MDBBtn className='bg-danger'
        onClick={handleSearch}
        >Search</MDBBtn>
      </MDBInputGroup>
              
            
            </Col>
           
               
            <Col xl={12} md={12} lg={12} sm={12}  >
              <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Col>
        </Row>
      </Container>

    </>
  )
}

export default SearchExcercises