import React , {useState} from 'react';
import HeroBanner from "../Components/HeroBanner"
import Excercises from "../Components/Excercises"
import SearchExcercises from "../Components/SearchExcercises"


const Home = () => {
  const [bodyPart , setBodyPart] = useState('all')
  const [excercises , setExercises] = useState([])
  return (
    <div className='body'>
      <HeroBanner/>
      
      <SearchExcercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
       setExercises={setExercises}
       bodyPart={bodyPart}
       excercises={excercises}
      />
    </div>
  )
}

export default Home