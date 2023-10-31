import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './NewsDetails.css';

const NewsDetails = () => {
    const {id}= useParams();
   
    const [newsDetails, setNewsDetails]= useState(null)
    const [loading, setLoading]= useState(false)



    async function FetchData(){
      setLoading(true)
      try {
    
        const response = await fetch('https://linesnews.onrender.com/api/news-datas')
        const newsData = await response.json()
        const selectedProduct= newsData.data.find((item)=> item.id == id)
        setNewsDetails(selectedProduct)
        
        setLoading(false)
        
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
        
      }
    
      useEffect(()=> {
        FetchData()
      }, [])
    
    
    console.log(newsDetails)

  return (
    <>
     {loading && <div className='pageLoading'></div>}
    
    
     {!loading && newsDetails && <div className='home'>
    <div className='bckMain'>
      <Link to={'/'}>
      <p className='bck'>← Back to Home</p>
      </Link>
    </div>
    
   
    
    
     
      <div className='details'>
        <div className='imgd'>
        <img className='nicon' src={newsDetails.attributes.newsIcon} alt="news-icon" />
        </div>
        <div>
        <p className='h11d'>{newsDetails.attributes.headline}</p>
       <p className='has'>Tags : <span className='tg'>{newsDetails.attributes.hashtags}</span> </p>
       <p className='has'>Category : <span className='tgh'>{newsDetails.attributes.category}</span> </p>
       <p className='has'>Source : <span className='tgs'>{newsDetails.attributes.newsSource}</span> </p>

        </div>
      
      </div>
    </div>
}
    </>
   
    
  )
}

export default NewsDetails