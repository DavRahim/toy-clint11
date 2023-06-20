import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const toys = useLoaderData();
  const {
    _id,
    name,
    seller,
    email,
    category,
    price,
    rating,
    quantity,
    description,
    photo,
  } = toys;

  const handleUpdateToy = (event) => {
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

    const updateToy = {
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
    
    fetch(`https://toy-server-ten.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Done.",
            text: "Toy Update!",
          });
        }
      });
  };

  return (
    <div className="w-11/12 m-auto min-w-screen min-h-screen bg-base-200  flex justify-center items-center">
      <div className="w-[550px] text-[#0c0c0c]  p-2">
        <div className="bg-base-200 p-4 rounded-md">
          <h2 className="text-4xl mb-3 text-center">Update Toy</h2>
          <form onSubmit={handleUpdateToy}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Toy Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={seller}
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
                defaultValue={email}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Sub-category</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="category"
                defaultValue={category}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={quantity}
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
                defaultValue={description}
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
                defaultValue={photo}
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

export default Update;
