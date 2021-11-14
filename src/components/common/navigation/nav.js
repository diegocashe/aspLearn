import * as React from 'react';
// import { MenuIcon } from '@heroicons/react/solid';
import { NavLink } from "react-router-dom";
import Logo from '../../../img/net-seeklogo.com.svg'
// import BasicMenu from './basicMenu';

export default function Navigation() {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <div className="h-full w-44 sm:block flex justify-center ">
                        <img src={Logo} alt='menos' className='w-20 sm:w-auto' />
                        {/* <h1>Asp.Net Lerning</h1> */}
                        {/* <LogoIcon fontColor={"#202020"} /> */}
                    </div>
                    <ul className="nav-options-container mt-3 sm:mt-0">
                        <li><NavLink exact to="/" activeClassName="active">Learn</NavLink></li>
                        <li><NavLink exact to="/about" activeClassName="active">About Us</NavLink></li>
                        <li><NavLink exact to="/quiz" className="btn-special"><span>Take a Quiz</span></NavLink></li>
                    </ul>
                    {/* <div className='hidden sm:block'>
                        {BasicMenu()}
                    </div> */}
                </div>
            </nav>
        </div>
    )
}
