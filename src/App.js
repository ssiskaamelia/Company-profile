import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { HomePage, AboutPage, BusinessPage, ServicesPage, CareerPage, MediaPage, ContactUsPage } from './pages';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/business" exact component={BusinessPage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/career" exact component={CareerPage} />
        <Route path="/media" exact component={MediaPage} />
        <Route path="/contact" exact component={ContactUsPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App

{/* <Switch>
  <Route path="/" exact component={Header} />
  <Route path="/about" exact component={AboutPage} />
  <Route path="/visimisi" exact component={Visimisi} />
  <Route path="/business" exact component={Business} />
  <Route path="/services" exact component={Services} />
  <Route path="/media-gallery" exact component={MediaPage} />
  <Route path="/media-testimonial" exact component={Testimonial} />
  <Route path="/media-program" exact component={Programs} />
  <Route path="/contact" exact component={Contact} />
  <Redirect to="/" />
</Switch> */}