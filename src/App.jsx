import './App.css'
import { Routes , Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Animals from './components/Animals'
import Foods from './components/Foods'
import Nature from './components/Nature'
import Sport from './components/Sport'
import Random from './components/Random'
import Login from './components/Login'
import Transport from './components/About'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className='App bg-slate-100'>
        <Navbar/>
       <Routes>
        <Route index element={<Home />} />
        <Route path='/transport' element={<Transport />} /> 
        <Route path='/animals' element={<Animals />} /> 
        <Route path='/foods' element={<Foods />} /> 
        <Route path='/nature' element={<Nature />} /> 
        <Route path='/sport' element={<Sport />} /> 
        <Route path='/random' element={<Random />} /> 
        <Route path='/login' element={<Login />} /> 
       </Routes>
       <Footer />
      </div>
      
    </>
  )
}

export default App