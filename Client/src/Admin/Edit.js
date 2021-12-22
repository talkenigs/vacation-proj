import React, { useContext, useState } from 'react'
import '../Catalog/Catalog.css'
import { FaEdit } from "react-icons/fa"
import './Edit.css'
import axios from 'axios';
import { VacationsContext} from '../Context/VacationsProvider'
import FirstContent from './FirstContent'
import EditMode from './EditMode'
import AddVacation from './AddVacation';



function Edit(props) {
    const [isEdit, setIsEdit] = useState(false)
    const [vacationId, setVacationId] = useState()
    const vacationList = useContext(VacationsContext)
    const [isOpen, setIsOpen] = useState(false);
    let subtitle;

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
      //   props.socket.emit("update_catalog", {
      //     id: id,
      //     title: title,
      //     dates: dates,
      //     price: price,
      //     country: country
      // })
        // window.location.reload()
      });
      }

      const socketHandle = () => {
        let data = "dataTemp"
        props.socket.emit("update_catalog", data)
      }   

    const firstContent = () => {  
        return (
            <FirstContent socketHandle={socketHandle} DeleteVacation={DeleteVacation} handleEdit={handleEdit} />
    )};

    const editContent = () => {
      return (
        <EditMode vacationToEdit={vacationId} DeleteVacation={DeleteVacation} isToEdit={isToEdit} />      
    )};

    const handleEdit = (id) => {
      setVacationId(id)
      setIsEdit(true)
    }

    const openModal = () => {
      setIsOpen(true)
    }

    return (
      <>
      <button onClick={openModal}>Add Vacation</button>
      <AddVacation isOpen={isOpen}
                setIsOpen={setIsOpen}
                subtitle={subtitle}
                >
      </AddVacation>
      {isEdit? editContent() : firstContent()}
      </>
    )
}

export default Edit
