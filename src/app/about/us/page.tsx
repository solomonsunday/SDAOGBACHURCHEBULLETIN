import React from "react";

const getData = async () => {
  const response = await fetch("https://api.covid19india.org/data.json");
  const data = await response.json();
  return (
    <div>
      <h2>{data[0]?.statewise[35]?.confirmed}</h2>
    </div>
  );
};
export default getData;
