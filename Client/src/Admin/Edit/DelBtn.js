import React from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md"
// import style from './Edit.css'

function DelBtn(props) {

    const delVac = async (vacId) => {
        await axios.post("/delVacation", {
            vacationId: vacId
        })
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((response) => {
          console.log(response.data.message);
          window.location.reload()
        }); 
      };

    return (
        <>
            <p className="vac-del"><button className="del-btn" onClick= {() => delVac(props.vac.vacation_id)
              }><MdDelete /></button></p> 
        </>
    )
}

export default DelBtn
