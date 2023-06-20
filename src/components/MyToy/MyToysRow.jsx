import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ myToy, setMyToys, myToys }) => {
  const { _id, category, name, photo, price, quantity } = myToy;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-server-ten.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = myToys.filter((to) => to._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

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
        <Link to={`/update/${_id}`}>
          <button className="btn btn-ghost btn-xs">Update</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;
