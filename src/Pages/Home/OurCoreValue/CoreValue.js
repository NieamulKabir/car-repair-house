import React from 'react';

const CoreValue = () => {
    return (

        <div className='font-serif'>

            <div className='mx-10 py-20 '>
                <div className='mb-10'>
                    <h1 className='text-3xl font-bold text-purple-500'>Our Core Values</h1>
                    <p className='text-purple-500'>Repair House Is on of the trusted and reputable company .Which is helps you and repair your carr efficient cost</p>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3'>


                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <p className='bg-pink-400 px-4 py-2 text-3xl rounded-lg'><i class="fa-regular fa-star"></i></p>
                            <h2 className="text-xl font-bold">LINCESED AND INSURED!</h2>
                            <p className='text-sm'>All of our Auto Mechanics, Staff Members are fully licensed,Eligible, bonded and insured.</p>

                        </div>
                    </div>
                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <p className='bg-pink-400 px-4 py-2 text-3xl rounded-lg'><i class="fa-regular fa-comment"></i></p>
                            <h2 className="text-xl font-bold">FREE QUOTE & ESTIMATE</h2>
                            <p className='text-sm'>We offer a free Estimate for Auto Service , and will provide you with an actual quote .</p>

                        </div>
                    </div>
                    <div className="card  bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <p className='bg-pink-400 px-4 py-2 text-3xl rounded-lg'><i class="fa-solid fa-clock"></i></p>
                            <h2 className="text-xl font-bold">DEPENDABLE SERVICES</h2>
                            <p className='text-sm'>We Provide Dependable Auto Services. Each Project is Finished on Time and Budget.</p>

                        </div>
                    </div>



                </div>
            </div>


        </div>
    );
};

export default CoreValue;