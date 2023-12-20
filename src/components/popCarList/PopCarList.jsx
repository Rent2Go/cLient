import React from "react";
import car1 from "../../../src/assets/car_1.png";
import car2 from "../../../src/assets/car_2.png";
import car3 from "../../../src/assets/car_3.png";
import car4 from "../../../src/assets/car_4.png";
import car5 from "../../../src/assets/car_5.png";
import car6 from "../../../src/assets/car_6.png";
import car7 from "../../../src/assets/car_7.png";
import car8 from "../../../src/assets/car_8.png";

import "./popcarlist.css";

const CarCard = ({ car }) => {
  return (
    <div className="rent2go__popular-content_card">
      <img src={car.imgUrl} alt={car.name} />
      <div className="rent2go__popular-content_card-text_block">
        <div className="left__text">
          <h3>{car.name}</h3>
          <p>{car.description}</p>
        </div>
        <div className="right__text">
          <h3>${car.price}</h3>
          <p>${car.price}</p>
        </div>
      </div>
    </div>
  );
};

const CarList = () => {
  const cars = [
    {
      id: 1,
      name: "Araç 1",
      description: "Açıklama 1",
      price: 19999,
      imgUrl: car1,
    },
    {
      id: 2,
      name: "Araç 2",
      description: "Açıklama 2",
      price: 29999,
      imgUrl: car2,
    },
    {
      id: 3,
      name: "Araç 3",
      description: "Açıklama 3",
      price: 39999,
      imgUrl: car3,
    },
    {
      id: 4,
      name: "Araç 3",
      description: "Açıklama 3",
      price: 39999,
      imgUrl: car4,
    },
    {
      id: 5,
      name: "Araç 3",
      description: "Açıklama 3",
      price: 39999,
      imgUrl: car5,
    },
    {
      id: 6,
      name: "Araç 3",
      description: "Açıklama 3",
      price: 39999,
      imgUrl: car6,
    },
    {
      id: 7,
      name: "Araç 3",
      description: "Açıklama 3",
      price: 39999,
      imgUrl: car7,
    },
    {
      id: 8,
      name: "Araç 3",
      description: "Açıklama 3",
      price: 39999,
      imgUrl: car8,
    },
  ];

  return (
    <div className="rent2go__popular-content_card-block">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

const PopCarList = () => {
  return <CarList />;
};

export default PopCarList;
