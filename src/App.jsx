 
import './App.css'
import Navbar from './components/Navbar'
 
import Category from './components/Category'
import { Routes ,Route } from 'react-router-dom'
import Index from './components/Index'
import AddNews from './components/AddNews'

function App() {
 

  return (
    <>
    <Navbar/>
    
  <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/addNews' element={<AddNews/>} />
  </Routes>
   
    
   
     </>
  )
}

export default App
