import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import {Pagination} from './Pagination';
import {Posts} from './Posts';
import ContactUs from './Side-bar/ContactUs';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(35);
  const [note, setnote] = useState([])
  const [summary, setSummary] = useState([])
  const [date, setDate] = useState()


  useEffect(()  =>{
    const FetchAPI = async () =>{
        const url = "https://api.first.org/data/v1/news";
        const res = await axios.get(url)
        const x =  res.data.data
        const Title = x.map(({ title }) => title);
        const Summary = x.map(({summary}) => summary);
        setSummary(Summary)
        setnote(x)
        setDate(res.data["last-modified"])
        const arr = []
        for (var a in x ){
        arr.push(x[a])
      }
      console.log(date)
    }
    FetchAPI();
},[])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = note.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const onDelete = (id) =>{
      setnote((oldData)=>
      oldData.filter((curData,indx)=>{
        return indx !== id; 
      }
      
       ) )
    }
    

  const [toggle, settoggle] = useState(false)
    

    const onToggle = () =>{
        settoggle(!toggle)
    }


  return (
    < >
      <ContactUs toggle = {toggle}
      onToggle = {onToggle}
      />
      {toggle?  
        <div className = "posts-block" > 
        {
          currentPosts.map((value, id) =>{
            return(
        <Posts
        id = {id}
        title = {value.title}
        summary = {value.summary}
        date = {date}
        link = {value.link}
        onDelete = {onDelete}
        toggle = {toggle}

        />
        
          )})
}</div> 
      :

      <div className = "posts-row" > 
      {
        currentPosts.map((value, id) =>{
          return(
      <Posts
      id = {id}
      title = {value.title}
      summary = {value.summary}
      link = {value.link}
      onDelete = {onDelete}
      toggle = {toggle}

      />
      
        )})
}</div> 


}
      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={note.length}
      paginate={paginate}
      currentPage = {currentPage}
    />
        
    </>
  );
}

export default App;
