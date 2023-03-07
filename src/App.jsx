import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route index element={<Home/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
  )
}

export default App
