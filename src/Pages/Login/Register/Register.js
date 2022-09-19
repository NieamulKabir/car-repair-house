import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        // navigate('/home');
    }



    return (
        <div className='mb-20 font-serif'>
            <h2 className="text-3xl py-10 font-bold text-violet-500" >Please Register</h2>

            <div className='md:flex justify-center mx-auto'>
                <div className='md:w-1/2 mx-auto md:mx-0'>
                    <img className='w-4/5 mx-auto' src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000" alt="" />
                </div>
                <div className="w-5/6 md:w-1/2 lg:w-1/3 mx-auto md:mx-0 pt-16 pb-10 bg-orange-100 rounded-box">


                    <form onSubmit={handleRegister}>
                        <div className="form-control w-5/6 md:w-2/3 mx-auto  ">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Your Name</span>
                            </label>
                            <input required name="name" type="text" placeholder="Type your Name" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text text-black font-semibold">Email</span>
                            </label>
                            <input required type="email" name="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text text-black font-semibold">Password</span>
                            </label>
                            <input required type="password" name="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
                            <br /><br />
                            <input type="submit" value="SIGNUP NOW" className=" btn border-0 bg-violet-500 hover:bg-violet-700 text-white" />
                            <br />
                            <div className="text-red-500 pb-5">
                                {/* {error} */}
                            </div>
                            <h2>Have an Account? <NavLink to="/login" className="text-violet-500">Click to Login</NavLink></h2>
                            <br />

                            <button className=" btn bg-gray-50 hover:bg-gray-200 text-gray-500 border-none">
                                <i className="fab fa-google text-xl text-violet-500 pr-2"></i>Signup With Google</button>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    );
};

export default Register;