import React from 'react'
import Home from './pages/Home'
import Heading from './components/Heading'
import MobileSearch from './components/MobileSearch'
import {Routes,Route} from 'react-router-dom';
import NewsDetails from './pages/NewsDetails';
import Search from './pages/Search';

const App = () => {
  return (
    <div>
     <Heading />
     <div className='bg'>
     <MobileSearch />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/news/:id' element={<NewsDetails />} />
      </Routes> 
     </div>
     
    </div>
  )
}

export default App