import React, { useState } from 'react';

const Otp = () => {
  const [activeTab, setActiveTab] = useState('Login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen font-inter"> {/* Changed to font-inter */}
      <div className="relative flex flex-col justify-center items-start w-full md:w-1/2 p-4 md:p-10">
        <div className="ml-0 md:ml-14 rounded-lg p-4 md:p-8 w-full">
          <div className="flex justify-between m-2 w-full md:w-48 h-10">
            <button
              className={`w-1/2 md:w-[130.22px] h-[49px] rounded-tl-xl border border-[#a1a8b4] text-sm font-medium ${activeTab === 'Login' ? 'bg-[#1c46f2] text-white' : ''} font-inter`} // Changed to font-inter
              onClick={() => handleTabClick('Login')}
            >
              Login
            </button>
            <button
              className={`w-1/2 md:w-[130.22px] h-[49px] rounded-tl-xl border border-[#a1a8b4] text-sm font-medium ${activeTab === 'Login' ? '' : 'bg-[#1c46f2] text-white'} font-inter`} // Changed to font-inter
              onClick={() => handleTabClick('Signup')}
            >
              Signup
            </button>
          </div>

          <div className='border h-auto md:h-96 shadow-md flex flex-col items-center justify-center p-4 md:p-0'>
            <div className='text-black mr-0 md:mr-16'>
              <h2 className="text-lg font-semibold font-['Inter']">Hii</h2> {/* Changed to font-inter */}
              <p className="text-lg font-semibold font-['Inter']">Yarb here</p> {/* Changed to font-inter */}
              <p className="text-lg font-semibold font-['Inter']">An OTP has been sent to your Registered Email Id</p> {/* Changed to font-inter */}
            </div>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              className="w-full md:w-96 p-3 mt-12 border border-gray-300 rounded-lg font-['Inter']" // Changed to font-inter
            />
            <button className="w-[140.33px] h-[52.76px] bg-[#1c46f2] rounded-[16.84px] mt-10 text-white font-['Inter']">Login</button> {/* Changed to font-inter */}
            <div className="text-[#1c46f2] text-base font-medium leading-normal mt-9 ml-0 md:ml-96 font-['Inter']">Forgot Password?</div> {/* Changed to font-inter */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;