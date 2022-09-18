import React from 'react';
import { Link, NavLink } from 'react-router-dom';


let activeStyle = {
    textDecoration: "underline",
    color: 'white',
    backgroundColor: 'none'

};


const Header = () => {
    return (
        <div className=' bg-orange-100 font-serif'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Service</Link></li>
                            <li><Link>Team</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Car Repair</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal mx-2 px-6">

                        <li className="px-2 font-semibold">
                            <NavLink className={{bgColor:'white'}} to="/home"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>HOME
                            </NavLink>
                        </li>

                        <li className= "px-2 font-semibold">
                            <NavLink to="/services"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>SERVICES
                            </NavLink>
                        </li>

                        <li className= "px-2 font-semibold">
                            <NavLink to="/about"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>ABOUT
                            </NavLink>
                        </li>



                        <li className= "px-2 font-semibold">
                            <NavLink to="/team"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                TEAM
                            </NavLink>
                        </li>
                        <li className= "px-2 font-semibold">
                            <NavLink to="/contact"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='ml-16 lg:ml-0 mr-6'>
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>



    );
};

export default Header;