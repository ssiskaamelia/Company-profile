import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import MediaPage from "./components/MediaPage";
import Contact from "./components/Contact"
import { Switch, Route, Redirect } from "react-router-dom";
import Business from "./components/Business";
import Testimonial from "./components/Testimonial";
import Services from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <AboutPage /> */}
      <div>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/media" component={MediaPage} />
          <Route path="/business" component={Business} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
