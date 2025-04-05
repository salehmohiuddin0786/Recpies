import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Recipes from './Pages/Recipes'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipe/:id" element={<Recipes />} />
      <Route path="/Recipe/:id/Instructions" element={<Recipes />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      
    </Routes>
  </BrowserRouter>

  </StrictMode>
)
