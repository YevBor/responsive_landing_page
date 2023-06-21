import Footer from './Footer';
import Header from './Header';
import ImageSlider from './ImageSlider';

const TopSection = () => (
  <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto">
    <Header />
    <div>
      <ImageSlider />
      <Footer />
    </div>
  </div>
);

export default TopSection;
