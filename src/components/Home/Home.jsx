import React from 'react';
import Hero from './Hero/Hero';
import ToyTeb from './ToyTab/ToyTeb';
import BestChoice from './BestChoice/BestChoice';
import Banner from './Banner/Banner';
import Gellary from '../Gellary/Gellary';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle("Home")
    return (
      <div className="w-11/12 m-auto">
        <Hero></Hero>
        <ToyTeb></ToyTeb>
        <BestChoice></BestChoice>
        <Gellary></Gellary>
        <Banner></Banner>
        
      </div>
    );
};

export default Home;