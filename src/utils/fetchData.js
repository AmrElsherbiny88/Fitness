export const exerciseOptions = {
    

    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.React_App_Rapid_Api_Key,
    }
  
} ;










export const fetchData = async ( url , options ) => {
     
    const response = await fetch( url , options );
    const data = await response.json();

    return data ; 

}