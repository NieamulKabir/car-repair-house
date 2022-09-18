import React from 'react';

const Service = (props) => {
    const { name, price, img, description } = props.service;
    return (
        <div>


            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>{description.slice(0, 80)}...</p>
                    <p className='font-semibold'><span>Charge : </span> <span className='text-orange-600'>${price}</span></p>
                    <div className="card-actions justify-end">
                        <button className="px-4 py-2  font-semibold text-white rounded hover:bg-gray-500 transition duration-300 bg-violet-500">Book Now</button>
                        <button className="px-4 py-2  font-semibold text-white rounded hover:bg-gray-500 transition duration-300 bg-violet-500">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;