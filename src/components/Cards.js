import React from "react";
import Card from "./Card";

const Cards = ({ apiData }) => {
  console.log(apiData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 px-5 mx-auto">
      {apiData.map((element, index) => (
        <Card item={element} key={element.id} />
      ))}
    </div>
  );
};

export default Cards;
