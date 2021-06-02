import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import Loading from './Loading'
import spinner from '../img/spinner.gif'

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
    }
    fetchCasts()
    },[])
    return(
        <div>
            
        {loading ? <div className="container">
            <div className="center" >
               
                <img style={{marginTop:"200px"}} src={spinner} alt=""/>
            </div>
        </div>: 
        
        <div>
        
             {item.length && item.map(m=>{
                 return(
                     <div key={m.char_id} className="container">
                        <Link style={{borderRadius:"5%"}} className="btn" to="/">Back to Home</Link>
                        <div className="dis">
                      
                         <img src={m.img} alt=""/>
                         <div className="sub ">
                             <h1 className="item">{m.name}</h1>
                             <h3 className="item">Actor name: {m.portrayed}</h3>
                             {m.birthday !=="Unknown" && <h4 className="item">Data of Birth: {m.birthday}</h4>}
                             <h3 className="item">Nick name: {m.nickname}</h3>
                            <h5 className="item">Status in the show: <span style={{background:'green',padding:'5px',borderRadius:'20%'}}> {m.status}</span></h5>
                            <h4 className="item">Occupations: </h4>
                            {m.occupation && m.occupation.map(o=>{
                                return(
                                    <li>{o}</li>
                                )
                            })}

                            <h4 className="item">Appreance in Season:  {m.appearance.map(a=>(<div style={{display:'inline',margin:'2px', padding:'5px',border:'1px solid #eee'}}>{a}</div>))}</h4>
                            

                            <p className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit voluptatibus cum dignissimos eum dolor fugiat ex cumque illum, hic numquam est veritatis eveniet quis molestiae corporis neque modi nesciunt?</p>
                         </div>
                        </div>
                        
                     </div>
                 )
             })}
            
  
        </div>
        }

      
      <style jsx>{
        `
        .dis{
            display:flex;
            max-height:100vh;
           
        }

        .dis img{
            width:50%;
           
        }

        .sub{
            display:flex;
            flex-direction:column;
            padding:10px;
        }

        .item{
            padding:5px;
            maring-top:2px;
            margin-bottom:2px
        }

            
        @media (max-width:500px){
            .dis{
                display:block;
                flex-direaction: column;
            }

            .dis img{
                text-align:center;
                width:300px;

            }
        }

        }

          `
      }</style>
 
 </div>
            
    
    )
}

export default Single;