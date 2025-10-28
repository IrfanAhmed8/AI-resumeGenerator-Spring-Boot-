import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import GenerateResume from './pages/GenerateResume'
import { Toaster } from 'react-hot-toast'
import Resume from './components/Resume'
import DynamicForm from './pages/DynamicForm'
import { FormProvider } from './context/formContext'
import Templates from './pages/templates'
import ResumeTwoColumn from './components/resumeTwoColumn'
import Register from './pages/Register'

import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import ProfilePage from './pages/ProfilePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <FormProvider>
      <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Templates" element={<Templates/>}></Route>
        <Route path="/GenerateResume" element={<GenerateResume/>}></Route>
        <Route path="/Resume/Form" element={<DynamicForm/>}></Route>
        <Route path="/Resume" element={<Resume/>}></Route>
        <Route path="/ResumeTwoColumn" element={<ResumeTwoColumn/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </BrowserRouter>
    </FormProvider>
    </AuthProvider>
    
    
    
  </StrictMode>,
)
