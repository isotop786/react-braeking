import React,{useState,useEffect}from 'react';
import Header from './ui/Header'
import axios from 'axios'
import LoadingGif from '../img/spinner.gif'

import Loading from './Loading'
import Cast from './Cast'
import No from './No';

import Search from '../components/Search'

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

  const searchCast = async (cast)=>{
    await setLoading(true);
    const result = await axios.get(`https://breakingbadapi.com/api/characters?name=${cast}`)
    const data = await result.data 

    await setCast(data)
    await setLoading(false)
    console.log('the search relust is: '+result.data)
  }



    return(
    <div className="container">
      
    <Header/>

      <Search search={searchCast}/>

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