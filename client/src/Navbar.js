import { Link } from "react-router-dom";
import { useState } from "react"

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const toggle = () =>{
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active')
    }    

    return (  
        <nav>
            <div className="main-wrapper">
                <div className="nav-bar">
                    <div className="main-logo">
                        <a href="/"><img src="logo.png" id="main-logo" alt="" /></a>
                    </div>
                    <button 
                    className="toggle-button"
                    onClick={() => {
                        //setIsNavExpanded(!isNavExpanded);
                        toggle();
                      }}
                      >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <div className="navbar-links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sessions">Sessions</a></li>
                            <li><a href="teachers">Teachers</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/login"><button className="button">login</button></a></li> 
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </nav>
    );
}
/*
            <script>
                const toggleButton = document.getElementsByClassName('toggle-button')[0]
                const navbarLinks = document.getElementsByClassName('navbar-links')[0]

                toggleButton.addEventListener('click', () => {
                    navbarLinks.classList.toggle('active')
                })
            </script>*/
 
export default Navbar;