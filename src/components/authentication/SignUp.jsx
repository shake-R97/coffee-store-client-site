import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const userdata = useContext(AuthContext);
    const { createUser } = userdata;
    console.log(createUser)

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        // const email = formData.get('email');
        // const password = formData.get('password');
        const newUserData = Object.fromEntries(formData.entries());
        const { email, password, ...restData } = newUserData;

      
       

        // createUser in the Firebase

        createUser(email, password)
            .then((userDetails) => {
                console.log(userDetails.user);


                  const userOtherData = {
            email, 
            ...restData, 
            creationTime : userDetails.user?.metadata?.creationTime,
            lastSignInTime : userDetails.user?.metadata?.lastSignInTime,
        }

                // post user data in mongodb database

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userOtherData)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Created Successfully",
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }

    return (
        <div className="hero bg-[#773709] min-h-[1100px] mt-8 md:mt-20">
            <div className="hero-content gap-6 w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl text-orange-600 md:text-5xl  font-extrabold">SignUP Now!</h1>
                    <p className="py-4 font-bold">
                        Be Part of this Rich Coffee Experience.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input border-b-orange-400" placeholder="Your Name" />
                            <label className="label">Address</label>
                            <input type="text" name='address' className="input border-b-orange-400" placeholder="Address" />
                            <label className="label">PhoneNumber</label>
                            <input type="tel" name='phoneNumber' className="input border-b-orange-400" placeholder="Your Number" />
                            <label className="label">PhotoUrl</label>
                            <input type="text" name='photo' className="input border-b-orange-400" placeholder="PhotoUrl" />
                            <label className="label">Email</label>
                            <input type="email"
                                name='email'
                                className="input border-b-orange-400" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password"
                                name='password'
                                className="input border-b-orange-400" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <input type="submit"
                                className="btn bg-orange-500 mt-4" value="SignUp" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;