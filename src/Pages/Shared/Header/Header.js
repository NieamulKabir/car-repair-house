import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';


let activeStyle = {
    textDecoration: "underline",
    color: 'white',
    backgroundColor: 'none'

};


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className=' bg-orange-100 font-serif'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/services'>Service</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/team'>Team</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-orange-900 text-3xl pr-2'><i class="fa-solid fa-car-side"></i></span> Repair</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal mx-2 px-6">

                        <li className="px-2 font-semibold">
                            <NavLink className={{ bgColor: 'white' }} to="/home"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }> <span className='text-2xl'><i class="fa-solid fa-house-chimney"></i></span>
                            </NavLink>
                        </li>

                        <li className="px-2 font-semibold">
                            <NavLink to="/services"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>SERVICES
                            </NavLink>
                        </li>

                        <li className="px-2 font-semibold">
                            <NavLink to="/about"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>ABOUT
                            </NavLink>
                        </li>



                        <li className="px-2 font-semibold">
                            <NavLink to="/team"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                TEAM
                            </NavLink>
                        </li>
                        <li className="px-2 font-semibold">
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
                {
                    user ?
                        <button className='' onClick={handleSignOut}>
                            <div className='ml-16 md:ml-80  lg:ml-0 lg:mr-6'>
                                <Link className="btn w-34 md:w-36">Sign Out</Link>
                            </div>
                        </button>

                        :
                        <div className='ml-24 md:ml-80  lg:ml-0 lg:mr-6'>
                            <Link to='/login' className="btn">LOG IN</Link>
                        </div>
                }


            </div>
        </div>



    );
};

export default Header;