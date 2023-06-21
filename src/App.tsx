import ImageSlider from './components/ImageSlider.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className='lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto'>
      <Header />
      <div>
        <ImageSlider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
