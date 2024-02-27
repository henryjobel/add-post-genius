// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from "../../assets/logo/apg-logo 2.png"


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
        if(password.length < 6){
            toast.error("is less than 6 characters")
            return; 
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("You don't have a capital letter")
            return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            toast.error("You don't have a special character")
            return;
        }
        else{
            toast.success('Successfully Register')
            return;
        }
    }
    
    return (
        <div className="hero min-h-screen">
            <div>
            <div className='ml-24'>
                    <img src={logo} alt="" />
                    </div>
                    <h1 className='text-4xl font-extrabold my-10 text-center'>Register Your Account</h1>
                <form onSubmit={handleRegister} className="w-96 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' required placeholder="PhotoURL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name='password' required className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-outline btn-success">Register</button>
                    </div>
                </form>
                <h1 className='text-center my-4'>You  have an account  <Link className='text-green-600' to='/'>Login</Link></h1>
            </div>
        </div>
    );
};

export default Register;