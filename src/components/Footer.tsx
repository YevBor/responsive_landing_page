import os1 from '../assets/badges/os-1.svg'
import os2 from '../assets/badges/os-2.svg'
import os3 from '../assets/badges/os-3.svg'
import certificate from '../assets/badges/2023.svg'


const Footer = () => (
    <>
    <div className='flex justify-center mt-8'>
        <img src={os1} alt="windows" className="px-2" />
        <img src={os2} alt="ios" className="px-2" />
        <img src={os3} alt="linux" className="px-2" />
    </div>
    <div className='mt-4 '>
        <hr  className='border-black border-2 max-w-xs mx-auto opacity-20'/>
    </div>
    <div>
        <img src={certificate} alt="Certificate" className="mx-auto mt-3" />
    </div>
  </>
)

export default Footer