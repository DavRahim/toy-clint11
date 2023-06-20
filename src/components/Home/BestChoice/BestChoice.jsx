import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const BestChoice = () => {
    return (
      <div className="w-11/12 m-auto py-16">
        <div>
          <h1 className="text-4xl text-center py-6">Best Choice</h1>
        </div>
        <div
          className=" md:flex w-[96%] m-auto gap-7 pt-7"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
            <figure className="h-56">
              <img
                src="https://www.miniso.com/UploadFiles/Images/111.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center m-auto"> Plash Doll</h2>
              <p>
                {" "}
                who designed products for Adidas and other famous brands, and
                now are serving MINISO. Simple, practical and humanized design
                style.
              </p>
            </div>
          </div>
          <div className="card mb-5 card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-56">
              <img
                src="https://www.miniso.com/UploadFiles/Images/%E7%9C%BC%E7%BD%A9.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center m-auto">Cotton Eye Mask</h2>
              <p>
                Four designers of Permafrost graduated from the Oslo School of
                Architecture (Norway's top three design school),
              </p>
            </div>
          </div>
          <div className="card mb-5 card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-56">
              <img
                src="https://www.miniso.com/UploadFiles/Images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(2).jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center m-auto">
                Little M Night Light
              </h2>
              <p>
                The small night light was designed by the Norwegian designer
                team Permafrost of MINISO.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BestChoice;