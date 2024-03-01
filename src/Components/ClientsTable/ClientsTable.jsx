
import { Link } from "react-router-dom";
import userImage from "../../assets/logo/Ellipse 7.png"

const ClientsTable = () => {
    return (
        <div>
        {/* Client Tables */}
            <table className="w-[1327px] divide-y divide-gray-200 overflow-x-auto ">
                {/* client table head */}
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Clinet
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rep Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Accounts
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
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
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
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
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
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
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
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <button className="btn btn-outline btn-success">View Profile</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <button className="btn btn-outline btn-success">View Profile</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <button className="btn btn-outline btn-success">View Profile</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <button className="btn btn-outline btn-success">View Profile</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <button className="btn btn-outline btn-success">View Profile</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        ZK Mechanical
                                    </div>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Zobir Khawaja</div>
                            <div className="text-sm text-gray-500">Founder</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                14
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <button className="btn btn-outline btn-success">View Profile</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default ClientsTable;