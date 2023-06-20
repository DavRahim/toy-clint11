import React, { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import useTitle from "../../hooks/useTitle";

// const option = [
//   {value: 'price-Ascending'},
//   {value: 'price-Descending'},
// ]

const AllToys = () => {
  useTitle("All Toys");

  const [AllToysq, setAllToysq] = useState([]);
  const [searchText, setSearchText] = useState("");
  //  const [selected, setSelected] = useState([0])

  const [ass, setAss] = useState(-1);

  useEffect(() => {
    // const [value, type] = selected.value.split('-').map(item => item.toLowerCase())

    fetch(`https://toy-server-ten.vercel.app/toys?value="price"&type=${ass}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToysq(data);
      });
  }, [ass]);

  const handleSearch = () => {
    fetch(`https://toy-server-ten.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToysq(data);
      });
  };
  const handleAss = () => {
    setAss(1);
  };
  const handleDes = () => {
    setAss(-1);
  };

  return (
    <div className="w-11/12 m-auto">
      <div className="text-center my-6">
        <h2 className="text-3xl font-semibold">All Toys</h2>
      </div>
      <div className="flex items-center justify-between mb-5">
        <div className="form-control">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="form-control">
          <div className="input-group">
            <div>
              <button onClick={handleAss} className="btn me-4">
                Ascending
              </button>
              <button onClick={handleDes} className="btn">
                Descending
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Button</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {AllToysq.map((AllToy) => (
              <AllToyRow key={AllToy._id} AllToy={AllToy}></AllToyRow>
            ))}
            {/* row 2 */}
            {/* row 3 */}
            {/* row 4 */}
          </tbody>
        </table>
        {AllToysq.length === 20 ? (
          <>
            <p className="text-center">Show 20 results by default</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AllToys;
