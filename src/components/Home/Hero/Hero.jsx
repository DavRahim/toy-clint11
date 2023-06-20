import React from 'react';

const Hero = () => {
    return (
      <>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://i.ibb.co/GHSMx2t/fluffy-toy-texture-close-up.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-gray-200">Welcome Kids Store</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Hero;