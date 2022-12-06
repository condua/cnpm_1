import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../css/Header.css';
import {FaRegBell} from "react-icons/fa";
// import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {CiSquarePlus} from "react-icons/ci";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const Header = () => {
    let navigate = useNavigate(); 
    const addTask = () => { 
        let path = '/addTask'; 
        navigate(path);
    }

    return (
            // <div className='full-screen'>
                <div className='header'>
                    <Link to='/dashboard'><div className='Left'>Dashboard</div></Link>
                    

                    <div className='Right'>
                        <div className='navbar'>
                            <ul>
                                <li><a href="#"><FaRegBell/></a></li>
                                <li>Harry Maguire</li>
                                <li><img className='dropbtn' onClick={myFunction} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfp2ZChG_fFrAb1Ze7zK890kRfs2_XsWmDw&usqp=CAU" alt=""  style={{width:'40px',height:'40px',borderRadius:'50%'}}/></li>
                            </ul>
                        </div>
                        
                        <p onClick={addTask}><CiSquarePlus style={{marginBottom:'3px'}}/> Add task</p>
                    </div>

                    <div class="dropdown">
                        <div id="myDropdown" class="dropdown-content">
                            <a href="#">Profile</a>
                            <a href="#">Help</a>
                            <a href="#">Setting</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>     
            // </div> 
    );
};

export default Header;