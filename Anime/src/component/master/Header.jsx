import React, { useContext, useEffect, useState } from "react";
import { Navbar, Button, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function MyApp() {

    const url = window.location.pathname;
    const [show, setShow] = useState(false);
    const [currentLink, setCurrentLink] = useState(url);
    const { auth } = useContext(AuthContext);
    let user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => { }, [currentLink]);

    const logout = () => {
        localStorage.removeItem('currentUser');
    }

    return (

        <Navbar className="bg-gray-400"
            fluid={true}
            setShow={true}
        >
            <Link to="/">
                <Navbar.Brand >
                    <img
                        src="https://www.freepnglogos.com/uploads/one-piece-logo-18.png"
                        className="mr-5 h-8 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Anime Peace
                    </span>
                </Navbar.Brand>
            </Link>

            <div className="flex md:order-2">


                {
                    auth ?
                        //  <Link to="/Logout"><Button onClick={()=>logout()}> Logout</Button></Link>
                        <>
                            <Dropdown
                                label={"Welcome " + user.first_name}
                                dismissOnClick={false}
                            >
                                {/* <Dropdown.Item className="hover:text-black" >
                                    Favorite
                                </Dropdown.Item> */}
                                <Dropdown.Item onClick={()=>logout()} className="hover:text-black">
                                <Link to="/Logout">Logout</Link>
                                </Dropdown.Item>
                            </Dropdown>
                        </>
                        : <Link to="/Register"><Button> Sing Up</Button></Link>
                }



                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>

                <Navbar.Link href="/" active={(currentLink === '/')}>
                    <Link to="/" onClick={()=>setCurrentLink('/')}>Home</Link>
                </Navbar.Link>

                <Navbar.Link href="/Animes" active={(currentLink === '/Animes')}>
                    <Link to="/Animes" onClick={()=>setCurrentLink('/Animes')}>Animes</Link>
                </Navbar.Link>

                <Navbar.Link href="/About" active={(currentLink === '/About')}>
                    <Link to="/About" onClick={()=>setCurrentLink('/About')}>About</Link>
                </Navbar.Link>

                <Navbar.Link href="/Contact" active={(currentLink === '/Contact')}>
                    <Link to="/Contact" onClick={()=>setCurrentLink('/Contact')}>Contact</Link>
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>

    );
}

export default MyApp;