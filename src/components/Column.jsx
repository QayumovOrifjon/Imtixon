import React, { useState } from "react";
import { RiPaypalLine } from "react-icons/ri";
import { IoCardOutline, IoWallet } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

function Column({
  select,
  setSelect,
  handleSelect,
  orders,
  deleteOrder,
  setOrders,
}) {
  const [butt, setButt] = useState(true);
  const [payment, setPayment] = useState(false);

  const totalCost = orders.map((product) => product.count * product.price);
  const sum = orders.length !== 0 ? totalCost.reduce((a, b) => a + b) : 0;

  return (
    <div>
      {butt && (
        <div className="w-[454px] bg-[#1F1D2B] h-[100vh]  p-6  rounded-r-lg">
          <h1 className="text-[25px] font-semibold text-white mb-6">
            Orders #34562
          </h1>
          <div className="flex text-white gap-3 mb-6">
            <h1
              onClick={() => setSelect(1)}
              className={`px-[12px] py-[8px] border rounded-xl text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#393C49] hover:border-[#EA7C69] ${
                select === 1
                  ? "bg-[#EA7C69] text-[14px] font-semibold leading-[140%] text-white"
                  : ""
              } `}
            >
              Dine In
            </h1>
            <h1
              onClick={() => setSelect(2)}
              className={`px-[12px] py-[8px] border rounded-xl text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#393C49] hover:border-[#EA7C69] ${
                select === 2
                  ? "bg-[#EA7C69] text-[14px] font-semibold leading-[140%] text-white"
                  : ""
              }`}
            >
              To Go
            </h1>
            <h1
              onClick={() => setSelect(3)}
              className={`px-[12px] py-[8px] border rounded-xl text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#393C49] hover:border-[#EA7C69] ${
                select === 3
                  ? "bg-[#EA7C69] text-[14px] font-semibold leading-[140%] text-white"
                  : ""
              }`}
            >
              Delivery
            </h1>
          </div>

          <div className="flex justify-between text-white">
            <p>Item</p>
            <div className="flex gap-[43px]">
              <p>Qty</p>
              <p>Price</p>
            </div>
          </div>
          <hr className="mt-6 border-[#393C49]" />
          <div
            className=" overflow-y-scroll scrollbar-width: none; pb-10
      -ms-overflow-style: none;
      scroll-behavior: smooth; h-[350px]"
          >
            {orders.map((product) => (
              <div className="Row" key={product.id}>
                <div className="flex justify-between mt-6">
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[43px] h-[43px] rounded-[50%]"
                      src={product.img}
                      alt="Food-img"
                    />
                    <div>
                      <p className="text-white text-[14px] font-semibold leading-[130%] ">
                        {product.name}
                      </p>
                      <p className="text-white text-[12px] text-[#ABBBC2]">
                        ${product.price}
                      </p>
                    </div>
                    <div></div>
                  </div>
                  <div className="flex items-center gap-5">
                    <p className="p-[14px] border text-white rounded-lg bg-[#2D303E] leading-[140%] font-semibold border-[#393C49]">
                      {product.count}
                    </p>
                    <p className="leading-[140%] font-semibold text-white">
                      $ {product.count * product.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 mt-[10px]">
                  <input
                    className="flex w-[100%] pl-[14px] pr-[213px] py-[14px] items-start gap-[8px] rounded-lg bg-[#2D303E] outline-none border border-[#393C49]"
                    placeholder="Order Note..."
                  />
                  <div
                    className="border p-[14px] rounded-lg text-[#EA7C69] border-[#EA7C69]"
                    onClick={() => deleteOrder(product.id)}
                  >
                    <AiOutlineDelete />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between text-white mt-6">
              <p className="text-[14px] not-italic font-normal leading-[140%] text-[#ABBBC2]">
                Discount
              </p>
              <p className="font-semibold leading-[140%]">
                $ {((sum / 10) * 2).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-white mt-4 mb-10">
              <p className="text-[14px] not-italic font-normal leading-[140%] text-[#ABBBC2]">
                Sub-totla{" "}
              </p>
              <p className="font-semibold leading-[140%]">$ {sum.toFixed(2)}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  setPayment(true);
                  setButt(false);
                }}
                className="text-[14px] font-semibold leading-[140%] py-[14px] px-[12px] w-[100%] rounded-lg bg-[#EA7C69] text-white"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {payment && (
        <div className="bg-[rgba(0,_0,_0,_0.70)]   w-full h-full  absolute left-[0] top-[0]   ">
          <>
            <div>
              <div className="w-[410px] h-screen text-[#fff] bg-[#1F1D2B] pl-[24px] pr-[24px] py-[14px] rounded-[16px] absolute top-[0] right-[0]">
                <h1 className="text-[28px] font-semibold leading-[140%] ">
                  Payment
                </h1>
                <p className="font-medium mt-2 text-[#ABBBC2] leading-[140%]">
                  3 payment method available
                </p>
                <div className="Payment-method ">
                  <h2 className="text-[20px] font-semibold mt-6 leading-[140%]">
                    Payment Method
                  </h2>
                  <div className="flex justify-between pr-[38px] mt-4">
                    <div className="text-center border px-[16px] py-[10px] rounded-lg">
                      <IoCardOutline className="w-[24px] h-[24px] block mx-auto text-[#ABBBC2]" />
                      <p className="text-[14px] font-medium leading-[130%] text-[#ABBBC2]">
                        Credit Card
                      </p>
                    </div>
                    <div className="text-center border px-[30px] py-[10px] rounded-lg">
                      <RiPaypalLine className="w-[24px] h-[24px] block mx-auto text-[#ABBBC2]" />
                      <p className="text-[14px] font-medium leading-[130%] text-[#ABBBC2]">
                        Paypal
                      </p>
                    </div>
                    <div className="text-center border px-[34px] py-[10px] rounded-lg">
                      <IoWallet className="w-6 h-6 block mx-auto text-[#ABBBC2]" />
                      <p className="text-[14px] font-medium leading-[130%] text-[#ABBBC2]">
                        
                        Cash
                      </p>
                    </div>
                  </div>
                  <form>
                    <div className="mt-4 ">
                      <label
                        className="text-[14px] font-medium leading-[130%]"
                        htmlFor="name"
                      >
                        Cardholder Name
                      </label>
                      <input
                        id="name"
                        className="mt-2 flex w-[357px] p-[14px] items-start gap-[8px] rounded-lg bg-[#2D303E] border-[1px] border-[solid] border-[var(--Base-Dark-Line,#393C49)] outline-none"
                        type="text"
                        placeholder="Qayumov Orifjon"
                      />
                    </div>

                    <div className="mt-4 mb-6 ">
                      <label
                        className="text-[14px] font-medium leading-[130%]"
                        htmlFor="number"
                      >
                        Card Number
                        <input
                          id="number"
                          className="mt-2 flex w-[357px] p-[14px] items-start gap-[8px] rounded-lg bg-[#2D303E] border-[1px] border-[solid] border-[var(--Base-Dark-Line,#393C49)] outline-none"
                          type="number"
                          placeholder="2564 1421 0897 1244"
                        />
                      </label>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <label className="text-[14px] font-medium leading-[130%]">
                          Expiration Date
                          <input
                            id="data"
                            className="mt-2 w-[172px] flex p-[14px] items-start gap-[8px] rounded-lg bg-[#2D303E] border-[1px] border-[solid] border-[var(--Base-Dark-Line,#393C49)] outline-none"
                            type="number"
                            placeholder="02/2024"
                          />
                        </label>

                        <label className="text-[14px] font-medium leading-[130%]">
                          CVV
                          <input
                            id="cvv"
                            className="mt-2 w-[172px] flex p-[14px] items-start gap-[8px] rounded-lg bg-[#2D303E] border-[1px] border-[solid] border-[var(--Base-Dark-Line,#393C49)] outline-none"
                            type="password"
                            placeholder="***"
                          />
                        </label>
                      </div>
                      <hr className="mt-4 border-[#393C49]" />

                      <div className="flex justify-between mt-4">
                        <label className="text-[14px] font-medium leading-[130%]">
                          Order Type
                          <select
                            onChange={handleSelect}
                            className="mt-2 rounded-lg p-[14px] bg-[#1F1D2B] border-[#393C49] border outline-none block w-[172px] "
                          >
                            <option value="Dine In">Dine In</option>
                            <option value="To Go">To Go</option>
                            <option value="Delivery">Delivery</option>
                          </select>
                        </label>

                        <label className="text-[14px] font-medium leading-[130%]">
                          Table no.
                          <input
                            className="mt-2 w-[172px] flex p-[14px] items-start gap-[8px] rounded-lg bg-[#2D303E] border-[1px] border-[solid] border-[var(--Base-Dark-Line,#393C49)] outline-none"
                            type="number"
                            placeholder="140"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between gap-2 mt-10">
                      <button className="hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold leading-[140%] rounded -lg text-[#EA7C69] border-[#EA7C69] w-[50%] py-[14px] border px">
                        Cancel
                      </button>

                      <button className="hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold leading-[140%] rounded -lg text-[#EA7C69] border-[#EA7C69] w-[50%] border">
                        Confirm Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default Column;
