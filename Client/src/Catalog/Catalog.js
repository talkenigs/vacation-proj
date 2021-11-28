import { useState } from "react";
import style from './Catalog.css'
import { AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

export default function Catalog() {

  const vacations = [
    {
      title: "Paris",
      country: "France",
      dates: "10/8-20/8",
      price: 520,
      followers: 24,
      image: require('./upload/France.jpg').default
    },
    {
        title: "Haifa",
        country: "Israel",
        dates: "10/8-20/8",
        price: 200,
        followers: 24,
        image: require('./upload/France.jpg').default
      },
      {
        title: "Haifa",
        country: "Israel",
        dates: "10/8-20/8",
        price: 200,
        followers: 24,
        image: require('./upload/France.jpg').default
      }
  ];
  const path = require('./upload/France.jpg').default
  const vacContent = vacations.map(vacation => <div className="vacations-container"><div className="vac-box" style={{backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(3,4,4,0.7371323529411764) 100%), url(${vacation.image })`}}>
      <p className="follow"><AiOutlineHeart /></p>
      <p className="vac-title">{vacation.title}</p>
      <p className="vac-dates">{vacation.dates}</p>
      <p className="vac-price">{vacation.price}$</p>
  </div>
  <div>
  <p className="vac-country"><GoLocation /> {vacation.country}</p>
  <p className="vac-reviews"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> 48 </p> 
  </div>
  </div>

  )

  return (<>
    <div className="catalog-header">
        <h1>Top Destionation</h1>
        <hr className="catalog-hr"></hr>
    </div>
    <div className="catalog-container">
      {vacContent}
      </div>
      </>
      )

}
