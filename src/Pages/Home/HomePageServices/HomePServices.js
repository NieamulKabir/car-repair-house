import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Loading from '../../../Loading/Loading';
import HomePService from './HomePService';

const HomePServices = () => {
    const [services] = useServices();

    if(services.length===0){
        return <Loading></Loading>
    }
    return (
        <div className='bg-orange-100 font-serif'>
            <div className='mx-10 py-16'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-violet-500'>AUTOMOTIVE REPAIR & <span className='text-orange-600'>SERVICES</span></h1>
                    <p className='text-xs md:text-sm w-9/12 mx-auto pt-2 pb-10'>At <span className='text-orange-600'>Repair House</span> Automotive we provide all the services your vehicle needs. We Provide all type of Vehicles Services Including Repair, Maintenace, Inception, Enginee Diagnostic, Oil Change, Filter so no matter where you are located we will take care of your car.</p>
                </div>

                <div className='w-11/12 md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-7'>
                    {
                        services.slice(0, 4).map(service => <HomePService
                            key={service.id}
                            service={service}
                        ></HomePService>)
                    }
                </div>

                <button className="px-8 py-3  mt-10 bg-violet-500 text-white rounded hover:bg-white hover:text-gray-800 transition duration-300 font-bold font-serif"> <NavLink to="/services">SEE ALL SERVICES</NavLink></button>



            </div>

        </div>
    );
};

export default HomePServices;