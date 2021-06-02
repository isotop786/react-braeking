import React,{useState,useEffect}from 'react';
import Header from './ui/Header'
import axios from 'axios'
import LoadingGif from '../img/spinner.gif'

import Loading from './Loading'
import Cast from './Cast'
import No from './No';

const Home = ()=>{
    const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{

    const fetchCasts = async ()=>{
      const result = await axios.get(`https://breakingbadapi.com/api/characters/`)
      const data = await result.data
      console.log(data)
      await setCast(data)
      await setLoading(false)
      console.log(`cast are ${cast}`)
    }
    fetchCasts()
  },[])

    return(
    <div className="container">
      
    <Header/>

    {loading ? (
     <Loading spinner={LoadingGif}/>
    ): 
    (
      <div className="">
      {cast.length ? 
      (<Cast cast={cast}/>)
 
      : (<No/>)
    }
      </div>
    )
    }
  


  </div>
  )
}

export default Home;