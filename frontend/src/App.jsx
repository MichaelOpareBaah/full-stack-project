
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import Layout from './layouts/Layout'
import BlogDetail from './pages/BlogDetail'
import Blog from './components/Blog'
import EventDetail from './pages/EventDetail'
import Contact from './pages/Contact'
import Executives from './pages/Executives'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function App() {


  return (
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='events' element={<Events />}></Route>
        <Route path='blogs' element={<Blog />}></Route>
        <Route path='blogs/:id' element={<BlogDetail />}></Route>
        <Route path='events/:id' element={<EventDetail />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='executives' element={<Executives />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='projects/:id' element={<ProjectDetail />}></Route>
      
      </Route>
     </Routes>
     </BrowserRouter> 
  
  )
}

export default App
