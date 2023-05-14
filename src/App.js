import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeDataMay2023';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
              <meta charSet="utf-8" />
              <title>Rudraksh Monga</title>
              <link rel="canonical" href="http://whyismynamerudy.tech" />
        </Helmet>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        {/* <ContactUs resumeData={resumeData}/> */}
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;