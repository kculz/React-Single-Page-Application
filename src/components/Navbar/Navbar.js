import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItems, NavLink,NavItemBtn,NavBtnLink } from './NavbarElements'

const Navbar = () => {
    const [clicked, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!clicked)
    const showButton = () =>{
        if(window.width <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

useEffect(()=>{
    showButton();
}, []);
window.addEventListener('resize', showButton)
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        { clicked ? <FaTimes /> : <FaBars /> }
                    </MobileIcon>
                    <NavMenu onClick={handleClick} clicked={clicked}>
                        <NavItems>
                            <NavLink to="/">Home</NavLink>
                        </NavItems>

                        <NavItems>
                            <NavLink to="/footer">Service</NavLink>
                        </NavItems>

                        <NavItems>
                            <NavLink to="/pricing">Products</NavLink>
                        </NavItems>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="sign-up">
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
