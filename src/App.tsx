import logo from  './assets/logo/atera-logo.svg'
import {ImageSlider} from './components/ImageSlider.tsx'
import TypeWriter from './components/TypeWriter.tsx'

function App() {

  return (
    <>
      <div className="flex flex-col  items-center mt-8 font-roboto" >
        <img src={logo} alt="Atera Logo"  className='w-36 '/>
        <TypeWriter text="Join the new era of I.T. with Atera"  />
        <h5 className='self-start px-3 mb-1'>With our all-in-one I.T. platform, you get:</h5>
        <ul className='self-start px-4 '>
          <li><span className="text-gold text-2xl pr-2">●</span>Monitor unlimited devices</li>
          <li><span className="text-gold text-2xl pr-2">●</span>Fixed price</li>
          <li><span className="text-gold text-2xl pr-2">●</span>5-minute onboarding</li>
          <li><span className="text-gold text-2xl pr-2">●</span>30-day free trial</li>
        </ul>
        <button className="rounded-2xl border bg-atera_pink  text-white  text-lg  px-7rem py-3 mt-8">start free trial</button>
        <p className="text-gray-600 font-medium text-sm mb-0  opacity-60 mt-1">No credit card required</p>
      </div>
      <ImageSlider />
    </>
    

  )
}

export default App
