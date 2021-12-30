import React, { useState } from "react";
import Modal from "react-modal";
import "./addVacation.css";
import axios from "axios";

function AddVacation({ isOpen, subtitle, setIsOpen }) {
    const [title, setTitle] = useState()
    const [country, setCountry] = useState()
    const [start_date, setStart] = useState()
    const [end_date, setEnd] = useState()
    const [price, setPrice] = useState()
  // function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }

  function closeModal() {
    setIsOpen(false);
  }

  const submitVacation = async () => {
      await axios.post("http://127.0.0.1:4000/addVacation", {
          title: title,
          country: country,
          start_date: start_date,
          price: price,
          end_date: end_date
      }).then((res) => {
          console.log(res)
      })
  }

  return (
    <Modal
      className="container"
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
    >
      <div className="add-frame">
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2> */}
        <button onClick={closeModal}>close</button>
        <form className="form-add" onSubmit={submitVacation}>
            <div className="input-div">
          <label for="title">Title:</label>
          <input className="title" type="text" name="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          </div>
          <div className="input-div">
          <label for="Country">Country:</label>
          <input className="Country" type="text" name="Country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
          </div>
          <div className="input-div">
          <label for="startDate">Start date:</label>
          <input className="Dates" type="text" name="startDate"
            onChange={(event) => {
              setStart(event.target.value);
            }}
          />
          </div>
          <div className="input-div">
          <label for="endDate">End date:</label>
          <input className="Dates" type="text" name="endDate"
            onChange={(event) => {
              setEnd(event.target.value);
            }}
          />
          </div>
          <div className="input-div">
          <label for="Price">Price:</label>
          <input className="Price" type="text" name="Price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          </div>
          <br></br>
            <input type="submit"/>
        </form>
      </div>
    </Modal>
  );
}

export default AddVacation;
