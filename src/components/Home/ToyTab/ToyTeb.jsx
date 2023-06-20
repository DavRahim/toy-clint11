
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToy from './SingleToy';

const ToyTeb = () => {
 const [toys, setToys] = useState([])
    useEffect(() => {
      fetch("https://toy-server-ten.vercel.app/toy-car")
        .then((res) => res.json())
        .then((data) => setToys(data));
    },[]);
    return (
      <div className="w-11/12 m-auto pt-16 pb-8">
        <h1 className="text-4xl mb-5 text-center divide-x">Shop by category</h1>
        <Tabs>
          <TabList>
            <Tab>
              <h3 className="text-xl md:text-2xl">Toy Truck</h3>
            </Tab>
            <Tab>
              <h3 className="text-xl md:text-2xl">Toy Sport Truck</h3>
            </Tab>
            <Tab>
              <h3 className="text-xl md:text-2xl">Toy Fire Truck</h3>
            </Tab>
          </TabList>

          <TabPanel>
            <div className=" md:flex w-[96%] m-auto gap-7 pt-7">
              {toys.slice(0, 3).map((toy) => (
                <SingleToy toy={toy} key={toy._id}></SingleToy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" md:flex w-[96%] m-auto gap-7 pt-7">
              {toys.slice(3, 6).map((toy) => (
                <SingleToy toy={toy} key={toy._id}></SingleToy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" md:flex w-[96%] m-auto gap-7 pt-7">
              {toys.slice(6, 9).map((toy) => (
                <SingleToy toy={toy} key={toy._id}></SingleToy>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ToyTeb;