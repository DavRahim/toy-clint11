import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const AddToy = () => {
  useTitle("Add Toys");

  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const addToy = {
      name,
      seller,
      email,
      category,
      price,
      rating,
      quantity,
      description,
      photo,
    };

    fetch("https://toy-server-ten.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Done.",
            text: "One Toy Add!",
          });
        }
      });
  };

  return (
    <div className="w-11/12 m-auto my-4 min-w-screen min-h-screen bg-base-200  flex justify-center items-center">
      <div className="w-[550px] text-[#0c0c0c]  p-2">
        <div className="bg-base-200 p-4 rounded-md">
          <h2 className="text-4xl mb-3 text-center">Add A New Toy</h2>
          <form onSubmit={handleAddToy}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Toy Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">seller name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="seller"
                defaultValue={user?.displayName}
                placeholder="seller name"
                id="seller"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">seller email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="seller email"
                id="email"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Sub-category</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="category"
                placeholder="Sub-category"
                id="password"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Price</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="price"
                placeholder="Price"
                id="confirm"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Rating</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="rating"
                placeholder="Rating"
                id="confirm"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Available quantity</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="quantity"
                placeholder="Available quantity"
                id="confirm"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Detail description</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="description"
                placeholder="Detail description"
                id="confirm"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Photo URL</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="photo"
                placeholder="Photo URL"
                id="photo"
                required
              />
            </div>

            <input
              className="bg-[#f5efdb] w-full hover:shadow-blue-500/50 hover:shadow-lg text-[#0c0c0c] rounded-md px-7 py-2 mb-3"
              type="submit"
              value="Add A Toys "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
