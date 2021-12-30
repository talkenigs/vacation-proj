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

      const isToEdit = (id, title, start_date, price, country, end_date) => {
        if (id === vacationId) {
         return (
          <form onSubmit={handleSubmit}>
            <div className="vac-row">
          <input type="text" name="title" className="data vac-title input" placeholder={title}/>
          <input type="submit" />
          </div>
          <input type="text" name="startDate" className="data vac-dates-edit input" placeholder={start_date.match(/.+?(?=T)/gm)}/>
          <input type="text" name="endDate" className="data vac-dates-edit input" placeholder={end_date.match(/.+?(?=T)/gm)}/>
          <input type="text" name="price" className="data vac-price-edit input" placeholder={price}/>
          <input type="text" name="country" className="data vac-country-edit-inp input" placeholder={country}/>
          </form>
         )
        } else {
         return (
           <>
         <div className="vac-row">
         <p className="data vac-title">{title}</p> 
         <p className="data vac-edit"><button className="edit-btn" onClick={() => handleEdit(id)}><FaEdit /></button></p> 
         </div>
       <p className="data vac-dates-edit">{start_date.match(/.+?(?=T)/gm)} to {end_date.match(/.+?(?=T)/gm)}</p>
       <p className="data vac-price-edit">{price}$</p>
       <p className="data vac-country-edit-inp">{country}</p>
       </>
       )}};

      const handleSubmit = (event) => {
        event.preventDefault();
        let title = event.target.title.placeholder
        let start_date = event.target.startDate.placeholder
        let end_date = event.target.endDate.placeholder
        let price = event.target.price.placeholder
        let country = event.target.country.placeholder
        if (event.target.title.value != '') {
        title = event.target.title.value
      }
      if (event.target.startDate.value != '') {
        start_date = event.target.startDate.value
      }
      if (event.target.endDate.value != '') {
        end_date = event.target.endDate.value
      }
      if (event.target.price.value != '') {
        price = event.target.price.value
      }
      if (event.target.country.value != '') {
        country = event.target.price.value
      }
      console.log(start_date, price, country, end_date)
      updateVacation(vacationId, title, start_date, price, country, end_date)
      }

      const updateVacation = async (id, title, start_date, price, country, end_date) => {
        await axios.put("http://127.0.0.1:4000/updateVacation", {
          id: id,
          title: title,
          start_date: start_date,
          price: price,
          country: country,
          end_date: end_date
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .then((response) => {
        setIsEdit(false)
        props.socket.emit("update_catalog", {
          vacation_id: id,
          country: country,
          title: title,
          start_date: start_date,
          end_date: end_date,
          price: price
      })
      });
      }

    const firstContent = () => {  
        return (
            <FirstContent socket={props.socket} DeleteVacation={DeleteVacation} handleEdit={handleEdit} />
    )};

    const editContent = () => {
      return (
        <EditMode DeleteVacation={DeleteVacation} isToEdit={isToEdit} />      
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
      {isEdit ? editContent() : firstContent()}
      </>
    )
}

export default Edit
