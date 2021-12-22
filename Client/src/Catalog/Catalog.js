import { useState, useEffect, useContext } from "react";
import "./Catalog.css";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import Follow from "./Follow";
import { UserContext } from "../Context/UserProvider";
import { VacationsContext} from '../Context/VacationsProvider'

export default function Catalog(props) {
  const userNow = useContext(UserContext)
  const vacationList = useContext(VacationsContext)
  const franceImg = require("../upload/France.jpg").default
  const [socketDisplay, setSocketDisplay] = useState("TEMP")
  
  // props.socket.on("update_catalog", (data) => {
  //   console.log("ASas")
  //   setSocketDisplay(data)
  // })

  return (
    <>
    {socketDisplay}
      <div className="catalog-header">
        <h1>Top Destionation</h1>
        <hr className="catalog-hr"></hr>
      </div>
      <div className="catalog-container">{vacationList && vacationList.map((vacation) => <div key={vacation.vacation_id} className="vacations-container">
        <div
          className="vac-box"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(3,4,4,0.7371323529411764) 100%), url(${franceImg})`,
          }}
        >
          <Follow vacationId={vacation.vacation_id} isUser = {vacation.isUser ? true : false}/>
          <p className="vac-title">{vacation.title}</p>
          <p className="vac-dates">{vacation.dates}</p>
          <p className="vac-price">{vacation.price}$</p>
        </div>
        <div className="vac-details">
          <p className="vac-country">
            <GoLocation /> {vacation.country}
          </p>
          <p className="vac-reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar /> 48{" "}
          </p>
        </div>
        <div className="clear"></div>
      </div>)}</div>
  </>
  );
}
