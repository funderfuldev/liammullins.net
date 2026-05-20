import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router';

import './index.css'

import App from './App.tsx'
import Work from './pages/Work.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';


createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Work/>}/>
            <Route path='about' index element={<About/>}/>
            <Route path='contact' index element={<Contact/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </StrictMode>

)
