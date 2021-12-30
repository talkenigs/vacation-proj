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
  const [newList, setNew] = useState(null)

  props.socket.on("catalog_update", (data) => {
    for (let i in vacationList) {
      if (vacationList[i].vacation_id === data.vacation_id) {
        vacationList[i].title = data.title
        vacationList[i].country = data.copuntry
        vacationList[i].start_date = data.start_date
        vacationList[i].end = data.end
        vacationList[i].price = data.price
      }
    }
    setNew(true)
  })
  
  useEffect(() => {
  }, [newList])

  return (
    <>
      <div className="catalog-header">
        <h1>Top Destionation</h1>
        <hr className="catalog-hr"></hr>
      </div>
      <div className="catalog-container">{vacationList && vacationList.map((vacation) => <div key={vacation.vacation_id} className="vacations-container">
        <div
          className="vac-box"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(3,4,4,0.7371323529411764) 100%), url(${require("../upload/"+vacation.title+".jpg").default})`
          }}
        >
          <Follow vacationId={vacation.vacation_id} isUser = {vacation.isUser ? true : false}/>
          <p className="data vac-title">{vacation.title}</p>
          <p className="data vac-dates">{vacation.start_date.match(/.+?(?=T)/gm)} to {vacation.end_date.match(/.+?(?=T)/gm)}</p>
          <p className="data vac-price">{vacation.price}$</p>
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
