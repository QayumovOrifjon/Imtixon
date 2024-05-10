import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { productList } from "../db/data";

const HomePage = ({handleSelect ,onAdd}) => {
  const [active, setActive] = useState(1);
  const [filter, setFilter] = useState("");

  const searchText = (event) =>{
    setFilter(event.target.value);
  }

let dataSearch = productList.filter(item =>{
return Object.keys(item).some(key =>
  item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
)
});


  return (
    
    <div className="bg-[#252836] text-white pl-2 pr-6 pl-6 h-[100vh]  w-[978px] rounded-l-lg">
    <div className=" w-[950px]">
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
             value={filter}
              className="bg-transparent outline-none w-[210px]"
              type="search"
              placeholder="Search for food, coffe, etc..."
              id="search"
              onChange={searchText.bind(this)}
            />
           </form>
          </div>
        </div>

        <ul className="flex gap-8 w-[600px] mt-[]">
          <li
            onClick={() => setActive(1)}
            className={
             `
             hover:text-[#EA7C69]
             ${ active == 1
              ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
              : "text-red"}`
            }
          >
            Hot Dishes
          </li>
          <li
            onClick={() => setActive(2)}
            className={
              `
             hover:text-[#EA7C69]
             ${ active == 2
              ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
              : "text-red"}`
            }
          >
            Cold Dishes
          </li>
          <li
            onClick={() => setActive(3)}
            className={
              `
              hover:text-[#EA7C69]
              ${ active == 3
               ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
               : "text-red"}`
            }
          >
            Soup
          </li>
          <li
            onClick={() => setActive(4)}
            className={
              `
              hover:text-[#EA7C69]
              ${ active == 4
               ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
               : "text-red"}`
            }
          >
            Grill
          </li>
          <li
            onClick={() => setActive(5)}
            className={
              `
              hover:text-[#EA7C69]
              ${ active == 5
               ? "text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-b-[2px] pb-3 border-[#EA7C69] "
               : "text-red"}`
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
          <select onChange={handleSelect} className="rounded-lg p-[14px] bg-[#1F1D2B] border-[#393C49] border outline-none">
            <option value="Dine In">Dine In</option>
            <option value="To Go">To Go</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>
      </div>
      <div
        className="grid grid-cols-4   gap-[45px] mt-[80px] gap-y-[60px] h-[439px] overflow-y-scroll scrollbar-width: none; pb-10
      -ms-overflow-style: none;
      scroll-behavior: smooth;"
      >
        {active == 1 ? (
          dataSearch.slice(0, 8).map((product) => (
            <div onClick={() => onAdd(product)} key={product.id} id={product.id} className="hover:scale-[1.02] transition-all ease-in-out card text-center w-[200px] h-[260px]  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px] ">
             
              <img
                className=" rounded-[50%] w-[135px] h-[135px] absolute top-[-35px] ml-[32px] card_image"
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[92px] mb-3 px-3 mx-auto">
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
          dataSearch.slice(8, 16).map((product) => (
            <div onClick={() => onAdd(product)} key={product.id} id={product.id} className="hover:scale-[1.02] transition-all ease-in-out card text-center w-[200px] h-[260px]  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px] ">
              <img
                className="rounded-[50%] w-[135px] h-[135px] absolute top-[-35px] ml-[32px] card_image "
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[92px] mb-3 px-3 mx-auto">
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
          dataSearch.slice(16, 24).map((product) => (
            <div onClick={() => onAdd(product)} key={product.id} id={product.id} className="hover:scale-[1.02] transition-all ease-in-out card text-center w-[200px] h-[260px]  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px] ">
              <img
                className="rounded-[50%] w-[135px] h-[135px] absolute top-[-35px] ml-[32px] card_image"
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[92px] mb-3 px-3 mx-auto">
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
          dataSearch.slice(24, 32).map((product) => (
            <div onClick={() => onAdd(product)} key={product.id} id={product.id} className="hover:scale-[1.02] transition-all ease-in-out card text-center w-[200px] h-[260px]  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px] ">
              <img
                className="rounded-[50%] w-[135px] h-[135px] absolute top-[-35px] ml-[32px] card_image  "
                src={product.img}
                alt={product.alt}
              />
              <h2 className=" mt-[92px] mb-3 px-3 mx-auto">
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
          dataSearch.slice(32, 40).map((product) => (
            <div onClick={() => onAdd(product)} key={product.id} id={product.id} className="hover:scale-[1.02] transition-all ease-in-out card text-center w-[200px] h-[260px]  py-[24px] bg-[#1F1D2B] relative rounded-3xl mt-[50px] ">
              <img
                className="rounded-[50%] w-[135px] h-[135px] absolute top-[-35px] ml-[32px] card_image "
                src={product.img}
                alt={product.alt}
              />
              <h2 className="mt-[92px] mb-3 px-3 mx-auto">
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


