import React, {useState, useEffect} from 'react'
import axios from 'axios';
// import axios from 'axios';
import './App.css';
import News from './News';
import {Pagination} from './Pagination';
import {Posts} from './Posts';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
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
        setnote(Title)
        setDate(res.data["last-modified"])
        // console.log(x)
    }
    FetchAPI();
},[])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = note.slice(indexOfFirstPost, indexOfLastPost);
  const CurrentSummary = summary.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(currentPosts)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    < >
        
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={note.length}
        paginate={paginate}
      />
        {/* <News
        note = {note}
        setnote = {setnote}
        setSummary = {setSummary}
        setDate = {setDate}
        summary = {summary}
        date = {date}
        /> */}
        <Posts
        currentPosts = {currentPosts}
        CurrentSummary = {CurrentSummary}
        
        />
        
    </>
  );
}

export default App;
