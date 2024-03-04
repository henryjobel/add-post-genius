import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../../Components/Shared/SideBar';
import TopBar from '../../Components/Shared/Topbar/TopBar';

const Root = () => {
    const location = useLocation();

    // Check if the current route is not the root ("/")
    const showSideBar = location.pathname !== "/";

    return (
        <div className='bg-[#F4F7FE]'>

            {/* side bar */}
            <div className='flex'>
                <div>
                    {showSideBar && <SideBar />}
                </div>

                <div className="flex-1">
                    {/* outlet means All the contens */}
                    <div className='container w-[1629px]'>
                        {showSideBar && <TopBar></TopBar>}
                    </div>
                    <div className='p-4'>
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Root;
