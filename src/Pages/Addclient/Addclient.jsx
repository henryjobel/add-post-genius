import React from 'react';

const Addclient = () => {
    return (
        <div>
              <h1 className='text-4xl font-extrabold my-10 text-center'>Login your account</h1>
              <form className="w-96">
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
        </div>
    );
};

export default Addclient;