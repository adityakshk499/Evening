import React from "react";
import Card from "./Card";

const Cards = (bilal) => {
  const { apiData, NoOfParanthaIEatInMorning } = bilal;

  console.log(apiData, NoOfParanthaIEatInMorning);
  return (
    <div>
      <Card
        apiData={apiData}
        NoOfParanthaIEatInMorning={NoOfParanthaIEatInMorning}
      />
    </div>
  );
};

export default Cards;
