import About from '../components/About';
import Contact from '../components/Contact';
import Business from './Business';
import GallerySection from './Gallery';
import Testimonial from './Testimonial';

function Main() {
  return (
    <>
      <main>
        <About />
        <Business />
        <Testimonial />
        <GallerySection />
        <Contact />
      </main>
    </>
  );
}
export default Main;
