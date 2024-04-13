import React from 'react';
import LogoImage from '../../assets/images/Logo.svg';

const Footer:React.FC = () => {

return (<>
<footer className='bg-white py-20'>
        <div className="max-w-screen-2xl grid grid-cols-4 gap-16 max-md:gap-8 max-md:grid-cols-1 items-start justify-between mx-auto p-4 w-full h-full">
        <a href='/'><img src={LogoImage} alt="" /></a>
        <div className='text-start flex flex-col gap-6'>
            <div className="">
            <h5 className='font-extrabold mb-4 text-black'>SELL A HOME</h5>
            <ul>
                <li className='py-2'><a href="">Request an offer</a></li>
                <li className='py-2'><a href="">Pricing</a></li>
                <li className='py-2'><a href="">Reviews</a></li>
                <li className='py-2'><a href="">Stories</a></li>
            </ul>
            </div>
            <div className="">
            <h5 className='font-extrabold mb-4 text-black'>SELL A HOME</h5>
            <ul>
                <li className='py-2'><a href="">Request an offer</a></li>
                <li className='py-2'><a href="">Pricing</a></li>
                <li className='py-2'><a href="">Reviews</a></li>
                <li className='py-2'><a href="">Stories</a></li>
            </ul>
            </div>
            
        </div>
        <div className='text-start flex flex-col gap-6'>
            <div className="">
            <h5 className='font-extrabold mb-4 text-black'>BUY, RENT AND SELL</h5>
            <ul>
                <li className='py-2'><a href="">Buy and sell properties</a></li>
                <li className='py-2'><a href="">Rent home</a></li>
                <li className='py-2'><a href="">Builder trade-up</a></li>
            </ul>
            </div>
            <div className="">
            <h5 className='font-extrabold mb-4 text-black'>BUY, RENT AND SELL</h5>
            <ul>
                <li className='py-2'><a href="">Buy and sell properties</a></li>
                <li className='py-2'><a href="">Rent home</a></li>
                <li className='py-2'><a href="">Builder trade-up</a></li>
            </ul>
            </div>
            
        </div>
        <div className='text-start flex flex-col gap-6'>
            <div className="">
            <h5 className='font-extrabold mb-4 text-black'>ABOUT</h5>
            <ul>
                <li className='py-2'><a href="">Company</a></li>
                <li className='py-2'><a href="">How it works</a></li>
                <li className='py-2'><a href="">Contact</a></li>
                <li className='py-2'><a href="">Investors</a></li>
            </ul>
            </div>
            <div className="">
            <h5 className='font-extrabold mb-4 text-black'>ABOUT</h5>
            <ul>
                <li className='py-2'><a href="">Company</a></li>
                <li className='py-2'><a href="">How it works</a></li>
                <li className='py-2'><a href="">Contact</a></li>
                <li className='py-2'><a href="">Investors</a></li>
            </ul>
            </div>
            
        </div>

        </div>
        
    </footer>
</>);
}

export default Footer;