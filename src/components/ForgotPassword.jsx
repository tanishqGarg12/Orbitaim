import React, { useState } from 'react';
import Logo from "../assets/Logo.jpg";
import image from "../assets/image.png";

const ForgotPassword = () => {
  const [activeTab, setActiveTab] = useState('Login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      <div className="relative flex flex-col justify-center items-start w-full md:w-1/2 p-4 md:p-10">
        <div className="ml-0 md:ml-14 rounded-lg p-4 md:p-8 w-full">
          <div className="flex justify-between m-2 w-full md:w-48 h-10">
            <button
              className={`w-1/2 md:w-[130.22px] h-[49px] rounded-tl-xl border border-[#a1a8b4] text-sm font-medium ${activeTab === 'Login' ? 'bg-[#1c46f2] text-white' : ''}`}
              onClick={() => handleTabClick('Login')}
            >
              Login
            </button>
            <button
              className={`w-1/2 md:w-[130.22px] h-[49px] rounded-tl-xl border border-[#a1a8b4] text-sm font-medium ${activeTab === 'Login' ? '' : 'bg-[#1c46f2] text-white'}`}
              onClick={() => handleTabClick('Signup')}
            >
              Signup
            </button>
          </div>

          <div className='border h-auto md:h-96 shadow-md flex flex-col items-center justify-center p-4  md:p-0'>

            <input
              type="Password"
              placeholder="New Password"
              required
              className="w-full md:w-96 p-3 mt-12 border border-gray-300 rounded-lg font-['Inter']"
            />
            <input
              type="Password"
              placeholder="Re Type new-Password"
              required
              className="w-full md:w-96 p-3 mt-12 border border-gray-300 rounded-lg font-['Inter']"
            />
            <button className="w-[140.33px] h-[52.76px] bg-[#1c46f2] rounded-[16.84px] mt-10 text-white font-['Inter']">Login</button>
            <div className="text-[#1c46f2] text-base font-medium font-['Inter'] leading-normal mt-9 ml-0 md:ml-96 ">Forgot Password?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;