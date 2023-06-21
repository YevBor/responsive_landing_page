import TypeWriter from "./TypeWriter";
import logo from '../assets/logo/atera-logo.svg'
import Benefits from "./Benefits";
import StartTrialButton from "./StartTrialButton";

const Header = () => (
    <div className="flex flex-col  items-center mt-8" >
        <img src={logo} alt="Atera Logo"  className='w-36 '/>
        <TypeWriter text="Join the new era of I.T. with Atera"  />
        <p className='self-start px-3 mb-1 sm:self-center md:text-lg '>With our all-in-one I.T. platform, you get:</p>
        <Benefits/>
        <StartTrialButton/>
  </div>
);

export default Header;