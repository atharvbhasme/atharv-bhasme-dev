import { Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Projects from './pages/Projects'

function App() {
  return (
    <>
    <Helmet>
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
    </Helmet>
    </>
  )
}

export default App
