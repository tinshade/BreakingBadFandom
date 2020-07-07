import React, {useState, useEffect} from 'react';
import axios from 'axios'; //Using this library for HTTP requests.
import './App.css';
import Header from './components/UI/header'
import Search from './components/UI/Search'
import Pagination from './components/UI/Pagination'
import Header from './components/UI/header'
import CMenu from './components/characters/characterMenu'

function App() {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [query,setQuery] = useState('')

  useEffect(() =>{
    async function fetchItems(){
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data); 
      setIsLoading(false);
    }
    fetchItems();
  }, [query])

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = items.slice(firstPost,lastPost);

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }


  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>{setQuery(q)}}/>
      <CMenu isLoading={isLoading} items={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
      <Header/>
    </div>
  );
}

export default App;
