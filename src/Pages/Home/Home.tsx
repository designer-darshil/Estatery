import React, { useState } from 'react';
import TenantsLandlords from "../../assets/images/TenantsLandlords.png";
import propertyImage1 from "../../assets/images/propertyImage1.png";
import HeroBG from "../../assets/images/HeroBG.png";
import Area from "../../assets/images/Area.svg";
import Bathrooms from "../../assets/images/Bathrooms.svg";
import Beds from "../../assets/images/Beds.svg";
import PropertyInsurance from "../../assets/Benefit/PropertyInsurance.png";
import BestPrice from "../../assets/Benefit/BestPrice.png";
import LowestCommission from "../../assets/Benefit/LowestCommission.png";
import OverallControl from "../../assets/Benefit/OverallControl.png";

import Swiper from 'swiper';
import 'swiper/css';

const Home: React.FC = () => {


    const swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
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
                        <img src={PropertyInsurance} alt="PropertyInsurance" />
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Property Insurance</h5>
                        <p>We offer our customer property protection of liability coverage and insurance for their better life.</p>
                    </div>
                    <div className='w-full mb-8'>
                    <div className="mb-6">
                        <img src={BestPrice} alt="BestPrice" />
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Best Price</h5>
                        <p>Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
                    </div>
                    <div className='w-full mb-8'>
                    <div className="mb-6">
                        <img src={LowestCommission} alt="LowestCommission" />
                    </div>
                        <h5 className="font-extrabold text-2xl mb-4">Lowest Commission</h5>
                        <p>You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
                    </div>
                    <div className='w-full mb-8'>
                    <div className="mb-6">
                    <img src={OverallControl} alt="OverallControl" />

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
                                    <img src={Beds} alt="" />

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Bathrooms} alt="" />
                                    <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Area} alt="" />
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
                                    <img src={Beds} alt="" />

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Bathrooms} alt="" />
                                    <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Area} alt="" />
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
                                    <img src={Beds} alt="" />

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Bathrooms} alt="" />
                                    <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Area} alt="" />
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
                                    <img src={Beds} alt="" />

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Bathrooms} alt="" />
                                    <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Area} alt="" />
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
                                    <img src={Beds} alt="" />

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Bathrooms} alt="" />
                                    <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Area} alt="" />
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
                                    <img src={Beds} alt="" />

                                        <span>3 Beds</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Bathrooms} alt="" />
                                    <span>2 Bathrooms</span></div>
                                    <div className="flex items-center gap-3 text-md">
                                    <img src={Area} alt="" />
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
                <div dir='ltr' className="swiper mySwiper">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide w-1/3 text-white text-2xl">
                        <div className="bg-white/20 p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-white">

                            </div>
                            <div className="text-start w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide w-1/3 text-white text-2xl">
                    <div className="bg-white p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-primary">

                            </div>
                            <div className="text-start text-black w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide w-1/3 text-white text-2xl">
                    <div className="bg-primary p-5 rounded-lg flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-white">

                            </div>
                            <div className="text-start w-[calc(100%-120px)]">
                                <h1>Virtual home tour</h1>
                                <p className='text-sm'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide w-1/3 text-white text-2xl">
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
        <div className="max-w-2xl mx-auto p-24 pb-12 max-md:p-4 w-full h-full flex flex-col gap-6">
            <div className="flex flex-col gap-4">
            <h5 className='text-xl text-primary'>No Spam Promise</h5>
            <h5 className='text-4xl font-extrabold'>Are you a landlord?</h5>
            <span>Discover ways to increase your home's value and  get listed. No Spam.</span>
            </div>
            <div className='relative'>
                <button className='bg-primary text-white absolute rounded-lg py-4 px-8 top-0 right-0 m-1' type='submit'>Submit</button>
                <input type="text" className='w-full rounded-xl p-5' placeholder='Enter your email address' />

            </div>
            <span>Join <span className='text-primary'>10,000+</span> other landlords in our estatery community.</span>
    
    </div>
    </div>
    
    </>
    );
}

export default Home;