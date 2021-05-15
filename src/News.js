import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './news.css'
// import App from './App';

const News = ({note, setnote, summary ,setSummary, date, setDate}) => {
    // const [note, setnote] = useState([])
    // const [summary, setSummary] = useState([])
    // const [date, setDate] = useState()

    const [expand, setExpand] = useState(false)

    



useEffect(()  =>{
    const FetchAPI = async () =>{
        const url = "https://api.first.org/data/v1/news";
        const res = await axios.get(url)
        const x =  res.data.data
        const Title = x.map(({ title }) => title);
        const Summary = x.map(({summary}) => summary);
        setSummary(Summary)
        setnote(Title)
        setDate(res.data["last-modified"])
        console.log(res.data)
    }
    FetchAPI();
},[])
    const ExpandIt = () =>{
        return(
            setExpand(!expand)
        )
    }
    // console.log(expand)
    const Slice = () =>{
        console.log("it worked")
    }
    return (
<>
{/* <button onClick= {FetchAPI} >Submit</button> */}
        
          {expand?
            summary.map((value, index) => {
                
            return(  
                <div
                className = "container"
                key = {index}
                value = {value}
                onClick = {ExpandIt}
                >  
                {value}<br/>
                {date}
                
                </div>
                
            )})
        : 
        note.map((value, index) => {
                
            return(  
                <div
                className = "container"
                key = {index}
                value = {value}
                onClick = {ExpandIt}
                >  
                <button onClick = {Slice} > Delete </button>
                {value}<br/>
                {date}
                
                </div>
                )})
        } 
            

</>
            )
            }


export default News;
