
import { Link } from "react-router-dom";
import userImage from "../../../assets/logo/Ellipse 7.png"

const ClientaddTables = () => {
    return (
        <div>
        {/* Client Tables */}
            <table className="w-[1327px] divide-y divide-gray-200 overflow-x-auto ">
                {/* client table head */}
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status 
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Posting Schedule 
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">

                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">

                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Profile
                        </th>
                    </tr>
                </thead>
                {/* clients table body */}
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    Account 1   
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Active</div>
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 ">
                            Daily - 10:15 AM
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                        <Link to="/client-profile" className="btn btn-outline btn-success">View Profile</Link>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    Account 1   
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Active</div>
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 ">
                            Daily - 10:15 AM
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                        <Link to="/client-profile" className="btn btn-outline btn-success">View Profile</Link>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    Account 1   
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Active</div>
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 ">
                            Daily - 10:15 AM
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                        <Link to="/client-profile" className="btn btn-outline btn-success">View Profile</Link>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    Account 1   
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Active</div>
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 ">
                            Daily - 10:15 AM
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                        <Link to="/client-profile" className="btn btn-outline btn-success">View Profile</Link>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    Account 1   
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Active</div>
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 ">
                            Daily - 10:15 AM
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                        <Link to="/client-profile" className="btn btn-outline btn-success">View Profile</Link>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    Account 1   
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Active</div>
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 ">
                            Daily - 10:15 AM
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                        <Link to="/client-profile" className="btn btn-outline btn-success">View Profile</Link>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default ClientaddTables;