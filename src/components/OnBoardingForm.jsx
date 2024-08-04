import React, { useState } from 'react';
import Logo from "../assets/Logo.jpg";
import image from "../assets/image.png";

const OnBoardingForm = () => {
  const [activeTab, setActiveTab] = useState('Login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen font-['Inter']">
      <div className="relative flex flex-col justify-center items-start p-10 w-full lg:w-1/2">
        <img src={Logo} alt="Logo" className="absolute top-2 left-5 w-64 h-20" />
        <div className="ml-5 mt-24 text-xl font-semibold">
          Hello, My Name is Yarb
          <br />
          <p className='text-base mt-3'>Would you Please Introduce Yourself?</p>
        </div>

        <div className="flex flex-col mt-4 ml-6 w-full">
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
            <input
              type="text"
              placeholder="Sector/Industry you work in"
              className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-lg font-['Inter']"
            />
            <input 
              type="text"
              placeholder="Organization/Brand Name"
              className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-lg font-['Inter']"
            />
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-4">
            <input
              type="url"
              placeholder="Website Link / Social Link 1"
              className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-lg font-['Inter']"
            />
            <input
              type="url"
              placeholder="Website Link / Social Link 2"
              className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-lg font-['Inter']"
            />
          </div>
          <div className="flex flex-col mt-4">
            <textarea
              placeholder="Product / Service Detail: Give us Keywords and Description Here"
              className="w-full p-3 border border-gray-300 rounded-lg h-24 font-['Inter']"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-gray-600 mb-2 font-['Inter']">Upload Organization / Brand Details</label>
            <input
              type="file"
              className="mb-4 border h-28 border-gray-300 rounded-lg font-['Inter']"
            />
          </div>
        </div>
        <div className='flex flex-col ml-5 lg:flex-row space-x-0 lg:space-x-5 mt-5'>
          <div className="w-full lg:w-[220px] h-[48.21px] p-[13px] bg-[#1c46f2] rounded-[23.18px] flex justify-center items-center">
            <button className="w-full text-center text-white text-lg font-semibold leading-7 font-['Inter']">Submit</button>
          </div>
          <div className="w-full lg:w-[220px] h-[48.21px] p-[13px] bg-white rounded-[23.18px] border border-[#c5cad1] flex justify-center items-center mt-4 lg:mt-0">
            <button className="w-full text-center text-[#1c46f2] text-lg font-semibold leading-7 font-['Inter']">I’ll do it later</button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center ml-32">
        <img src={image} alt="Side Image" className="w-1280px h-832px" />
      </div>
    </div>
  );
};

export default OnBoardingForm;