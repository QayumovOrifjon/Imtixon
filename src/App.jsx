import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import Column from "./components/Column";

const App = () => {
  const [select, setSelect] = useState(1);
  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    const trues = orders.some((el) => el.id === item.id);
    if (!trues) {
      setOrders([item, ...orders]);
      setOrders((card) => {
        return card.map((product) => {
          if (product.id === item.id) {
            console.log(product.count);
            return {
              ...product,
              count: product.count++,
            };
          }
          return product;
        });
      });
    } else {
      setOrders((card) => {
        return card.map((product) => {
          if (product.id === item.id) {
            console.log(product.count);
            console.log(orders + " addf2");
            return {
              ...product,
              count: product.count++,
            };
          }
          return product;
        });
      });
    }
    console.log(orders);
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders
      .map((order) => {
        if (order.id === id) {
          return {
            ...order,
            count: order.count - 1 > 0 ? order.count - 1 : 0,
          };
        }
        return order;
      })
      .filter((order) => order.count > 0);

    setOrders(updatedOrders);
  };


  // const deleteOrder = (id) => {
  //   // orders dan ma'lum bir buyurtmani olib tashlash
  //   const updatedOrders = orders.filter(order => order.id !== id);
  //   // O'chirilgan buyurtmalarni yangilash
  //   setOrders(updatedOrders);
  // }

  const handleSelect = (e) => {
    const value = e.target.value;
    switch (value) {
      case "Dine In":
        setSelect(1);
        break;
      case "To Go":
        setSelect(2);
        break;
      case "Delivery":
        setSelect(3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex  bg-[#252836] rounded-lg mx-auto w-[100%] h-[100vh]">
      <div>
        {" "}
        <Sidebar />
      </div>
      <div>
        <HomePage
          handleSelect={handleSelect}
          select={select}
          setSelect={setSelect}
          onAdd={addToOrder}
        />
      </div>
      <div>
        <Column
          select={select}
          setSelect={setSelect}
          handleSelect={handleSelect}
          orders={orders}
          deleteOrder={deleteOrder}
          setOrders={setOrders}
        />
      </div>
    </div>
  );
};

export default App;
