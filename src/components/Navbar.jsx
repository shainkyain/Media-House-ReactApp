import React from 'react'
import { Link } from 'react-router-dom'
 

const Navbar = () => {


  return (
    <div className='w-[100%] text-1xl flex justify-between px-20 py-3   border-b-4 bg-zinc-500'> 
    
    <div >   
      {/* <img src="./assets/icons/news.png" className='w-10 h-10' alt='logo' /> */}
      <h1 className='text-white'>MEDIA-HOUSE</h1>
         
    </div>
    <div className='list-none flex gap-10 text-white '>
        <li className='hover:bg-sky-700'> <a href="/" >HOME </a> </li>
        <li> <a href="/" >NEWSOOM </a></li>
        {/* <li> <Link to="/addNews" >AddNews </Link></li> */}
        <li> <a href="#" > ABOUT </a></li>
        </div>
    </div>
  )
}

export default Navbar