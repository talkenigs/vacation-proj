import React, {useState, useContext} from 'react'
import { SocketContext } from "../../Context/Socket"
import axios from 'axios'

function EditBox(props) {
  const [vac, setNewVac] = useState(props.vac)
  const socket = useContext(SocketContext)

    const handleSubmit = (event) => {
        event.preventDefault();
            
        let newVac = {
          id: props.vac.vacation_id,
          title: event.target.title.placeholder,
          start_date: event.target.start_date.placeholder,
          end_date: event.target.end_date.placeholder,
          price: event.target.price.placeholder,
          country: event.target.country.placeholder
        }

      if (event.target.title.value !== '') newVac.title = event.target.title.value
      if (event.target.start_date.value !== '') newVac.start_date = event.target.start_date.value
      if (event.target.end_date.value !== '') newVac.end_date = event.target.endDate.value
      if (event.target.price.value !== '') newVac.price = event.target.price.value
      if (event.target.country.value !== '') newVac.country = event.target.price.value

      props.setIsEdit(false)
      update(newVac)
      }

      const update = async (vac) => {
        await axios.put("/updateVacation", {vac})
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .then(() => {
          vac.start_date += "T21:00:00.000Z"
          vac.end_date += "T21:00:00.000Z"
        socket.emit("update_catalog", vac)
      })};

    return( 
          <>
          <form onSubmit={handleSubmit}>
                 <div className="vac-row">
               <input type="text" name="title" className=" vac-title input" placeholder={props.vac.title}/>
               <input type="submit" />
               </div>
               <input type="text" name="start_date" className="vac-dates-edit input" placeholder={props.vac.start_date.match(/.+?(?=T)/gm)}/>
               <input type="text" name="end_date" className=" vac-dates-edit input" placeholder={props.vac.end_date.match(/.+?(?=T)/gm)}/>
               <input type="text" name="price" className=" vac-price-edit input" placeholder={props.vac.price}/>
               <input type="text" name="country" className=" vac-country-edit-inp input" placeholder={props.vac.country}/>
               </form>
            </>
    );
}

export default EditBox
