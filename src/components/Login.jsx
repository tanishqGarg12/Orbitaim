import React, { useState } from 'react';
import Logo from "../assets/Logo.jpg";
import image from "../assets/image.png";

const Login = () => {
  const [activeTab, setActiveTab] = useState('Login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen font-['Inter']">
      <div className="relative flex flex-col justify-center items-start w-1/2 p-10 sm:w-auto">
        <img src={Logo} alt="Logo" className="absolute top-2 left-5 w-64 h-20" />

        <div className="ml-14 rounded-lg p-8 w-auto sm:w-full">
          <div className="flex justify-between m-2 w-48 h-10">
            <button
              className={`w-1/2 md:w-[130.22px] h-[49px] rounded-tl-xl border border-[#a1a8b4] text-sm font-medium ${activeTab === 'Login' ? 'bg-[#1c46f2] text-white' : ''} font-['Inter']`}
              onClick={() => handleTabClick('Login')}
            >
              Login
            </button>
            <button
              className={`w-1/2 md:w-[130.22px] h-[49px] rounded-tl-xl border border-[#a1a8b4] text-sm font-medium ${activeTab === 'Login' ? '' : 'bg-[#1c46f2] text-white'} font-['Inter']`}
              onClick={() => handleTabClick('Signup')}
            >
              Signup
            </button>
          </div>

          {activeTab === 'Login' && (
            <div className='border h-auto md:h-96 shadow-md flex flex-col items-center justify-center p-4 md:p-0'>
              <input
                type="email"
                placeholder="Email"
                required
                className="md:w-96 p-3 mb-4 border border-gray-300 rounded-lg font-['Inter']"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="md:w-96 p-3 mb-6 border border-gray-300 rounded-lg font-['Inter']"
              />
              <button className="w-[140.33px] h-[52.76px] bg-[#1c46f2] rounded-[16.84px] text-white font-['Inter']">Login</button>
              <div className="text-[#1c46f2] text-base font-medium leading-normal mt-9 ml-0 md:ml-96 font-['Inter']">Forgot Password?</div>
            </div>
          )}

          {activeTab === 'Signup' && (
            <div className='border h-auto md:h-96 shadow-md flex flex-col items-center justify-center p-4 md:p-0'>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full md:w-96 p-3 mb-4 border border-gray-300 rounded-lg font-['Inter']"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full md:w-96 p-3 mb-4 border border-gray-300 rounded-lg font-['Inter']"
              />
              <input
                type="password"
                placeholder="Re-type Password"
                required
                className="w-full md:w-96 p-3 mb-6 border border-gray-300 rounded-lg font-['Inter']"
              />
              <button className="w-[140.33px] h-[52.76px] bg-[#1c46f2] rounded-[16.84px] text-white font-['Inter']">Sign Up</button>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-1/2">
        <img src={image} alt="Side Image" className="w-full h-auto max-w-lg" />
      </div>
    </div>
  );
};

export default Login;