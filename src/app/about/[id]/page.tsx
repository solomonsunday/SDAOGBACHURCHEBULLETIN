"use client";
import { useOrderContext } from "@/contexts/orderContext";
import React, { useEffect } from "react";

const AboutWuithId = ({ params }: any) => {
  // const { order, setOrder } = useOrderContext();
  const { order, setOrder } = useOrderContext();

  useEffect(() => {
    setOrder([
      {
        address: "49,adedoyin street",
        amount: 1000,
        dropOfDate: "08/09/2023",
        lastName: "developer",
        firstname: "solomon"
      }
    ]);
  }, []);
  return (
    <main>
      <h1>Trying this out {params.id}</h1>
      <ul>
        {order.map((item) => {
          return (
            <>
              <li key={item.firstname}> {item.address}</li>
              <li>{item.amount}</li>
              <li>{item.dropOfDate}</li>
              <li>{item.firstname}</li>
              <li>{item.lastName}</li>
            </>
          );
        })}
      </ul>
      {/* <pre>{JSON.stringify({ ...order }, null, 5)}</pre> */}
    </main>
  );
};

export default AboutWuithId;
