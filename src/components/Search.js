import React from 'react'


const Search = ({search})=>{
    return(
        <div className="search">
            <form action="#">
                <input type="text"
                className="form-control"
                placeholder="Search characters"

                onKeyUp={(e)=>{search(e.target.value)}}

                />
            </form>
        </div>
    )
}

export default Search;