import React, { useState, useContext, useEffect } from "react";
import { VacationsContext } from "../../Context/VacationsProvider";
// import { SocketContext } from "../Context/Socket"
import VacBox from "./VacBox";

function Edit() {
  const vacationList = useContext(VacationsContext);
  // const socket = useContext(SocketContext)

  return (
    <>
      <div className="catalog-container">
        {vacationList && vacationList.map((vac) => (
          <div key={vac.vacation_id}>
            <VacBox vac={vac} />
          </div>
        ))};
      </div>
    </>
  );
}

export default Edit
