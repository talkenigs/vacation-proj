import React, { useContext, useState } from 'react'
import '../Catalog/Catalog.css'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import './Edit.css'
import axios from 'axios';
import { VacationsContext} from '../Context/VacationsProvider'
import io from 'socket.io-client'

// const socket = io.connect("http://127.0.0.1:4000")

function Edit() {
    const [isEdit, setIsEdit] = useState(false)
    const [vacationId, setVacationId] = useState()
    const vacationList = useContext(VacationsContext)

    const DeleteVacation = async (vacationId) => {
        await axios.post("http://127.0.0.1:4000/delVacation", {
            vacationId: vacationId
        })
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((response) => {
          console.log(response.data.message);
          window.location.reload()
        }); 
      };

      const franceImg = require("../upload/France.jpg").default

      const editContent = () => {
        return (
          <>
             <button>Add Vacation</button> 
             <div className="catalog-container">{vacationList && vacationList.map((vacation) => <div key={vacation.vacation_id} className="vacations-container">
          <div
            className="vac-box"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(3,4,4,0.7371323529411764) 100%), url(${franceImg})`,
            }}
          >
               <p className="vac-del"><button className="del-btn" onClick={() => DeleteVacation(vacation.vacation_id)}><MdDelete /></button></p> 
                {isToEdit(vacation.vacation_id, vacation.title, vacation.dates, vacation.price, vacation.country)}
          </div>
          <div className="clear"></div>
        </div>)}</div>
          </>
      )
      };

      const isToEdit = (id, title, dates, price, country) => {
        if (id === vacationId) {
         return (
          <form onSubmit={handleSubmit}>
            <div className="vac-row">
          <input type="text" name="title" className="vac-title input" placeholder={title}/>
          <input type="submit" />
          </div>
          <input type="text" name="dates" className="vac-dates-edit input" placeholder={dates}/>
          <input type="text" name="price" className="vac-price-edit input" placeholder={price}/>
          <input type="text" name="country" className="vac-country-edit input" placeholder={country}/>
          </form>
         )
        } else {
         return (
           <>
         <div className="vac-row">
         <p className="vac-title">{title}</p> 
         <p className="vac-edit"><button className="edit-btn" onClick={() => handleEdit(id)}><FaEdit /></button></p> 
         </div>
       <p className="vac-dates-edit">{dates}</p>
       <p className="vac-price-edit">{price}$</p>
       </>
       )}};

      const handleSubmit = (event) => {
        event.preventDefault();
        let title = event.target.title.placeholder
        let dates = event.target.dates.placeholder
        let price = event.target.price.placeholder
        let country = event.target.country.placeholder
        if (event.target.title.value != '') {
        title = event.target.title.value
      }
      if (event.target.dates.value != '') {
        dates = event.target.dates.value
      }
      if (event.target.price.value != '') {
        price = event.target.price.value
      }
      if (event.target.country.value != '') {
        country = event.target.price.value
      }
      updateVacation(vacationId, title, dates, price, country)
      // if (title !=null || dates != null || price != null || country !=null){
      //  updateVacation(vacationId, title, dates, price, country)
      // } else{
      //   setIsEdit(false)
      // }
      }

      const updateVacation = async (id, title, dates, price, country) => {
        await axios.put("http://127.0.0.1:4000/updateVacation", {
          id: id,
          title: title,
          dates: dates,
          price: price,
          country: country
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .then((response) => {
        console.log(response.data.message);
        console.log(response.data.result);
        // window.location.reload()
      });
      }

    const firstContent = () => {
        return (
        <>
           <button>Add Vacation</button> 
           <div className="catalog-container">{vacationList && vacationList.map((vacation) => <div key={vacation.vacation_id} className="vacations-container">
        <div
          className="vac-box"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(3,4,4,0.7371323529411764) 100%), url(${franceImg})`,
          }}
        >
             <p className="vac-del"><button className="del-btn" onClick={() => DeleteVacation(vacation.vacation_id)}><MdDelete /></button></p> 
            <div className="vac-row">
            <p className="vac-title">{vacation.title}</p> 
            <p className="vac-edit"><button className="edit-btn" onClick={() => handleEdit(vacation.vacation_id)}><FaEdit /></button></p> 
            </div>
          <p className="vac-dates-edit">{vacation.dates}</p>
          <p className="vac-price-edit">{vacation.price}$</p>
        </div>
        <div className="clear"></div>
      </div>)}</div>
        </>
    )};

    const handleEdit = (id) => {
      setVacationId(id)
      setIsEdit(true)
    }

    return isEdit? editContent() : firstContent()
}

export default Edit
