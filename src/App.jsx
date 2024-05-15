
import { Outlet } from "react-router-dom"

//components
import HeaderComponent from "./components/HeaderComponent"
import NavbarComponent from "./components/NavbarComponent"


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
