import React, { useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Login = () => {


const emailRef = useRef('');
const passwordRef = useRef('');
const navigate = useNavigate();
const location = useLocation();

let from = location.state?.from?.pathname || "/";

const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

const handleSubmit= e=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password)
}
const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
        await sendPasswordResetEmail(email);
        // toast('Sent email');
    }
    else{
        // toast('please enter your email address');
    }
}



    return (
        <div className=' py-5 mb-20 font-serif'>
            <h2 className="text-3xl py-10 font-bold text-violet-500">Please Login</h2>
            <div className='md:flex justify-center mx-auto'>
                <div className='mx-auto md:mx-0'>
                    <img src="https://asitive.com/wp-content/uploads/2022/06/istockphoto-1281150061-612x612-1.jpg" alt="" />
                </div>
                <div className="w-5/6 md:w-1/2 lg:w-1/3 py-16 mx-auto md:mx-0 bg-orange-100 rounded-box ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-5/6 md:w-2/3 mx-auto ">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Email</span>
                            </label>
                            <input required ref={emailRef} type="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text  text-black font-semibold">Password</span>
                            </label>
                            <input required ref={passwordRef} type="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
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

                            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>


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