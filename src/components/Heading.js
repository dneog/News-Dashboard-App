import React, { useEffect, useState } from 'react'
import './Heading.css';
import search from '../assets/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews } from '../redux/NewsSlice';
import { FILTER_NEWS } from '../redux/FilterSlice';
import {Link, NavLink, useNavigate} from 'react-router-dom';

const Heading = () => {
  const allNews = useSelector(selectNews)
  const navigate= useNavigate()
  const [data, setData] = useState('All')
  const [searchData, setSearchData] = useState('')
  
  const dispatch = useDispatch()
  const allCategory = [
    'All',
    ...new Set(allNews.map((news) => news.attributes.category))
  ]

  useEffect(()=> {
    dispatch(FILTER_NEWS({
      data, allNews
    }))

    
  }, [data,allNews, dispatch])

  

  const handleSubmit=(e)=> {
    e.preventDefault()
    const qTerm= e.target.search.value
    e.target.reset()
    return navigate(`/search?q=${qTerm}`)
  }


  return (
    <div className='heading'>
        <div>
          <Link to={'/'}>
          <p className='news'>News App</p>
          </Link>
           
        </div>

        <div className='hd'>
        <div className='h1s'>
        <form className='form' onSubmit={handleSubmit}>
            <input className='inps' type="text" placeholder='Search' name='search'  />
            <button className='btnt' type='submit' >
            <img className='search' src={search} alt="search" />
            </button>
            </form>
        </div>

        <div className='h2s'>
        <select className='sel' name="" id="" value={data} onChange={(e)=> setData(e.target.value)}>
          {allCategory.map((data, index) => (
            <option key={index} value={data}>{data}</option>

          ))}             
        </select>
        </div>
        </div>

    
    </div>
  )
}

export default Heading