import { SnackbarProvider } from './context/SnackbarContext'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Snackbar from './components/Snackbar'

function App() {
  return (
    <SnackbarProvider>
      <Snackbar />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </SnackbarProvider>
  )
}

export default App
