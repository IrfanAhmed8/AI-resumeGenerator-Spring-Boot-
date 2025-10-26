import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import GenerateResume from './components/GenerateResume'
import { Toaster } from 'react-hot-toast'
import Resume from './components/Resume'
import DynamicForm from './components/DynamicForm'
import { FormProvider } from './context/formContext'
import Templates from './pages/templates'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormProvider>
      <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Templates" element={<Templates/>}></Route>
        <Route path="/GenerateResume" element={<GenerateResume/>}></Route>
        <Route path="/Resume/Form" element={<DynamicForm/>}></Route>
        <Route path="/Resume" element={<Resume/>}></Route>
      </Routes>
    </BrowserRouter>
    </FormProvider>
    
    
    
  </StrictMode>,
)
