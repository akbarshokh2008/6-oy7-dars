import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-container">
      <h2 className="pb-10 font-bold text-[#394E6A]">
        {users.length} products
      </h2>
      <hr />

      <div className=" grid gap-6 grid-cols-3 pt-4">
        {users.length > 0 &&
          users.map(function (value, index) {
            const BoshHarf = (str) => {
              return str
                .split(" ")
                .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                .join(" ");
            };
            return (
              <div
                key={index}
                className=" flex flex-col items-center  rounded-xl shadow-xl hover:shadow-2xl w-[350px]"
              >
                <img
                  src={value.attributes.image}
                  alt=""
                  className="w-[300px] rounded h-[190px]"
                  height={195}
                />
                <h3 className="text-[#394E6A] font-sans font-bold pt-4">
                  {BoshHarf(value.attributes.title)}.
                </h3>
                <p className="text-[#463AA2] pb-8 pt-1.5">
                  $
                  {value.attributes.price.toString().slice(0, -2) +
                    "." +
                    value.attributes.price.toString().slice(-2)}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
