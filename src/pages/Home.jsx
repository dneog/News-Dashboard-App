import React, { useEffect, useState } from 'react'
import './Home.css';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { SAVE_NEWS } from '../redux/NewsSlice';
import { selectFilterdNews, selectIsEmpty } from '../redux/FilterSlice';
import { Link } from 'react-router-dom';
const Home = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading]= useState(false)
  const dispatch = useDispatch()
  const filteredNews = useSelector(selectFilterdNews)

 async function FetchData(){
  setLoading(true)
  try {

    const response = await fetch('https://linesnews.onrender.com/api/news-datas')
    const newsData = await response.json()
    setNews(newsData.data)
    dispatch(SAVE_NEWS(newsData.data))
    setLoading(false)
    
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
    
  }

  useEffect(()=> {
    FetchData()
  }, [])

 

  return (
    <div className='home'>
      {loading ? <div className='pageLoading'></div> : 
      filteredNews.map((data)=> (
        <Card key={data.id} data={data} />
      ))
     }
      
    </div>
  )
}

export default Home