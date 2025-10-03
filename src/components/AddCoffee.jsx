import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        // const coffeeName = form.coffeeName.value;
        // const chef = form.chefName.value;
        // const supplier = form.supplier.value;
        // const taste = form.taste.value;
        // const category = form.category.value;
        // const details = form.details.value;
        // const photo = form.photoUrl.value;
        // const coffeeData = {coffeeName, chef, supplier, taste, category, details, photo}
        // console.log(coffeeData);
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send coffee data to the db

        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee Added Successfully",
                        showConfirmButton: false,
                        timer: 1800
                    });
                }
                console.log('after adding coffee to db', data)
            })


    }

    return (
        <div>
            <Link className='text-2xl font-bold ' to='/'>Back To Home</Link>
            <div className='px-28 py-36 mt-12  bg-[#F4F3F0]'>
                <h1 className='text-3xl font-bold text-center'>Add New Coffee</h1>
                <p className='text-[14px] my-5 md:text-[16px] text-gray-400 text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-1 gap-7 md:grid-cols-2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px]">Name</legend>
                            <input type="text" name='coffeeName' className="input w-full border-none" placeholder="Enter Coffee Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px]">Chef</legend>
                            <input type="text" name='chefName' className="input w-full border-none" placeholder="Enter Coffee Chef" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px]">Supplier</legend>
                            <input type="text" name='supplier' className="input w-full border-none" placeholder="Enter Coffee Supplier" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px] ">Taste</legend>
                            <input type="text" name='taste' className="input w-full border-none" placeholder="Enter Coffee Taste" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px] ">Price</legend>
                            <input type="number" name='price' className="input w-full border-none" placeholder="Price" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] md:text-[18px] ">Details</legend>
                            <input type="text" name='details' className="input w-full border-none" placeholder="Enter Coffee Details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[16px] md:text-[18px]">Photo</legend>
                        <input type="text" name='photoUrl' className="input w-full border-none" placeholder="Enter Photo Url" />
                    </fieldset>
                    <input type="submit" className='w-full text-[16px] md:text-[18px]  border-none btn bg-linear-to-r from-gray-400 to-green-200 text-white mt-5' value="AddCoffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;