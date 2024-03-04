import React, { useState } from 'react';
import "./style.css"

const UpdateClients = () => {
    const [addAccount1, setAddAccount1] = useState(true);
    const [addAccount2, setAddAccount2] = useState(true);

    const handleCheckbox1Change = () => {
        setAddAccount1(!addAccount1);
    };

    const handleCheckbox2Change = () => {
        setAddAccount2(!addAccount2);
    };

    return (
        <div className='bg-white p-10 rounded-2xl'>
            {/* this is Profile sections */}
            <div className='flex gap-56'>
                <h1 className='text-base font-bold text-[#003956]'>Profile</h1>
                <div className='flex gap-3'>
                    <div className={`flex gap-4  ${addAccount1 ? 'checked' : ''}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={addAccount1}
                                onChange={handleCheckbox1Change}
                                className="checkbox"
                            />

                        </label>
                        <div><h1>Add Account</h1></div>
                    </div>
                    <div className={`flex gap-4  ${addAccount2 ? 'checked' : ''}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={addAccount2}
                                onChange={handleCheckbox2Change}
                                className="checkbox"
                            />

                        </label>
                        <h1>Add Account</h1>
                    </div>
                </div>
            </div>
            {/* this is title sectons*/}
            <div className='flex gap-60 pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Title</h1>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-screen-md" />
            </div>
            {/* Categoris */}
            <div className='flex gap-[189px] pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Categories</h1>
                <div>
                    <select className="select select-accent  w-[755px] max-w-screen-md">
                        <option disabled selected>Select cataregory</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select>
                </div>
            </div>
            {/* add types */}
            <div className='pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Add Type</h1>
            </div>
            {/* payments */}
            <div className='flex pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Payments</h1>
            </div>
            {/* text area */}
            <div className='pt-10 flex gap-52'>
                <h1 className='text-base font-bold text-[#003956]'>Description</h1>
                <textarea className="textarea textarea-accent h-[500px]   w-[700px] max-w-screen-md" placeholder="Bio"></textarea>
            </div>
            {/* this is tags sectons*/}
            <div className='flex gap-64 pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Tags</h1>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-screen-md" />
            </div>
            {/* this is adress sectons*/}
            <div className='flex gap-60 pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Adress</h1>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-screen-md" />
            </div>
            {/* this is number sectons*/}
            <div className='flex gap-56 pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Numbers</h1>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-screen-md" />
            </div>
            <div className='flex pt-10 gap-64'>
                <h1 className='text-base font-bold text-[#003956]'>Media</h1>
                <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

            </div>
            {/* status */}
            <div className='flex pt-10'>
                <h1 className='text-base font-bold text-[#003956]'>Status</h1>
            </div>
        </div>
    );
};

export default UpdateClients;
