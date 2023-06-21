import TypeWriter from './TypeWriter';
import logo from '../assets/logo/atera-logo.svg';
import Benefits from './Benefits';
import StartTrialButton from './StartTrialButton';

const Header = () => (
  <div className="flex flex-col place-items-center items-center lg:items-start  mt-8 lg:mt-0 lg:max-w-lg lg:ml-9 lg:place-self-center">
    <img src={logo} alt="Atera Logo" className="w-36 lg:w-40 " />
    <TypeWriter text="Join the new era of I.T. with Atera" />
    <p className="self-start px-3 mb-1 sm:self-center md:text-lg lg:self-start">
      With our all-in-one I.T. platform, you get:
    </p>
    <Benefits />
    <StartTrialButton />
  </div>
);

export default Header;
