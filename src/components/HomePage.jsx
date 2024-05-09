import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { productList } from "../db/data";

const HomePage = () => {
  const [active, setActive] = useState(1);
  

  return (
    <div className="bg-[#252836] text-white pl-2 pr-6 pl-[120px]  w-[1145px] rounded-lg">
      <div>
        <div className="flex items-center pt-6  justify-between mb-6">
          <div>
            <h1 className="text-[28px] font-semibold leading-[140%] ">
              Jaegar Resto
            </h1>
            <p className="leading-[140%] text-[#E0E6E9]">Tuesday, 2 Feb 2021</p>
          </div>
          <div className="flex items-center gap-2 border rounded-lg p-4 bg-[#2D303E] border-[#393C49]">
           <form className="flex items-center gap-2">
           <label htmlFor="search">
              <IoSearch />
            </label>
            <input
             
              className="bg-transparent outline-none w-[210px]"
              type="search"
              placeholder="Search for food, coffe, etc..."
              id="search"
            />
           </form>
          </div>
        </div>

        <ul className="flex gap-8 w-[600px] mt-[]">
          <li
            onClick={() => setActive(1)}
            className={
              active == 1
                ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
                : "text-red"
            }
          >
            Hot Dishes
          </li>
          <li
            onClick={() => setActive(2)}
            className={
              active == 2
                ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
                : "text-red"
            }
          >
            Cold Dishes
          </li>
          <li
            onClick={() => setActive(3)}
            className={
              active == 3
                ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
                : "text-red"
            }
          >
            Soup
          </li>
          <li
            onClick={() => setActive(4)}
            className={
              active == 4
                ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
                : "text-red"
            }
          >
            Grill
          </li>
          <li
            onClick={() => setActive(5)}
            className={
              active == 5
                ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
                : "text-red"
            }
          >
            Appetizer
          </li>
        </ul>
        <hr className="border-[#393C49]" />
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-[20px] font-semibold leading-[140%]">
            Choose Dishes
          </h1>
          <select className="rounded-lg p-[14px] bg-[#1F1D2B] border-[#393C49] border outline-none">
            <option value="Dine In">Dine In</option>
            <option value="To Go">To Go</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>
      </div>

      <div
        className="grid grid-cols-3  gap-[50px] mt-[80px] gap-y-[60px] h-[436px] overflow-y-scroll scrollbar-width: none;
      -ms-overflow-style: none;
      scroll-behavior: smooth;"
      >
        {active == 1 ? (
          productList.slice(0, 9).map((product) => (
            <div className="card text-center  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px]">
              <img
                className="rounded-[50%] w-[180px] h-[180px] absolute top-[-40px] ml-[60px]"
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[140px] mb-3 w-[200px] mx-auto">
                {product.name}
              </h2>
              <p className="mb-3">${product.price}</p>
              <p>{product.qnt} Bowls available</p>
            </div>
          ))
        ) : (
          <></>
        )}

        {active == 2 ? (
          productList.slice(9, 18).map((product) => (
            <div className="card text-center  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px]">
              <img
                className="rounded-[50%] w-[180px] h-[180px] absolute top-[-40px] ml-[60px]  "
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[140px] mb-3 w-[200px] mx-auto">
                {product.name}
              </h2>
              <p className="mb-3">${product.price}</p>
              <p>{product.qnt} Bowls available</p>
            </div>
          ))
        ) : (
          <></>
        )}

        {active == 3 ? (
          productList.slice(18, 27).map((product) => (
            <div className="card text-center  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px]">
              <img
                className="rounded-[50%] w-[180px] h-[180px] absolute top-[-40px] ml-[60px]  "
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[140px] mb-3 w-[200px] mx-auto">
                {product.name}
              </h2>
              <p className="mb-3">${product.price}</p>
              <p>{product.qnt} Bowls available</p>
            </div>
          ))
        ) : (
          <></>
        )}

        {active == 4 ? (
          productList.slice(9, 18).map((product) => (
            <div className="card text-center  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px]">
              <img
                className="rounded-[50%] w-[180px] h-[180px] absolute top-[-40px] ml-[60px]  "
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[140px] mb-3 w-[200px] mx-auto">
                {product.name}
              </h2>
              <p className="mb-3">${product.price}</p>
              <p>{product.qnt} Bowls available</p>
            </div>
          ))
        ) : (
          <></>
        )}

        {active == 5 ? (
          productList.slice(27, 36).map((product) => (
            <div className="card text-center  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px]">
              <img
                className="rounded-[50%] w-[180px] h-[180px] absolute top-[-40px] ml-[60px]  "
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[140px] mb-3 w-[200px] mx-auto">
                {product.name}
              </h2>
              <p className="mb-3">${product.price}</p>
              <p>{product.qnt} Bowls available</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HomePage;
