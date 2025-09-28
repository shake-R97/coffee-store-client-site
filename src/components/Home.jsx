import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const InitialCoffees = useLoaderData();
    const [Coffees , setCoffees] = useState(InitialCoffees)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
                {
                    Coffees.map(coffee => <CoffeeCard key={coffee._id}
                     Coffees = {Coffees}
                     setCoffees = {setCoffees}   
                     coffee={coffee}></CoffeeCard> )
                }
            </div>
        </div>
    );
};

export default Home;