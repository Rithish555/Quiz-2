import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Quiz from './Components/Quiz/Quiz.jsx'
import Started from './Components/Started/Started.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='quiz' element={<Quiz />} />
      <Route path='started/:numofq/:catnum/:difurl/:dur' element={<Started />}></Route>
      <Route path='*' element={<div>Not Found!</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={route} />
)

