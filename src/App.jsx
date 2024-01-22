
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Blog/:id' element={<BlogDetail />}/>
      </Routes>
    </>
  )
}

export default App
