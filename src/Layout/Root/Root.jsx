import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../../Components/Shared/SideBar';
import TopBar from '../../Components/Shared/Topbar/TopBar';

const Root = () => {
    const location = useLocation();

    // Check if the current route is not the root ("/")
    const showSideBar = location.pathname !== "/";

    return (
        <div className='bg-[#F4F7FE]'>
            {/* Top Bar */}
            {showSideBar && <TopBar></TopBar>}
        {/* side bar */}
            {showSideBar && <SideBar />}
            <div className="container mx-[290px] ">
                {/* outlet means All the contens */}
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;
