import React, {useEffect, useState, useContext} from 'react'
import Style from './Edit.css'
import EditBtn from './EditBtn'
import EditBox from './EditBox'
import { SocketContext } from "../../Context/Socket"
import DelBtn from './DelBtn'

function VacBox(props) {
  const [isEdit, setIsEdit] = useState(false)
  const [vac, setNewVac] = useState(props.vac)
  const socket = useContext(SocketContext)

  socket.on('catalog_update', (data) => {
      if(vac.vacation_id == data.id){
        setNewVac(data)
    }
  })

  const box = () => {
    return(
      <>
          <div className="vac-row">
                  <p className="data vac-title">{vac.title}</p>
                  <EditBtn vac={vac} setIsEdit={setIsEdit}/>
                </div>
                <DelBtn vac={vac} />
                <p className="data vac-dates-edit">
                  {vac.start_date.match(/.+?(?=T)/gm)} to{" "} <br></br>
                  {vac.end_date.match(/.+?(?=T)/gm)}
                </p>
                <p className="data vac-price-edit">{vac.price}$</p>
          </>
    )};

  return (
      <>
      <div
          className="vac-box"
          style={{
            backgroundImage: 
              `linear-gradient(180deg,
              rgba(255,255,255,0) 0%, 
              rgba(3,4,4,0.7371323529411764) 100%), 
              url(${require("../../upload/"+props.vac.title+".jpg").default})`,
          }}> 

        {isEdit ? <EditBox vac={props.vac} setIsEdit={setIsEdit}/> : box()}

        {!isEdit ? <p className="data vac-country-edit" style={{color: 'black'}}>{props.vac.country}</p> : null}

        </div>
      </>
  )
}

export default VacBox
