import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {

    const initialUsers = useLoaderData();
    console.log(initialUsers)
    const [users, setUsers] = useState(initialUsers);


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {

                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);    

                            Swal.fire({
                                title: "Deleted!",
                                text: "That Account has been deleted.",
                                icon: "success"
                            });
                        }
                })



            }

    });

}

return (
    <div className='mt-18'>
        <h1 className='text-3xl md:text-5xl text-center'>Users : {users.length}</h1>

        <div className='mt-20'>
            <div className="overflow-x-auto">
                <table className="table border-b border-b-amber-600">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Click For Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {
                                        index + 1
                                    }
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.phoneNumber}</td>
                                <th className='space-x-2'>
                                    <button className="btn btn-ghost btn-xs">View</button>
                                    <button className="btn btn-ghost btn-xs">Edit</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost  btn-xs"> <span className='font-semibold text-[16px]'>X</span></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};

export default Users;