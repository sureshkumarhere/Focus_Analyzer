import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import CameraCapture from './Model';
import Register from './Register';
import GraphPage from "./Graphpage";
function App() {

  return (
    <div >
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path='/concentration' element={<CameraCapture />}/>
          <Route path='/data' element={<GraphPage />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App