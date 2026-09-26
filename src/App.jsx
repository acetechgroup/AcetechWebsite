import './App.css'
import './Components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
