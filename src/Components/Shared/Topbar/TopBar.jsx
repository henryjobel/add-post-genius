import React from 'react';

const TopBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                   <h1 className='text-2xl'>Dashboard</h1>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control items-center">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-success text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Account</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h1 className='text-4xl font-extrabold my-10'>Add New Client</h1>
                                    <form  >
                                        <div className="form-control ">

                                            <input type="text" name='frist-name' required placeholder="Frist Name" className="input input-bordered bg-[#F4F7FE]" />
                                        </div>
                                        <div className="form-control">
                                            <input type="Text" placeholder="Last Name" name='last-name' required className="input input-bordered mt-3 bg-[#F4F7FE]" />
                                        </div>
                                        <div className="form-control">

                                            <input type="text" placeholder="Company Name" name='company-name' required className="input input-bordered mt-3 bg-[#F4F7FE]" />
                                        </div>
                                        <div className="form-control">

                                            <input type="text" placeholder="Phone Number" name='phone-number' required className="input input-bordered mt-3 bg-[#F4F7FE]" />
                                        </div>
                                        <div className="form-control">
                                            <input type="text" placeholder="Email Address" name='email' required className="input input-bordered mt-3 bg-[#F4F7FE]" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-outline btn-success">Create Account</button>
                                        </div>
                                    </form>
                                </div>
                            </dialog>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;