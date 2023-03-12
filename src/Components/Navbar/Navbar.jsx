import React, { useState, useEffect } from 'react'
import { isDOMComponent } from 'react-dom/test-utils';
import { GrTextAlignRight } from 'react-icons/gr';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Navbar/navbar.css"
//icon
import { BsSearch } from 'react-icons/bs'
function Navbar() {
    const [isMobile, setisMobile] = useState(false);
    const [isOpen, setisOpen] = useState(true);
    //stiky
    const [fix, setFix] = useState(false);
    //dropdown
    const [show1, setShow1] = useState(false);
    function setFixed() {
        if (window.scrollY >= 90) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div className={fix ? "All__class__nav" : "All__class__fix"}>
            <div className="container">
                <div className='NavMain'>
                    <div className='NavLogo'>
                        <Link to="/"><img src="/images/logo_002.png" alt="logo" />
                            {/* <img className='canta__images' src="/images/Canta-hat.png" alt="" /> */}
                        </Link>
                    </div>
                    <div className='NavItem mt-3'>
                        <ul className='Menu'>
                            <li className='MenuItem'>
                                <NavDropdown
                                    title={
                                        <span className="text-dark main_menu_tit menu__tit MenuHover">Biz haqimizda</span>
                                    }
                                    show={show1}
                                    onMouseEnter={() => setShow1(true)}
                                    onMouseLeave={() => setShow1(false)}
                                    onToggle={() => setShow1()}
                                >
                                    <NavDropdown.Item as={Link} to="/management" className='menuhover mt-2 mb-2 ps-4'> Rahbariyat</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/guliston" className='menuhover mt-2 mb-2'>"Guliston" jurnali</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/teatr" className='menuhover mt-2 mb-2' >"Teatr" jurnali</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className='MenuItem'><Link to="/yangiliklar" state={{ id: 0 }} className='link MenuHover'>Yangiliklar</Link></li>
                            <li className='MenuItem'><Link to="/yangiliklar" state={{ id: 1 }} className='link MenuHover'>Maqolalar</Link></li>
                            <li className='MenuItem'><Link to="/yangiliklar" state={{ id: 2 }} className='link MenuHover'>Jurnal sahifalarida</Link></li>
                            <li className='MenuItem'><Link to="/yangiliklar" state={{ id: 3 }} className='link MenuHover'>Arxiv</Link></li>
                            {/* <li className='MenuItem'><Link to="/arxiv" state={{ id: 4 }} className='link MenuHover'>Jurnalarxiv</Link></li> */}
                        </ul>
                    </div>
                    <div className='NavSearch'>
                        <BsSearch className='search_icon' />
                        <input type="text" className='search_inp' placeholder=' Qidiruv...' />
                    </div>
                </div>
                <div className='mobile_nav_full_main'>
                    <div className="NavMobile">
                        <div className='MobileLogo'>
                            {/* <img className='canta_hat_mobile' src="/images/Canta-hat.png" alt="hat" /> */}
                            <Link to="/">
                                <img src="/images/logo_002.png" alt="logo" />
                            </Link>
                        </div>
                        <div className='ToggleMenu'>
                            {
                                (isOpen === true) ? <div onClick={(() => { { setisOpen(false) } { setisMobile(true) } })}><GrTextAlignRight className='icon_toggle me-3' /></div> : <div onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}><VscChromeClose className='text-danger font-weight-bold icon_toggle me-3' /></div>
                            }
                        </div>
                    </div>

                    {(isMobile) == true ?
                        <div className='Last__Mobile__menu'>
                            <ul>
                                <li>
                                    <NavDropdown
                                        title={
                                            <span className="text-dark main_menu_tit  link">Biz haqimizda</span>
                                        }
                                        show={show1}
                                        onMouseEnter={() => setShow1(true)}
                                        onMouseLeave={() => setShow1(false)}
                                        onToggle={() => setShow1()}
                                    >
                                        <NavDropdown.Item as={Link} to="/management" className='menuhover ' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}> Rahbariyat</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/guliston" className='menuhover ' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}>"Guliston" jurnali</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/teatr" className='menuhover' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })} >"Teatr" jurnali</NavDropdown.Item>

                                    </NavDropdown>
                                </li>
                                <li className='Mobile__Item' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}>
                                    <span><Link to="/yangiliklar" state={{ id: 0 }} className='link'>Yangiliklar</Link> </span> </li>
                                <li className='Mobile__Item' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}>
                                    <span><Link to="/yangiliklar" state={{ id: 1 }} className='link'>Maqolalar</Link> </span> </li>
                                <li className='Mobile__Item' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}>
                                    <span><Link to="/yangiliklar" state={{ id: 2 }} className='link'>Jurnal sahifalarida</Link> </span> </li>
                                <li className='Mobile__Item' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}>
                                    <span><Link to="/yangiliklar" state={{ id: 3 }} className='link'>Arxiv</Link> </span> </li>
                                {/* <li className='Mobile__Item' onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}>
                                    <span><Link to="/arxiv" state={{ id: 4 }} className='link'>Jurnalarxiv</Link> </span> </li> */}
                            </ul>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar