import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import ProductList from './Components/ProductList/ProductList.jsx'
import ProductModal from './Components/ProductModal/ProductModal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <App />
    <ProductList/>
    <ProductModal/>
  </StrictMode>,
)
