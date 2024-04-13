import React, { useState } from 'react';
import TenantsLandlords from "../../assets/images/TenantsLandlords.png";
import propertyImage1 from "../../assets/images/propertyImage1.png";
import HeroBG from "../../assets/images/HeroBG.png";

import Swiper from 'swiper';
import 'swiper/css';

const Home: React.FC = () => {


    const swiper = new Swiper(".mySwiper", {
        centeredSlides:false,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              }
          },
      });


    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Rent'},
        { label: 'Buy'},
        { label: 'Sell'}
      ];

      
    return (
    <>
    <div className='bg-gradient-to-b relative from-[#E0DEF7] to-[#E0DEF7]/0 min-h-screen pt-[72px] flex items-center justify-center'>
        <div className='max-w-screen-2xl grid grid-cols-2 max-md:grid-cols-1 items-center justify-between mx-auto p-4 h-full'>
            <div className='w-full'>
            <div className='text-start mx-auto w-full'>
                <h1 className='text-6xl font-extrabold mb-5'>Buy, rent, or sell your property easily</h1>
                <span className='font-semibold'>A great platform to buy, sell, or even rent your properties without any commisions.</span>

            </div>
            </div>
        </div>
        <img src={HeroBG} className='absolute bottom-0 right-0' alt="" />
    </div>
    <div className='bg-white flex items-center justify-center p-24 max-md:p-4'>
        <div className='max-w-screen-2xl grid max-md:flex max-md:flex-col grid-cols-3 gap-16 max-md:grid-cols-1 items-center justify-between mx-auto p-4 h-full'>
            <div className='relative'>
                <img src={TenantsLandlords} className='w-full h-full object-cover mx-auto' alt="" />
                <div className="absolute p-8 top-0 left-0 text-start">
                    <h2 className='text-3xl font-bold mb-3'>The new way to find your new home.</h2>
                    <p className='mb-3'>Find your dream place to live in with more than 10k+ properties listed.</p>
                    <button className='bg-secondary py-3 px-4 rounded-lg text-white'>Browse Properties</button>
                </div>
            </div>
            <div className='col-span-2 text-start'>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                <div className='w-full mb-8'>
                    <div className="mb-6">
                        <div className='w-16 h-16 rounded-full bg-[#E0DEF7] flex items-center justify-center'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_224_7638)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.6665 15.9998H5.62939V26.3702C5.62939 27.156 5.94156 27.9097 6.49723 28.4653C7.05289 29.021 7.80653 29.3332 8.59236 29.3332H23.4072C24.193 29.3332 24.9466 29.021 25.5023 28.4653C26.058 27.9097 26.3701 27.156 26.3701 26.3702V15.9998H26.3702H29.3332L15.9998 2.6665L2.6665 15.9998Z" fill="white"/>
                                <path d="M5.62939 15.9998H6.62939C6.62939 15.4476 6.18168 14.9998 5.62939 14.9998V15.9998ZM2.6665 15.9998L1.9594 15.2927C1.6734 15.5787 1.58784 16.0088 1.74262 16.3825C1.89741 16.7562 2.26204 16.9998 2.6665 16.9998L2.6665 15.9998ZM6.49723 28.4653L7.20433 27.7582L6.49723 28.4653ZM25.5023 28.4653L24.7952 27.7582L24.7952 27.7582L25.5023 28.4653ZM26.3701 15.9998V14.9998C25.8179 14.9998 25.3701 15.4476 25.3701 15.9998H26.3701ZM29.3332 15.9998V16.9998C29.7376 16.9998 30.1023 16.7562 30.2571 16.3825C30.4118 16.0088 30.3263 15.5787 30.0403 15.2927L29.3332 15.9998ZM15.9998 2.6665L16.7069 1.9594C16.3164 1.56887 15.6833 1.56887 15.2927 1.9594L15.9998 2.6665ZM5.62939 14.9998H2.6665V16.9998H5.62939V14.9998ZM4.62939 15.9998V26.3702H6.62939V15.9998H4.62939ZM4.62939 26.3702C4.62939 27.4213 5.04692 28.4292 5.79012 29.1724L7.20433 27.7582C6.83621 27.3901 6.62939 26.8908 6.62939 26.3702H4.62939ZM5.79012 29.1724C6.53332 29.9156 7.54131 30.3332 8.59236 30.3332V28.3332C8.07175 28.3332 7.57246 28.1264 7.20433 27.7582L5.79012 29.1724ZM8.59236 30.3332H23.4072V28.3332H8.59236V30.3332ZM23.4072 30.3332C24.4582 30.3332 25.4662 29.9156 26.2094 29.1724L24.7952 27.7582C24.4271 28.1264 23.9278 28.3332 23.4072 28.3332V30.3332ZM26.2094 29.1724C26.9526 28.4292 27.3701 27.4213 27.3701 26.3702H25.3701C25.3701 26.8908 25.1633 27.3901 24.7952 27.7582L26.2094 29.1724ZM27.3701 26.3702V15.9998H25.3701V26.3702H27.3701ZM26.3702 14.9998H26.3701V16.9998H26.3702V14.9998ZM29.3332 14.9998H26.3702V16.9998H29.3332V14.9998ZM15.2927 3.37361L28.6261 16.7069L30.0403 15.2927L16.7069 1.9594L15.2927 3.37361ZM3.37361 16.7069L16.7069 3.37361L15.2927 1.9594L1.9594 15.2927L3.37361 16.7069Z" fill="white"/>
                                <path d="M12 18.0002L14.6667 20.6668L20 15.3335" stroke="#7065F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_224_7638">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Property Insurance</h5>
                        <p>We offer our customer property protection of liability coverage and insurance for their better life.</p>
                    </div>
                    <div className='w-full mb-8'>
                    <div className="mb-6">
                        <div className='w-16 h-16 rounded-full bg-[#E0DEF7] flex items-center justify-center'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_224_7638)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.6665 15.9998H5.62939V26.3702C5.62939 27.156 5.94156 27.9097 6.49723 28.4653C7.05289 29.021 7.80653 29.3332 8.59236 29.3332H23.4072C24.193 29.3332 24.9466 29.021 25.5023 28.4653C26.058 27.9097 26.3701 27.156 26.3701 26.3702V15.9998H26.3702H29.3332L15.9998 2.6665L2.6665 15.9998Z" fill="white"/>
                                <path d="M5.62939 15.9998H6.62939C6.62939 15.4476 6.18168 14.9998 5.62939 14.9998V15.9998ZM2.6665 15.9998L1.9594 15.2927C1.6734 15.5787 1.58784 16.0088 1.74262 16.3825C1.89741 16.7562 2.26204 16.9998 2.6665 16.9998L2.6665 15.9998ZM6.49723 28.4653L7.20433 27.7582L6.49723 28.4653ZM25.5023 28.4653L24.7952 27.7582L24.7952 27.7582L25.5023 28.4653ZM26.3701 15.9998V14.9998C25.8179 14.9998 25.3701 15.4476 25.3701 15.9998H26.3701ZM29.3332 15.9998V16.9998C29.7376 16.9998 30.1023 16.7562 30.2571 16.3825C30.4118 16.0088 30.3263 15.5787 30.0403 15.2927L29.3332 15.9998ZM15.9998 2.6665L16.7069 1.9594C16.3164 1.56887 15.6833 1.56887 15.2927 1.9594L15.9998 2.6665ZM5.62939 14.9998H2.6665V16.9998H5.62939V14.9998ZM4.62939 15.9998V26.3702H6.62939V15.9998H4.62939ZM4.62939 26.3702C4.62939 27.4213 5.04692 28.4292 5.79012 29.1724L7.20433 27.7582C6.83621 27.3901 6.62939 26.8908 6.62939 26.3702H4.62939ZM5.79012 29.1724C6.53332 29.9156 7.54131 30.3332 8.59236 30.3332V28.3332C8.07175 28.3332 7.57246 28.1264 7.20433 27.7582L5.79012 29.1724ZM8.59236 30.3332H23.4072V28.3332H8.59236V30.3332ZM23.4072 30.3332C24.4582 30.3332 25.4662 29.9156 26.2094 29.1724L24.7952 27.7582C24.4271 28.1264 23.9278 28.3332 23.4072 28.3332V30.3332ZM26.2094 29.1724C26.9526 28.4292 27.3701 27.4213 27.3701 26.3702H25.3701C25.3701 26.8908 25.1633 27.3901 24.7952 27.7582L26.2094 29.1724ZM27.3701 26.3702V15.9998H25.3701V26.3702H27.3701ZM26.3702 14.9998H26.3701V16.9998H26.3702V14.9998ZM29.3332 14.9998H26.3702V16.9998H29.3332V14.9998ZM15.2927 3.37361L28.6261 16.7069L30.0403 15.2927L16.7069 1.9594L15.2927 3.37361ZM3.37361 16.7069L16.7069 3.37361L15.2927 1.9594L1.9594 15.2927L3.37361 16.7069Z" fill="white"/>
                                <path d="M12 18.0002L14.6667 20.6668L20 15.3335" stroke="#7065F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_224_7638">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Best Price</h5>
                        <p>Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
                    </div>
                    <div className='w-full mb-8'>
                    <div className="mb-6">
                        <div className='w-16 h-16 rounded-full bg-[#E0DEF7] flex items-center justify-center'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_224_7638)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.6665 15.9998H5.62939V26.3702C5.62939 27.156 5.94156 27.9097 6.49723 28.4653C7.05289 29.021 7.80653 29.3332 8.59236 29.3332H23.4072C24.193 29.3332 24.9466 29.021 25.5023 28.4653C26.058 27.9097 26.3701 27.156 26.3701 26.3702V15.9998H26.3702H29.3332L15.9998 2.6665L2.6665 15.9998Z" fill="white"/>
                                <path d="M5.62939 15.9998H6.62939C6.62939 15.4476 6.18168 14.9998 5.62939 14.9998V15.9998ZM2.6665 15.9998L1.9594 15.2927C1.6734 15.5787 1.58784 16.0088 1.74262 16.3825C1.89741 16.7562 2.26204 16.9998 2.6665 16.9998L2.6665 15.9998ZM6.49723 28.4653L7.20433 27.7582L6.49723 28.4653ZM25.5023 28.4653L24.7952 27.7582L24.7952 27.7582L25.5023 28.4653ZM26.3701 15.9998V14.9998C25.8179 14.9998 25.3701 15.4476 25.3701 15.9998H26.3701ZM29.3332 15.9998V16.9998C29.7376 16.9998 30.1023 16.7562 30.2571 16.3825C30.4118 16.0088 30.3263 15.5787 30.0403 15.2927L29.3332 15.9998ZM15.9998 2.6665L16.7069 1.9594C16.3164 1.56887 15.6833 1.56887 15.2927 1.9594L15.9998 2.6665ZM5.62939 14.9998H2.6665V16.9998H5.62939V14.9998ZM4.62939 15.9998V26.3702H6.62939V15.9998H4.62939ZM4.62939 26.3702C4.62939 27.4213 5.04692 28.4292 5.79012 29.1724L7.20433 27.7582C6.83621 27.3901 6.62939 26.8908 6.62939 26.3702H4.62939ZM5.79012 29.1724C6.53332 29.9156 7.54131 30.3332 8.59236 30.3332V28.3332C8.07175 28.3332 7.57246 28.1264 7.20433 27.7582L5.79012 29.1724ZM8.59236 30.3332H23.4072V28.3332H8.59236V30.3332ZM23.4072 30.3332C24.4582 30.3332 25.4662 29.9156 26.2094 29.1724L24.7952 27.7582C24.4271 28.1264 23.9278 28.3332 23.4072 28.3332V30.3332ZM26.2094 29.1724C26.9526 28.4292 27.3701 27.4213 27.3701 26.3702H25.3701C25.3701 26.8908 25.1633 27.3901 24.7952 27.7582L26.2094 29.1724ZM27.3701 26.3702V15.9998H25.3701V26.3702H27.3701ZM26.3702 14.9998H26.3701V16.9998H26.3702V14.9998ZM29.3332 14.9998H26.3702V16.9998H29.3332V14.9998ZM15.2927 3.37361L28.6261 16.7069L30.0403 15.2927L16.7069 1.9594L15.2927 3.37361ZM3.37361 16.7069L16.7069 3.37361L15.2927 1.9594L1.9594 15.2927L3.37361 16.7069Z" fill="white"/>
                                <path d="M12 18.0002L14.6667 20.6668L20 15.3335" stroke="#7065F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_224_7638">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Lowest Commission</h5>
                        <p>You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
                    </div>
                    <div className='w-full mb-8'>
                    <div className="mb-6">
                        <div className='w-16 h-16 rounded-full bg-[#E0DEF7] flex items-center justify-center'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_224_7638)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.6665 15.9998H5.62939V26.3702C5.62939 27.156 5.94156 27.9097 6.49723 28.4653C7.05289 29.021 7.80653 29.3332 8.59236 29.3332H23.4072C24.193 29.3332 24.9466 29.021 25.5023 28.4653C26.058 27.9097 26.3701 27.156 26.3701 26.3702V15.9998H26.3702H29.3332L15.9998 2.6665L2.6665 15.9998Z" fill="white"/>
                                <path d="M5.62939 15.9998H6.62939C6.62939 15.4476 6.18168 14.9998 5.62939 14.9998V15.9998ZM2.6665 15.9998L1.9594 15.2927C1.6734 15.5787 1.58784 16.0088 1.74262 16.3825C1.89741 16.7562 2.26204 16.9998 2.6665 16.9998L2.6665 15.9998ZM6.49723 28.4653L7.20433 27.7582L6.49723 28.4653ZM25.5023 28.4653L24.7952 27.7582L24.7952 27.7582L25.5023 28.4653ZM26.3701 15.9998V14.9998C25.8179 14.9998 25.3701 15.4476 25.3701 15.9998H26.3701ZM29.3332 15.9998V16.9998C29.7376 16.9998 30.1023 16.7562 30.2571 16.3825C30.4118 16.0088 30.3263 15.5787 30.0403 15.2927L29.3332 15.9998ZM15.9998 2.6665L16.7069 1.9594C16.3164 1.56887 15.6833 1.56887 15.2927 1.9594L15.9998 2.6665ZM5.62939 14.9998H2.6665V16.9998H5.62939V14.9998ZM4.62939 15.9998V26.3702H6.62939V15.9998H4.62939ZM4.62939 26.3702C4.62939 27.4213 5.04692 28.4292 5.79012 29.1724L7.20433 27.7582C6.83621 27.3901 6.62939 26.8908 6.62939 26.3702H4.62939ZM5.79012 29.1724C6.53332 29.9156 7.54131 30.3332 8.59236 30.3332V28.3332C8.07175 28.3332 7.57246 28.1264 7.20433 27.7582L5.79012 29.1724ZM8.59236 30.3332H23.4072V28.3332H8.59236V30.3332ZM23.4072 30.3332C24.4582 30.3332 25.4662 29.9156 26.2094 29.1724L24.7952 27.7582C24.4271 28.1264 23.9278 28.3332 23.4072 28.3332V30.3332ZM26.2094 29.1724C26.9526 28.4292 27.3701 27.4213 27.3701 26.3702H25.3701C25.3701 26.8908 25.1633 27.3901 24.7952 27.7582L26.2094 29.1724ZM27.3701 26.3702V15.9998H25.3701V26.3702H27.3701ZM26.3702 14.9998H26.3701V16.9998H26.3702V14.9998ZM29.3332 14.9998H26.3702V16.9998H29.3332V14.9998ZM15.2927 3.37361L28.6261 16.7069L30.0403 15.2927L16.7069 1.9594L15.2927 3.37361ZM3.37361 16.7069L16.7069 3.37361L15.2927 1.9594L1.9594 15.2927L3.37361 16.7069Z" fill="white"/>
                                <path d="M12 18.0002L14.6667 20.6668L20 15.3335" stroke="#7065F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_224_7638">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Overall Control</h5>
                        <p>Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.</p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    <div className='bg-gradient-to-b relative from-[#FFFFFF] to-[#F0EFFB] flex items-center justify-center p-24 max-md:p-4'>
        <div className='max-w-screen-2xl grid grid-cols-2 gap-16 max-md:gap-8 max-md:grid-cols-1 items-center justify-between mx-auto p-4 w-full h-full'>
            <div className='col-span-2'>
                    <h2 className='text-4xl font-extrabold mb-3'>Based on your location</h2>
                    <p className='text-lg mb-3'>Some of our picked properties near you location.</p>
            </div>
            <div className='col-span-2 text-start'>
               <div className="flex max-md:flex-col gap-5 items-center justify-between">

               <div className="flex items-center justify-start gap-3 p-2 rounded-lg bg-[#F0EFFB] border-2 border-[#E0DEF7] max-md:w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 w-16 max-md:w-full rounded-lg text-center ${activeTab === index ? 'bg-white border border-[#E0DEF7]' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
                <div className="relative min-w-80 max-md:w-full">
                <i className="ri-search-2-line h-full text-primary text-2xl absolute p-3 flex items-center justify-center"></i>
                    <input type="search" placeholder='Search...' className='placeholder:text-black/50 ps-12 w-full bg-[#F7F7FD] border-2 border-[#E0DEF7] p-3 rounded-lg' />
                </div>
               </div>
            </div>
            <div className="col-span-2">
                {tabs.map((tab, index) => (
                <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
                        <div className="card overflow-hidden p-0 rounded-lg border-2 border-[#F0EFFB] bg-white ease-in-out delay-100 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.09)]">
                            <div className="card-header">
                                <img className='w-full object-cover h-64' src={propertyImage1} alt="" />
                            </div>
                            <div className="card-body p-5 text-start">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className='font-extrabold text-2xl text-primary mb-2'>$2,095<span className='text-gray text-sm font-normal'>/month</span></h3>
                                        <h3 className='font-bold text-2xl mb-2'>Palm Harbor</h3>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E6F9]'>
                                    <i className="ri-heart-3-line text-xl text-primary"></i>
                                    </div>
                                </div>
                                <p>2699 Green Valley, Highland Lake, FL</p>
                                <div className="mt-4 p-3 pb-0 flex items-center justify-between gap-3 border-t border-t-[#F0EFFB]">
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z" fill="#7065F0"/>
</svg>

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z" fill="#7065F0"/>
</svg>

                                        <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_28_1276)">
<path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1714L6.36371 17.5351" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6362 17.5351L17.9999 13.1714" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_28_1276">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                                        <span>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 rounded-lg border-2 border-[#F0EFFB] bg-white ease-in-out delay-100 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.09)]">
                            <div className="card-header">
                                <img className='w-full object-cover h-64' src={propertyImage1} alt="" />
                            </div>
                            <div className="card-body p-5 text-start">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className='font-extrabold text-2xl text-primary mb-2'>$2,095<span className='text-gray text-sm font-normal'>/month</span></h3>
                                        <h3 className='font-bold text-2xl mb-2'>Palm Harbor</h3>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E6F9]'>
                                    <i className="ri-heart-3-line text-xl text-primary"></i>
                                    </div>
                                </div>
                                <p>2699 Green Valley, Highland Lake, FL</p>
                                <div className="mt-4 p-3 pb-0 flex items-center justify-between gap-3 border-t border-t-[#F0EFFB]">
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z" fill="#7065F0"/>
</svg>

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z" fill="#7065F0"/>
</svg>

                                        <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_28_1276)">
<path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1714L6.36371 17.5351" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6362 17.5351L17.9999 13.1714" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_28_1276">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                                        <span>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 rounded-lg border-2 border-[#F0EFFB] bg-white ease-in-out delay-100 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.09)]">
                            <div className="card-header">
                                <img className='w-full object-cover h-64' src={propertyImage1} alt="" />
                            </div>
                            <div className="card-body p-5 text-start">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className='font-extrabold text-2xl text-primary mb-2'>$2,095<span className='text-gray text-sm font-normal'>/month</span></h3>
                                        <h3 className='font-bold text-2xl mb-2'>Palm Harbor</h3>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E6F9]'>
                                    <i className="ri-heart-3-line text-xl text-primary"></i>
                                    </div>
                                </div>
                                <p>2699 Green Valley, Highland Lake, FL</p>
                                <div className="mt-4 p-3 pb-0 flex items-center justify-between gap-3 border-t border-t-[#F0EFFB]">
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z" fill="#7065F0"/>
</svg>

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z" fill="#7065F0"/>
</svg>

                                        <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_28_1276)">
<path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1714L6.36371 17.5351" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6362 17.5351L17.9999 13.1714" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_28_1276">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                                        <span>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 rounded-lg border-2 border-[#F0EFFB] bg-white ease-in-out delay-100 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.09)]">
                            <div className="card-header">
                                <img className='w-full object-cover h-64' src={propertyImage1} alt="" />
                            </div>
                            <div className="card-body p-5 text-start">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className='font-extrabold text-2xl text-primary mb-2'>$2,095<span className='text-gray text-sm font-normal'>/month</span></h3>
                                        <h3 className='font-bold text-2xl mb-2'>Palm Harbor</h3>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E6F9]'>
                                    <i className="ri-heart-3-line text-xl text-primary"></i>
                                    </div>
                                </div>
                                <p>2699 Green Valley, Highland Lake, FL</p>
                                <div className="mt-4 p-3 pb-0 flex items-center justify-between gap-3 border-t border-t-[#F0EFFB]">
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z" fill="#7065F0"/>
</svg>

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z" fill="#7065F0"/>
</svg>

                                        <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_28_1276)">
<path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1714L6.36371 17.5351" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6362 17.5351L17.9999 13.1714" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_28_1276">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                                        <span>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 rounded-lg border-2 border-[#F0EFFB] bg-white ease-in-out delay-100 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.09)]">
                            <div className="card-header">
                                <img className='w-full object-cover h-64' src={propertyImage1} alt="" />
                            </div>
                            <div className="card-body p-5 text-start">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className='font-extrabold text-2xl text-primary mb-2'>$2,095<span className='text-gray text-sm font-normal'>/month</span></h3>
                                        <h3 className='font-bold text-2xl mb-2'>Palm Harbor</h3>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E6F9]'>
                                    <i className="ri-heart-3-line text-xl text-primary"></i>
                                    </div>
                                </div>
                                <p>2699 Green Valley, Highland Lake, FL</p>
                                <div className="mt-4 p-3 pb-0 flex items-center justify-between gap-3 border-t border-t-[#F0EFFB]">
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z" fill="#7065F0"/>
</svg>

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z" fill="#7065F0"/>
</svg>

                                        <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_28_1276)">
<path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1714L6.36371 17.5351" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6362 17.5351L17.9999 13.1714" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_28_1276">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                                        <span>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 rounded-lg border-2 border-[#F0EFFB] bg-white ease-in-out delay-100 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.09)]">
                            <div className="card-header">
                                <img className='w-full object-cover h-64' src={propertyImage1} alt="" />
                            </div>
                            <div className="card-body p-5 text-start">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className='font-extrabold text-2xl text-primary mb-2'>$2,095<span className='text-gray text-sm font-normal'>/month</span></h3>
                                        <h3 className='font-bold text-2xl mb-2'>Palm Harbor</h3>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E6F9]'>
                                    <i className="ri-heart-3-line text-xl text-primary"></i>
                                    </div>
                                </div>
                                <p>2699 Green Valley, Highland Lake, FL</p>
                                <div className="mt-4 p-3 pb-0 flex items-center justify-between gap-3 border-t border-t-[#F0EFFB]">
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z" fill="#7065F0"/>
</svg>

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z" fill="#7065F0"/>
</svg>

                                        <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_28_1276)">
<path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1714L6.36371 17.5351" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6362 17.5351L17.9999 13.1714" stroke="#7065F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_28_1276">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                                        <span>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                <div className='mt-10'><button className='bg-secondary text-white rounded-md py-3 px-5 hover:scale-95'>Browse more properties</button></div>
            </div>
            
        </div>
    </div>
    <div className="bg-secondary">
        <div className="max-w-screen-2xl grid grid-cols-2 gap-16 max-md:gap-8 max-md:grid-cols-1 items-center justify-between mx-auto p-24 pb-12 max-md:p-4 w-full h-full">
            <div className="col-span-2 flex items-center max-md:flex-col gap-10 w-full p-4">
                <h1 className='text-6xl max-md:text-2xl text-start max-md:text-center text-white font-bold'>We make it easy for <span className='text-primary'>tenants</span> and <span className='text-primary'>landlords.</span></h1>
                <p className='text-start max-md:text-center text-white'>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            </div>
            </div>
            <div className="col-span-2 p-4">
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide text-white text-2xl">
                        <div className="bg-white/20 p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-white">

                            </div>
                            <div className="text-start w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide text-white text-2xl">
                    <div className="bg-white p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-primary">

                            </div>
                            <div className="text-start text-black w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide text-white text-2xl">
                    <div className="bg-primary p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-white">

                            </div>
                            <div className="text-start w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide text-white text-2xl">
                    <div className="bg-white/20 p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-white">

                            </div>
                            <div className="text-start w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        <div className="border-b border-b-[#312F4B] w-full"></div>
        <div className="max-w-screen-2xl grid grid-cols-3 gap-16 max-md:gap-6 max-md:grid-cols-1 items-center justify-between mx-auto p-24 pt-12 max-md:p-4 w-full h-full">
            <div className="flex flex-col items-center gap-4 w-full p-4">
                <h1 className='text-4xl text-start text-white font-bold'>7.4%</h1>
                <p className='text-start text-white'>Property Return Rate</p>
            </div>
            <div className="flex flex-col items-center gap-4 w-full p-4">
                <h1 className='text-4xl text-start text-white font-bold'>3,856</h1>
                <p className='text-start text-white'>Property in Sell & Rent</p>
            </div>
            <div className="flex flex-col items-center gap-4 w-full p-4">
                <h1 className='text-4xl text-start text-white font-bold'>2,540</h1>
                <p className='text-start text-white'>Daily Completed Transactions</p>
            </div>
        </div>
    
    </div>
    <div className="bg-gradient-to-l relative from-[#F7F7FD]/50 via-[#F7F7FD] to-[#F7F7FD]/50">
        <div className="max-w-screen-2xl mx-auto p-24 pb-12 max-md:p-4 w-full h-full">
            <h5 className='text-xl text-primary mb-3'>No Spam Promise</h5>
            <h5 className='text-4xl font-bold'>Are you a landlord?</h5>
    
    </div>
    </div>
    
    </>
    );
}

export default Home;