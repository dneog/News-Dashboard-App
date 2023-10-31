import React, { useEffect, useState } from 'react'
import search from '../assets/search.png';
import './Heading.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews } from '../redux/NewsSlice';
import { useNavigate } from 'react-router-dom';


const MobileSearch = () => {
  const allNews = useSelector(selectNews)
  const navigate= useNavigate()
  const [searchData, setSearchData] = useState('')
  
  const handleSubmit=(e)=> {
    e.preventDefault()
    const qTerm= e.target.search.value
    e.target.reset()
    return navigate(`/search?q=${qTerm}`)
  }




  return (
    <div className='h1sm'>
      <form className='form2' onSubmit={handleSubmit}>
      <input className='mobileinp' type="text" name='search' id=""  placeholder='Search' />
    <button className='btntt' type='submit' ><img className='search' src={search} alt="search" />
    </button>
      </form>
   
    
    
</div>
  )
}

export default MobileSearch