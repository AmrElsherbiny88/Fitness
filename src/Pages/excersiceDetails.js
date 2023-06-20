import React , { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions , fetchData } from '../utils/fetchData'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercise from '../Components/SimilarExercise'
const excersiceDetails = () => {
  return (
    <Box>
      
      <Detail />
      <ExerciseVideos />
      <SimilarExercise /> 


    </Box>
  )
}

export default excersiceDetails