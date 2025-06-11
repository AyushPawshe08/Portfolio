import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotfoundPage from './pages/NotfoundPage.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
// import Menu from './components/Menu.jsx'
import Loader from "./components/Loader.jsx"




const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/about",element:"<About/>"},
  {path:"/skills",element:"<Skills/>"},
  {path:"/projects",element:"<About/>"},
  {path:"/contact",element:"<Contact/>"},
  // {path:"/menu",element:<Menu/>},
  {path:"/loader",element:<Loader/>},
  {path: "*",element:<NotfoundPage/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
