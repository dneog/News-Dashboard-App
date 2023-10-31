import React from 'react'
import './Search.css'
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useSearchParams} from 'react-router-dom'
import { selectNews } from '../redux/NewsSlice'
import Card from '../components/Card'

const Search = () => {
    const [searchParams]= useSearchParams()
    const qTerm= searchParams.get("q")
   
    const [searchNews, setSearchNews]= useState([])
    const [loading, setLoading]= useState(false)

    useEffect(()=> {
    async function fetchSearch(){
        setLoading(true)
        const response = await fetch('https://linesnews.onrender.com/api/news-datas')
       const newsData = await response.json()
        const allNews = newsData.data
        let searchText 
        if(qTerm !== ''){
        searchText = allNews.filter((data) => data.attributes.headline.toLowerCase().includes(qTerm.toLowerCase()))
        
      }else{
        searchText = []
        
      }
      setSearchNews(searchText)
      setLoading(false)
      }
  
     fetchSearch()
    
    },[qTerm])

    
   
  return (
    <div className='home2'>
        { loading && <div className='pageLoading'></div> }
        {!loading && <div className='searchResult'>
        
      {!loading && !searchNews && <p>No results found for <span className='sres1'> {qTerm}</span></p> }
    {!loading && searchNews && searchNews.length > 0 ? <p>Search Results for : <span className='sres1'> {qTerm}</span></p> : <p>No results found for <span className='sres1'> {qTerm}</span></p>}
    </div>}

    <div className='searchResult'>
    {searchNews.map((data)=> (
        <Card key={data.id} data={data} />
      ))}
    </div>
    </div>
  )
}

export default Search