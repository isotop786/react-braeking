import React,{useEffect} from 'react'
import {BrowserRouter as Router,
Switch, Route, Link} from 'react-router-dom';
import CastItem from './CastItem'
import Single from './Single';

const Cast = ({cast})=>{
    useEffect(()=>{
            console.log("cast is a item"+cast)
    })
    return(
        <div className="cards">
         
            {cast.map(item=>{
                return(                        
                <CastItem item={item} />

                )
            })} 
           
        </div>
    )
}

export default Cast;