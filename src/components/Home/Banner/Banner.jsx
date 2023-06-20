import React from 'react';

const Banner = () => {
    return (
      <div className="w-11/12 m-auto" >
        <h2 className="text-3xl font-medium text-center mb-5">About Us</h2>
        <div className="hero bg-base-200 p-0 mb-5">
          <div className="md:hero-content flex-col items-center justify-center lg:flex-row p-7">
            <img
              src="https://www.miniso.com/UploadFiles/Images/prefer111.jpg"
              className="w-1/2 m-auto rounded-lg shadow-2xl"
            />
            <div className="w-1/2 m-auto md:p-10">
              <h1 className="text-3xl font-medium">Scent Diffuser</h1>
              <p className="">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;