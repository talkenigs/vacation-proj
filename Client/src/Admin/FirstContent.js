import React, { useContext, useEffect, useState } from 'react'
import { VacationsContext} from '../Context/VacationsProvider'
import '../Catalog/Catalog.css'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import './Edit.css'

function FirstContent(props) {
    const vacationList = useContext(VacationsContext)
    const [newList, setNew] = useState(null)

    props.socket.on('catalog_update', (data) => {
      for (let i in vacationList) {
        if (vacationList[i].vacation_id === data.vacation_id) {
          vacationList[i].title = data.title
          vacationList[i].country = data.copuntry
          vacationList[i].dates = data.dates
          vacationList[i].price = data.price
        }
      }
      setNew(true)
    })

    useEffect(() => {
    }, [newList])

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
            <div className="vac-row">
            <p className="vac-title">{vacation.title}</p> 
            <p className="vac-edit"><button className="edit-btn" onClick={() => props.handleEdit(vacation.vacation_id)}><FaEdit /></button></p> 
            </div>
          <p className="vac-dates-edit">{vacation.dates}</p>
          <p className="vac-price-edit">{vacation.price}$</p>
        </div>
        <div className="clear"></div>
      </div>)}</div>
        </>
    )};

export default FirstContent
