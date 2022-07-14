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
                        <Link to="/"><img src="logo.png" id="main-logo" alt="" /></Link>
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sessions">Sessions</Link></li>
                            <li><Link to="teachers">Teachers</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/login"><button className="button">login</button></Link></li> 
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