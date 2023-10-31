import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  let tags = data.attributes.hashtags.split(', ')
  let publishedDate = data.attributes.publishedAt
  let newDate = new Date(publishedDate)

  let year = newDate.getUTCFullYear()
  let month = newDate.getUTCMonth() + 1
  let day = newDate.getUTCDate()

  let Format = (day < 10 ? '0' : '') + day + '-' + (month < 10 ? '0' : '') + month + '-' + year

  return (
    <div className='card'>
      <div className='i1'>
        <img className='nicon' src={data.attributes.newsIcon} alt="news-icon" />
      </div>

      <div>
      <p className='h11'>{data.attributes.headline}</p>
      <span className='tag'>
      {tags.map((tag)=> (
        <p>#{tag} </p>
      ))}
      </span>
     
      <span className='category'>{data.attributes.category}</span>
      <p className='pub'>Published At : <span>{Format}</span></p>
      <p className='pub2'>Source : <span className='g'>{data.attributes.newsSource}</span></p>
      <Link to={`/news/${data.id}`}>
      <button className='but'>Read More</button>
      </Link>
      

      </div>
       
    </div>
  )
}

export default Card