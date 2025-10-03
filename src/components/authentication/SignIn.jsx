import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        const {email , password} = userData;
        console.log(email , password);

        // send to firebase

        signInUser(email , password)
        .then(result => {
            console.log(result.user)
            const signInInfo = {
                email, 
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }

            // update last sign in to the database
            fetch('http://localhost:3000/users',{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then((res)=> res.json())
            .then(data => {
                console.log('after update patch', data)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero bg-[#773709] min-h-[1100px] mt-8 md:mt-20">
            <div className="hero-content gap-6 w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl text-orange-600 md:text-5xl  font-extrabold">SignIN Now!</h1>
                    <p className="py-4 font-bold">
                        Be Part of this Rich Coffee Experience.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn} className="fieldset">
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
                                className="btn bg-orange-500 mt-4" value="SignIN" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;