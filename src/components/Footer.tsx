import os1 from '../assets/badges/os-1.svg'
import os2 from '../assets/badges/os-2.svg'
import os3 from '../assets/badges/os-3.svg'
import certificate from '../assets/badges/2023.svg'


const Footer = () => (
        <div className='flex justify-center mt-8 lg:mt-1 flex-wrap px-14'>
            <img src={os1} alt="windows" className="px-2 w-14 " />
            <img src={os2} alt="ios" className="px-2 lg:w-14 "  />
            <img src={os3} alt="linux" className="px-2 lg:w-12 " />
            <div className="md:border-r-2 md:border-black md:opacity-20 none"></div>
            <img src={certificate} alt="Certificate" className=" px-2 lg:w-14" />
        </div>
)

export default Footer