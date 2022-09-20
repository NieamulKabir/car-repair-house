import React from 'react';
import CoreValue from '../Home/OurCoreValue/CoreValue';
import './About.css'

const About = () => {
    return (
        <div>
            <div className=' font-serif'>
                {/* banner img  */}
                <div>
                    <img className='mx-auto w-full h-[250px] md:h-[500px]' src="https://nieamulkabir.github.io/repairdata/img/about.jpg" alt="" />
                </div>

                <h1 className='text-3xl font-bold text-violet-500 pt-10 pb-4'>ABOUT US</h1>

                <div className='bg-orange-100 pb-14'>
                    <div className='w-9/12 text-start mx-auto pt-10'>

                        <div className='text-2xl font-semibold text-violet-500'>
                            <h1>We Have 2+ Years of Service</h1>
                            <h1>Experience for You</h1>
                        </div>

                        <p className='text-sm py-2'>We value each and every one of our customers and expect you to tell your family and friends about us, as well as come back to us for your automotive service and auto repair needs. We hold the quality of our service and parts to the highest standards.</p>

                        <div className='flex flex-wrap'>

                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-slate-300 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-violet-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium text-black">Customer Satisfaction</span>
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-slate-300 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-violet-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium text-black">Latest & Modern Shop</span>
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-slate-300 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-violet-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium text-black">Expertise Diagnostics</span>
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-slate-300 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-violet-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium text-black">Fair Pricing</span>
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-slate-300 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-violet-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium text-black">Expert Care</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* core value  */}
                <CoreValue></CoreValue>
            </div>

        </div >
    );
};

export default About;