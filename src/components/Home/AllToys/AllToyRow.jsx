import React from "react";
import { Link } from "react-router-dom";

const AllToyRow = ({ AllToy }) => {
  const { _id, category, name, photo, price, quantity } = AllToy;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <h2>{category}</h2>
      </td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/alldetail/${_id}`}>
          {" "}
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToyRow;
