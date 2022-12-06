import logo from './logo.svg';
import './App.css';
import './css/SideBar.css'
import Dashboard from './pages/dashboard';


import SideBar from './component/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
