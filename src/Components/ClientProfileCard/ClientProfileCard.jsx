import { Link } from "react-router-dom";
import profileBg from "../../assets/logo/Gradient.png"
import profilepic from "../../assets/logo/Ellipse 8.png"




const ClientProfileCard = () => {
  return (
    <div className="bg-white w-[256px] pb-48 ">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img className="object-cover object-top w-full" src={profileBg} alt='Mountain' />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={profilepic} alt='Woman looking front' />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Tree Masters</h2>
        <p className="text-gray-500">Gus Bakos</p>
      </div>
      <div className=" text-center pt-2">
        <Link to="/update-client" className="btn bg-[#0CAE93] text-white">Update Profile</Link>
      </div>
      <div
        className="flex flex-col justify-center items-center bg-[#F4F7FE] mx-5 mt-5  h-32 border-white  rounded-3xl ">
        <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">8</span>
        </div>
        <span className="font-semibold opacity-70 text-sm text-center">Acvounts</span>
    </div>
      <div
        className="flex flex-col justify-center items-center bg-[#F4F7FE] mx-5 mt-1  h-32 border-white  rounded-3xl ">
        <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">16</span>
        </div>
        <span className="font-semibold opacity-70 text-sm text-center">Ads</span>
    </div>
      <div
        className="flex flex-col justify-center items-center bg-[#F4F7FE] mx-5  mt-1 h-32 border-white  rounded-3xl ">
        <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">6</span>
        </div>
        <span className="font-semibold opacity-70 text-sm text-center">Phone Numbers</span>
    </div>
    </div>
  );
}

export default ClientProfileCard;
