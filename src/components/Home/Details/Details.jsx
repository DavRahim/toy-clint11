import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const Details = () => {
  useTitle("Buy Now");
  const Details = useLoaderData();
  const { description, image, name, price, rating } = Details;
  const [isDisabled, setDisabled] = useState(true);

  const handleBuy = () => {
    setDisabled(!isDisabled);
    Swal.fire("Thank You!", "Add to cart!", "success");
  };
  return (
    <div className="w-11/12 bg-base-200 mb-5 mt-5  m-auto">
      <div className="hero p-0 mb-5">
        <div className="hero-content flex-col lg:flex-row p-7 items-center">
          <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
          <div className="w-1/2 p-10 mt-0 flex flex-col">
            <h1 className="text-3xl font-medium mb-5">{name}</h1>
            <p className="mb-5">{description}</p>
            <h4 className="text-xl font-semibold mb-2">Price: ${price}</h4>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="text-gray-500"></FaRegStar>}
              placeholderSymbol={<FaStar className="text-red-500"></FaStar>}
              fullSymbol={<FaStarHalf className="text-red-500"></FaStarHalf>}
            />
            <button
              onClick={handleBuy}
              className={isDisabled ? "btn btn-primary w-28 mt-5" : "hidden"}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
