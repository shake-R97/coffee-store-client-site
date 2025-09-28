import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {

    const dataCoffee = useLoaderData();
    console.log(dataCoffee);
    const {chefName , coffeeName , details , photoUrl , price , supplier , taste } = dataCoffee;

    return (
        <div className="hero mt-32 py-8 md:mt-56 bg-[#6F4E35] min-h-[700px] md:min-h-[1100px]">
            <div className="hero-content gap-16 md:gap-48 flex-col lg:flex-row">
                <img
                    src={photoUrl}
                    className="w-[300px] h-[360px] md:w-[450px] md:h-[600px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-2xl text-[#331A15] md:text-5xl font-bold">{coffeeName}</h1>
                    <p className="py-6 text-[18px] md:text-2xl">
                       <span className='text-[#331A15]'>Chef Name : <span className='text-[#c2ac7b]'>{chefName}</span> </span> 
                    </p>
                    <p className="py-6 text-[18px] md:text-2xl">
                       <span className='text-[#331A15]'>Suplier : <span className='text-[#c9b17e]'>{supplier}</span> </span> 
                    </p>
                    <p className="py-6 text-[18px] md:text-2xl">
                       <span className='text-[#331A15]'>Taste : <span className='text-[#c2ac7e]'>{taste}</span> </span> 
                    </p>
                    <p className="py-6 text-[18px] md:text-2xl">
                       <span className='text-[#331A15]'>Details : <span className='text-[#c0aa7b]'>{details}</span> </span> 
                    </p>
                    <p className="py-6 text-[18px] md:text-2xl">
                       <span className='text-[#331A15]'>Price : <span className='text-[#ffc830]'>${price}</span> </span> 
                    </p>
                   
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;