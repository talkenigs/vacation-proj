import React, { useContext  } from 'react'
import { VacationsContext} from '../Context/VacationsProvider'
import '../Catalog/Catalog.css'
import { MdDelete } from "react-icons/md"
import './Edit.css'

function EditMode(props) {
    const vacationList = useContext(VacationsContext)

    return (
        <>
             <div className="catalog-container">{vacationList && vacationList.map((vacation) => <div key={vacation.vacation_id} className="vacations-container">
          <div
            className="vac-box"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(3,4,4,0.7371323529411764) 100%), url(${require("../upload/"+vacation.title+".jpg").default})`,
            }}
          >
               <p className="vac-del"><button className="del-btn" onClick={() => props.DeleteVacation(vacation.vacation_id)}><MdDelete /></button></p> 
                {props.isToEdit(vacation.vacation_id, vacation.title, vacation.dates, vacation.price, vacation.country)}
          </div>
          <div className="clear"></div>
        </div>)}</div>
        </>
    )
}

export default EditMode
