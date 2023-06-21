
import os1 from '../assets/badges/os-1.svg';
import os2 from '../assets/badges/os-2.svg';
import os3 from '../assets/badges/os-3.svg';
import certificate from '../assets/badges/2023.svg';

const Footer = () => (
    <div className="grid  md:grid-cols-2 items-center justify-center mt-8 lg:mt-1 md:pl-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:border-r-2 md:border-gray-400  md:pr-2 md:justify-end">
            <div className="flex justify-center flex-wrap ">
                <img src={os1} alt="windows" className="px-2 w-14 " />
                <img src={os2} alt="ios" className="px-2 lg:w-14 "  />
                <img src={os3} alt="linux" className="px-2 lg:w-12 " />
            </div>
            <div className="border-t-2 border-gray-400  block md:hidden w-full mt-2"></div>
        </div>
        <div className="flex justify-center items-center md:justify-start">
            <img src={certificate} alt="Certificate" className=" px-2 lg:w-14 mt-2 md:mt-0 " />
        </div>
    </div>
);

export default Footer;