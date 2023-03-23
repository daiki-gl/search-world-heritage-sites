import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HeritageSite from './pages/HeritageSite'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/heritageSite/:name" element={<HeritageSite />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
