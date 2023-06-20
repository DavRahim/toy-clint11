import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const SingleToy = ({ toy }) => {
  const { _id, name, price, image, rating } = toy;
  return (
    <>
      <div className="mb-5 card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-between">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStarHalf></FaStarHalf>}
            />
            <Link to={`details/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleToy;
