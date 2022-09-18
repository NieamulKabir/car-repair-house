import React from 'react';
import useServices from '../../hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <div>
                <img className='w-full h-[250px] md:h-[500px]' src="https://nieamulkabir.github.io/repairdata/img/slider/slider1.jpg" alt="" />
            </div>
            <div className='bg-orange-100 font-serif'>
                <div className='mx-10 py-16'>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold text-violet-500'>AUTOMOTIVE REPAIR & <span className='text-orange-600'>SERVICES</span></h1>
                        <p className='text-xs md:text-sm w-9/12 mx-auto pt-2 pb-10'>At <span className='text-orange-600'>Repair House</span> Automotive we provide all the services your vehicle needs. We Provide all type of Vehicles Services Including Repair, Maintenace, Inception, Enginee Diagnostic, Oil Change, Filter so no matter where you are located we will take care of your car.</p>
                    </div>

                    <div className='w-11/12 md:w-8/12 lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;