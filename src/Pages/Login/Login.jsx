// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from "../../assets/logo/apg-logo 2.png"


const Login = () => {
    const {singIn} = useContext(AuthContext);
    const location = useLocation();
    const naviGates = useNavigate();
    const handlelogin = e =>{
        e.preventDefault();
        // form input datas
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        singIn(email,password)
        .then(res => {
            console.log(res.user)
            naviGates(location?.state ? location.state: '/dashboard');
        })
        .catch(error =>{
            console.log(error)
        })
        if(password.length < 6){
            toast.error('Password Worng')
            return; 
        }
        else{
            toast.success('Successfully Login')
            return
        }

    }


    return (
        <div>
             {/* form sections */}
            <div className="hero min-h-screen">
                <div>
                    <div className='ml-20'>
                    <img src={logo} alt="" />
                    </div>
                    <h1 className='text-4xl font-extrabold my-10 text-center'>Login your account</h1>
                    <form onSubmit={handlelogin} className="w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label text-red-700">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-outline btn-success">Login</button>
                        </div>
                    </form>
                    <h1 className='text-center my-4'>You don&rsquo;t have an account <Link className='text-green-600' to='/register'>Register</Link></h1>
                </div>
                
            </div>

        </div>
    );
};

export default Login;