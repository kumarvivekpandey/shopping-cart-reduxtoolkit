
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Header from './components/Header'
 

function App() {
  

  return (
    <>
    <Header />
    <Routes>
   <Route  exact path ='/' element={<Home />} />
   <Route  exact path ='/cart' element={<Cart />} />

   

    </Routes>
    </>
  )
}

export default App
