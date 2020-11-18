import React, { useState } from 'react';
import DropNav from '../containers/DropNav/DropNav';
import HeroSection from '../containers/herosection';
import InfoSection from '../containers/infosection';
import Navbar from '../containers/navbar/Navbar';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo
} from '../containers/infosection/Data';
import Services from '../containers/services';
import Footer from '../containers/footer';

const Home = () => {
  const [isOpen, setIsOpeen] = useState(false);

  const toggle = () => {
    setIsOpeen(!isOpen);
  };
  return (
    <>
      <DropNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
