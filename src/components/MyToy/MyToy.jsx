import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import useTitle from "../hooks/useTitle";

const MyToy = () => {
  // const loadMyToys = useLoaderData();
  const [loadMyToys, setLoadMyToys] = useState([]);
  const [myToys, setMyToys] = useState(loadMyToys);
  const { user } = useContext(AuthContext);
  useTitle("My Toys");
  const url = `https://toy-server-ten.vercel.app/mytoys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoadMyToys(data);
      });
  }, []);

  return (
    <div className="w-11/12 m-auto">
      <div className="text-center my-6">
        <h2 className="text-3xl font-semibold">My Toys</h2>
      </div>
      <div className="overflow-x-auto w-full">
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
            {loadMyToys.map((myToy) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                myToys={myToys}
                setMyToys={setMyToys}
              ></MyToysRow>
            ))}
            {/* row 2 */}
            {/* row 3 */}
            {/* row 4 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
