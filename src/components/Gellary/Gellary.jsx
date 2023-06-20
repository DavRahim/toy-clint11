import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gellary = () => {
  return (
    <div className="mb-8">
      <h2 className="text-center text-4xl mb-5">Gallery</h2>
      <div
        className="w-11/12 shadow-inner m-auto grid gap-4 grid-cols-3 grid-rows-3"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img
          src="https://i.ibb.co/Cwp0QSN/asian-cute-boy-playing-doctor-use-stethoscope-checking-large-teddy-bear-sitting-floor.jpg"
          alt=""
        />

        <img
          src="https://i.ibb.co/LrhDS65/memory-concept-with-puzzle-pieces-view.jpg"
          alt=""
        />

        <img
          src="https://i.ibb.co/MfHZhTK/baby-toys-wooden-plane-flat-lay.jpg"
          alt=""
        />

        <img
          src="https://i.ibb.co/3v93JDD/play-dough-background-with-frog.jpg"
          alt=""
        />

        <img
          src="https://i.ibb.co/yFbr5d4/green-easter-car-with-eggs-copy-space.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/8bfjcDm/plastic-building-blocks-toys.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/wJPgK0y/little-cute-girl-showing-big-teddy-bear-with-happiness.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/8bfjcDm/plastic-building-blocks-toys.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/3v93JDD/play-dough-background-with-frog.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gellary;
