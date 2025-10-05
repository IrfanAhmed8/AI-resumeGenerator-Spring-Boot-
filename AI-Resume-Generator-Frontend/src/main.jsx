import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import GenerateResume from './components/GenerateResume'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GenerateResume" element={<GenerateResume/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
