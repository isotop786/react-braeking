import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import Loading from './Loading'

const Single = ()=>{
    const {id} = useParams();
    const [item,setItem] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
    
      const c_id = id
      const fetchCasts = async ()=>{
      const result = await axios.get(`https://breakingbadapi.com/api/characters/${c_id}`)
      const data = await result.data
      console.log(data)
      await setItem(data)
      await setLoading(false)
    //   console.log(`cast are ${item.map(e=> e.name)}`)
    }
    fetchCasts()
    },[])
    return(
        <div>
            
        {loading ? <div className="container">
            <div className="center">
                <h3>data loading...</h3>
            </div>
        </div>: 
        
        <div>
        <Link className="btn" to="/">Back to Home</Link>
             {item.length && item.map(m=>{
                 return(
                     <div key={m.char_id}>
                         <h3>{m.name}</h3>
                         <img src={m.img} alt=""/>
                     </div>
                 )
             })}
             <h2>ID: {id}</h2>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque non a magnam iure maiores! Vitae deleniti labore repellat quibusdam quasi debitis adipisci est, culpa, delectus temporibus dolorum odit odio vel.</p>
  
        </div>
        }

      
 
 </div>
            
    
    )
}

export default Single;