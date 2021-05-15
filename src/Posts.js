import React, {useState} from 'react'
import "./news.css"

export const Posts = ({currentPosts, CurrentSummary}) => {

    const [expand, setExpand] = useState(false)
    const ExpandIt = () =>{
        return(
            setExpand(!expand)
        )
    }

    return (
        <>
    {expand?
        
        currentPosts.map((value, id) => {
            return(
          <div key={id} className='container' onClick  = {ExpandIt}>
            {value}
          </div>
        )})
        :
        CurrentSummary.map((value, id) => {
            return(
          <div key={id} className='container' onClick  = {ExpandIt}>
            {value}
          </div>
        )})
        }
      </>
    )
}
