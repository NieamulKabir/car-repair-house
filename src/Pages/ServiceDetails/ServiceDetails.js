import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/repairdata/serviceId.json`)
            .then(res => res.json())
            .then(data => setServicesDetails(data.services))
    }, []);

    useEffect(() => {
        const foundService = servicesDetails.find(services => services.id === serviceId);
        console.log(foundService);
        setSingleService(foundService)

    }, [serviceId, servicesDetails])

    return (
        <div className='my-16'>

            <div className=' px-5 md:px-0 mx-auto '>
                <div className="card lg:card-side bg-orange-100 shadow-xl md:w-3/5 mx-auto">
                    <figure><img className='' src={singleService?.img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className=" py-10 text-center text-xl md:text-3xl font-bold text-violet-500">{singleService?.name}</h2>
                        <h2 className="text-black  mx-auto pb-10">About This Service: {singleService?.description} </h2>

                        <NavLink to="/services" activeStyle={{ fontWeight: "bold", color: "#34D399" }}><button className="px-8 py-3 mb-10 bg-violet-500 rounded hover:bg-violet-600 text-white transition duration-300 ">Go Back</button></NavLink>
                    </div>
                </div>

                

                
            </div>
        </div>
    );
};

export default ServiceDetails;