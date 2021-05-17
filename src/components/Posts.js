import React, {useState} from 'react'
import "./news.css"

export const Posts = ({date, title, link, onDelete, id, toggle}) => {

    const [expand, setExpand] = useState(true)
    const ExpandIt = () =>{
            setExpand(!expand)
            // console.log(value.target.id)
    }
console.log(toggle)
    const DeletePost = () =>{
        onDelete(id)
    }

    return (
        
        <div  className= {toggle? "a-block" : "a-row"  } >
    {expand?
              <>
          <div   className= {toggle? "container-title-block" : "container-title-row"  } onClick  = {ExpandIt}>
            <span className = {toggle? "content-block" : "content-row"  } > {title}  </span> <br/>
            <i className = "date"  >{date}</i>
          </div>
            <button className = {toggle? "delete-btn-block"  : "delete-btn-row"}  onClick = {DeletePost} >&#215;</button>
            </>
        
        :
        
          
          <div  className='container-summary' onClick  = {ExpandIt}>
            <iframe title = "Tap in the blur region outside the news box to close this frame" src = {link} height = "500" width = "1000"  className = "container-iframe" />

          </div>

        }
        </div>
      
    )
}
