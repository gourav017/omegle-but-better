
import './App.css'


import { Room } from "./components/Room"
import { Landing } from "./components/Landing"
import { BrowserRouter, Route, Routes } from "react-router";
function App() {


  return (

    <BrowserRouter>

      <Routes>


        <Route path="/" element={<Landing />} />

      </Routes>

      <Routes>
        <Route path="/room" element={<Room />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
