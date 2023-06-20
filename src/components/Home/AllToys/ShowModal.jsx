import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ShowModal = () => {
  useTitle("Toy Details");

  const detailToy = useLoaderData();
  const {
    email,
    description,
    photo,
    name,
    price,
    rating,
    seller,
    category,
    quantity,
  } = detailToy;
  return (
    <div className="w-11/12 bg-base-200 mb-5 mt-5  m-auto">
      <div className="hero p-0 mb-5">
        <div className="hero-content flex-col lg:flex-row p-7 items-center w-full">
          <div className="w-1/2 object-cover">
            <img src={photo} className="w-full rounded-lg shadow-2xl" />
          </div>

          <div className="w-1/2 p-10 mt-0">
            <h1 className="text-3xl font-medium mb-5">{name}</h1>
            <p className="mb-5">{seller}</p>
            <p className="mb-5">{email}</p>
            <p className="mb-5">{description}</p>
            <p className="mb-5">
              <span className="text-lg font-semibold"> Category: </span>
              {category}
            </p>
            <p className="mb-5">
              <span className="text-lg font-semibold"> Quantity: </span>
              {quantity}
            </p>
            <h4 className="text-xl font-semibold mb-2">Price: ${price}</h4>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="text-gray-500"></FaRegStar>}
              placeholderSymbol={<FaStar className="text-red-500"></FaStar>}
              fullSymbol={<FaStarHalf className="text-red-500"></FaStarHalf>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
