
import { Outlet } from "react-router-dom"

//components
import HeaderComponent from "./components/HeaderComponent"
import NavbarComponent from "./components/NavbarComponent"

//axios
import axios from "axios"

axios.defaults.baseURL = 'https://dummyjson.com';


function App() {

  return (
    <>
      <HeaderComponent/>
      <NavbarComponent/>
      <Outlet/>

      
    </>
  )
}

export default App
