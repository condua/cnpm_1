import logo from './logo.svg';
import './App.css';
import './css/SideBar.css'
import Footer from './component/Footer';
import Header from './component/Header';
import SideBar from './component/SideBar';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
      <Header></Header>
        <Routes>
        {/* <Route path='' element={<Dashboard/>}/> */}
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/addTask' element={<AddTask/>}/>
        </Routes>
      </SideBar>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
