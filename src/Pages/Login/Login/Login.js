import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' py-5 mb-20 font-serif'>
            <h2 className="text-3xl py-10 font-bold text-violet-500">Please Login</h2>
            <div className='md:flex justify-center mx-auto'>
                <div className='mx-auto md:mx-0'>
                    <img src="https://asitive.com/wp-content/uploads/2022/06/istockphoto-1281150061-612x612-1.jpg" alt="" />
                </div>
                <div className="w-5/6 md:w-1/2 lg:w-1/3 py-16 mx-auto md:mx-0 bg-orange-100 rounded-box ">
                    <form >
                        <div className="form-control w-5/6 md:w-2/3 mx-auto ">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Email</span>
                            </label>
                            <input required type="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text  text-black font-semibold">Password</span>
                            </label>
                            <input required type="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
                            <br /><br />
                            <input type="submit" value="LOGIN" className=" btn bg-violet-500 hover:bg-violet-700 text-white border-none" />
                            <br />
                            <div className="text-red-500 pb-5">
                                {/* {error} */}
                            </div>
                            <div>
                                {/* {success} */}
                            </div>
                            <h2><span className='text-black font-semibold'>Need Account?</span> <NavLink className="text-violet-500" to="/register">Click to Signup</NavLink></h2>
                            <br />
                            <button className=" btn bg-gray-50 hover:bg-gray-200 text-gray-500 border-none">
                                <i className="fab fa-google text-xl text-violet-400 pr-2"></i>SignIn With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;