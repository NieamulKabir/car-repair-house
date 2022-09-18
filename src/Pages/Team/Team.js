import React, { useEffect, useState } from 'react';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/repairdata/team.json`)
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])
    return (
        <div className='font-serif bg-orange-100 pb-16'>
            <img className='w-full w-full h-[250px] md:h-[500px] mx-auto' src="https://nieamulkabir.github.io/repairdata/img/team.jpg" alt="" />
            <h1 className='text-3xl font-bold text-violet-500 py-10'>OUR TEAM</h1>
            <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>
                {
                    team.map(service =>
                       <div className=''>
                         <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className='w-full' src={service.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-lg font-medium text-orange-400">{service.name}</h2>
                                <h2 className="">{service.title}</h2>
                               
                             
                            </div>
                        </div>
                       </div>
                        )
                }
            </div>
        </div>
    );
};

export default Team;