import axios from 'axios'
import { useState } from "react";
import ReactDom from "react-dom";
import Modal from "react-modal";
import SignModalStyle from "./SignModalStyle.css";

export default function SignModal({ isOpen, subtitle, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(true)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState('')

  const user = { firstName: firstName, lastName: lastName, username: username, password: password };

  if (!isOpen) return null;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addUser = async () => {
    // await axios.post("http://127.0.0.1:4000/create", {
    //   firstName: firstName, lastName: lastName, username: username, password: password  
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    //  await axios.post("http://127.0.0.1:4000/create", {firstName: firstName, lastName: lastName, username: username, password: password})
    // .then(res=> {
    //   console.log(res);
    //   alert("successful insert");
    // }).catch(err =>{
    //   console.log(err)
    // });
      await fetch("http://127.0.0.1:4000/create", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',  
      body: JSON.stringify({firstName: firstName, lastName: lastName, username: username, password: password})
    })
    .then(response => response.json())
    .catch(error => {
      console.error('There was an error!', error);
  })
  .then(response => {
    console.log(response)
    if (response.err) {
      {setMessage(<p style={{color: "red"}}>{response.message}</p>)}
    }
    else{{setMessage(<p style={{color: "black"}}>{response.message}</p>)}
    }
  });
  }

  // const test = async () => {
  //   await fetch("http://127.0.0.1:4000/test", {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer',  
  //     body: JSON.stringify({test: "talll"})
  //   })
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error('There was an error!', error);
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // }

  

  function logSwitch() {
      if (isLogin === false) {
      return (
        <form className="form-signup">
        <label for="firstName">first Name</label>
        <input className="firstName" type="text" name="firstName" onChange={(event) => {setFirstName(event.target.value)}}/><br></br>
        <label for="lastName">Last name</label>
        <input className="lastName" type="text" name="lastName" onChange={(event) => {setLastName(event.target.value)}}/><br></br>
        <label for="username">Username</label>
        <input className="fullName" type="text" name="username" onChange={(event) => {setUsername(event.target.value)}}/><br></br>
        <label for="password">Password</label>
        <input className="fullName" type="text" name="password" onChange={(event) => {setPassword(event.target.value)}}/><br></br>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">
          <span className="ui"></span>Keep me signed in
        </label>
        <div className="btn-animate">
        <a className="btn-signin" onClick={() => addUser()}>Sign up</a>
        </div>
        <div>
        {message}
          </div>
        {/* <div className="btn-animate">
        <a className="btn-signin" onClick={() => test()}>test</a>
        </div> */}
      </form>
      )} else {
          return (
        <form className="form-login-active" action="" method="post" name="form">
        <label for="username">Username</label>
        <input
          className="form-styling"
          type="text"
          name="username"
          placeholder=""
        />
        <label for="password">Password</label>
        <input
          className="form-styling"
          type="text"
          name="password"
          placeholder=""
        />
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">
          <span className="ui"></span>Keep me signed in
        </label>
        <div className="btn-animate">
        <a className="btn-signin">login</a>
        </div>
      </form>
      )}
  }

  return (
    <Modal
      className="container"
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
    >
      <div className="sign-frame">
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button onClick={closeModal}>close</button>
        <div className="sign-nav">
          <ul className="sign-links">
            <li className="login-active">
              <a className="login-btn" onClick={()=>setIsLogin(true)}>login</a>
            </li>
            <li className="signup-inactive">
             <a className="sign-btn" onClick={()=>setIsLogin(false)}>Sign up</a>
            </li>
          </ul>
        </div>
        {logSwitch()}
      </div>
    </Modal>
  );
}
