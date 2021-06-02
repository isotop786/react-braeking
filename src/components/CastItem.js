import React,{useEffect} from 'react'
import {BrowserRouter as Router,
    Switch, Route, Link} from 'react-router-dom';
import Single from './Single'
const CastItem = ({item})=>{
    useEffect(()=>{
        console.log('Cast item init')
    })
    return( 
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                        <img src={item.img}/>
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Actor Name:</strong>
                        {item.portrayed}
                        </li>
                        <li><strong>Nickname:</strong>
                        {item.nickname}
                        </li>
                        <li>
                               <Link className="btn" to={`/single/${item.char_id}`}>View details</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        

    )
}

export default CastItem;