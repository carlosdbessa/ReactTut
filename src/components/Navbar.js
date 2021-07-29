
import React, {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            
                
            <nav className= 'navbar'>
                <div className='navbar-container'>
                    <Link to='./' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="../images/baby_soap_logo.png" width="150" height="150" />
                  
                    </Link> 
                
                   
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                INÍCIO
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                PRODUCTOS
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to="contactsform" className='nav-links' onClick={closeMobileMenu}>
                               CONTACTOS
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                               SignUp
                            </Link>
                        </li> */}
                    </ul>   
                    
             </div>
            </nav>
        </>
    );
}

export default Navbar; 