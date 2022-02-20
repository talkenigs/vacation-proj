import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { UserContext } from "../Context/UserProvider";

export default function Follow(props) {
  const [icon, setIcon] = useState(() => (props.isUser ? true : false));
  const userNow = useContext(UserContext)
  const vac_id = props.vacationId

      useEffect(async () => {
        if (userNow.id !== '') {
        await axios.post("/getFollow", {
          vac: vac_id,
          user: userNow.id
      })
    .then(response => {
      if(response.data.res.isExist.length != 0) setIcon(true)
    })
    .catch(error => {
      console.error('There was an error!', error);
    })
  }
  }, [])

  const HandleFollow = async () => {
    console.log(userNow.id)
    let vac_id = props.vacationId;
    if(userNow.id == '') {
      alert("Login or sign up in order to follow vacations")
      return
    }
      await axios.post("/addFollow",{
        vac: vac_id,
        user: userNow.id,
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((response) => {
          console.log(response);
        }); 
    setIcon(icon ? false : true);
  };

  return (
    <>
      <div className="follow-div">
        <button className="follow-btn" onClick={() => HandleFollow()}>
          {icon ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    </>
  );
}
