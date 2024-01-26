"use client";
import { useGlobalContaxt } from "@/contexts/exampleContext";
import React, { useEffect } from "react";

const Index = () => {
  const { data, setData, setUserId, userId } = useGlobalContaxt();

  useEffect(() => {
    setUserId("2");
    setData([
      {
        firstName: "Tim"
      },
      {
        firstName: "michael"
      },
      {
        firstName: "solomon"
      }
    ]);
  });

  return (
    <main>
      <div>
        <p>User Id: {userId}</p>
        <p>First Name: </p>
        <ul>
          {data.map((item, i) => (
            <li key={i}>{item?.firstName} </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Index;
