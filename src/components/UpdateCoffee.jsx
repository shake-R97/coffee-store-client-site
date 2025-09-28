import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffeeData = useLoaderData();
    const { _id, chefName, coffeeName, details, photoUrl, price, supplier, taste } = coffeeData;


    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffeeData = Object.fromEntries(formData.entries());
        console.log(updatedCoffeeData);

        // send updated coffee to the db

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after updated', data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })


    }

    return (
        <div>
            <Link className='text-2xl font-bold ' to='/'>Back To Home</Link>
            <div className='px-10 py-12 md:px-28 md:py-36 mt-12  bg-[#F4F3F0]'>
                <h1 className='text-3xl md:text-5xl font-bold text-center mb-3.5'>Update Coffee</h1>

                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 gap-7 md:grid-cols-2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px]">Name</legend>
                            <input type="text" name='coffeeName' className="input w-full border-none"
                                defaultValue={coffeeName}
                                placeholder="Enter Coffee Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px]">Chef</legend>
                            <input type="text" name='chefName' className="input w-full border-none"
                                defaultValue={chefName}
                                placeholder="Enter Coffee Chef" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px]">Supplier</legend>
                            <input type="text" name='supplier' className="input w-full border-none"
                                defaultValue={supplier}
                                placeholder="Enter Coffee Supplier" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px] ">Taste</legend>
                            <input type="text" name='taste' className="input w-full border-none"
                                defaultValue={taste}
                                placeholder="Enter Coffee Taste" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px] ">Price</legend>
                            <input type="number" name='price' className="input w-full border-none"
                                defaultValue={price}
                                placeholder="Price" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px] ">Details</legend>
                            <input type="text" name='details' className="input w-full border-none"
                                defaultValue={details}
                                placeholder="Enter Coffee Details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[16px] md:text-[18px]">Photo</legend>
                        <input type="text" name='photoUrl' className="input w-full border-none"
                            defaultValue={photoUrl}
                            placeholder="Enter Photo Url" />
                    </fieldset>
                    <input type="submit" className='w-full text-[16px] md:text-[18px]  border-none btn bg-linear-to-r from-purple-500 to-slate-300 text-white mt-5' value="UpdateCoffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;