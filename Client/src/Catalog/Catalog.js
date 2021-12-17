import { useState, useEffect, useContext } from "react";
import "./Catalog.css";
import { GoLocation } from "react-icons/go";
import { AiFillStar, AiOutlineEdit } from "react-icons/ai";
import Follow from "./Follow";
import axios from "axios";
import { UserContext } from "../Context/UserProvider";
import GetVacations from "./GetVacations";

export default function Catalog() {
  const userNow = useContext(UserContext)
  const [vacationList, setList] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get("http://127.0.0.1:4000/getvacations", {
        params: {
          user: userNow.id
        }
      });
      let userList = response.data.userList.listUser
      let allList = response.data.vacList.listAll
      if (userList.length > 0) {
      for (let i in userList) {
      for (let j in allList) {
        if(allList[j].vacation_id === userList[i].vacation_id) {
          let tempVac = allList[j]
          tempVac.isUser = true
        allList.splice(j, 1)
        allList.splice(0, 0, tempVac)
            }
      }}}
      setList(allList);
      };
    fetchList();
  });

  const franceImg = require("../upload/France.jpg").default

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
