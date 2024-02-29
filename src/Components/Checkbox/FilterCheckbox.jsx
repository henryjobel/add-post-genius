import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaChessKing, FaMoneyBillAlt } from 'react-icons/fa';

const FilterCheckbox = () => {
    return (
        <div>
            <div className='pt-10'>
                {/* this is payment ceckbox */}
                <div className=" w-[220px] bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="px-4 py-2 flex items-center ">
                        <FaMoneyBillAlt className="text-teal-600 mr-2" />
                        <h1 className="text-gray-800 font-bold text-[16px] uppercase">Payment</h1>
                    </div>


                    <ul className="divide-y divide-gray-200 px-4">
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="automated"
                                    name="automated"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="automated"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Automated Payment</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="manual"
                                    name="manual"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="manual"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Manual Payment</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="both"
                                    name="both"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="both"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Both</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* this is activity checkbox*/}
                <div className=" w-[220px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-2 flex items-center pt-5">
                        <CgProfile className="text-teal-600 mr-2" />
                        <h1 className="text-gray-800 font-bold text-[16px] uppercase">Activity</h1>
                    </div>


                    <ul className="divide-y divide-gray-200 px-4">
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="automated"
                                    name="automated"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="automated"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Inactive</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="manual"
                                    name="manual"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="manual"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Active</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="both"
                                    name="both"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="both"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Both</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Membership checkbox */}
                <div className=" w-[220px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-2 flex items-center pt-5">
                        <FaChessKing className="text-teal-600 mr-2" />
                        <h1 className="text-gray-800 font-bold text-[16px] uppercase">MemberShip</h1>
                    </div>


                    <ul className="divide-y divide-gray-200 px-4">
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="automated"
                                    name="automated"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="automated"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">All</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="manual"
                                    name="manual"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="manual"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Lite</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="both"
                                    name="both"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="both"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Standard</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="both"
                                    name="both"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="both"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Silver</span>
                                </label>
                            </div>
                        </li>
                        <li className="py-4">
                            <div className="flex items-center">
                                <input
                                    id="both"
                                    name="both"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="both"
                                    className="ml-3 block text-gray-900">
                                    <span className="text-[14px] font-medium">Gold</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilterCheckbox;