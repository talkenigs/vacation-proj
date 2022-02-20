import axios from 'axios'
import { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import "./SignModalStyle.css";
import { UserContext } from "../Context/UserProvider";


export default function SignModal({ isOpen, subtitle, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(true)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState('')
  const [userNow, setUserNow] = useState(useContext(UserContext))

  useEffect(() => {
    localStorage.setItem('userNow', JSON.stringify(userNow))
    }, [userNow]);

  if (!isOpen) return null;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addUser = async () => {
      await axios.post("/create", {
        firstName: firstName, 
        lastName: lastName, 
        username: username, 
        password: password
      })
    .then(response => {
      console.log(response)
        setMessage(<p style={response.data.err? {color: "red"}: {color: "black"}}>{response.data.message}</p>)
        setUserNow({id: response.data.id, username: username})
      }
    ).catch(error => {
      console.error('There was an error!', error);
  });
  }

  const login = async () => {
    await axios.get("/login", {
      params: {
        username: username, 
        password: password
      }
    })
    .then(response => {
      if(response.data.err){
        {setMessage(<p style={{color: "red"}}>{response.data.message}</p>)}
      } else {
        setUserNow({id: response.data.userId, username: response.data.username})
        localStorage.setItem('token', response.data.token)
        window.location.reload()
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
  })
}
  
  function logSwitch() {
      if (isLogin === false) {
      return (
        <form className="form-signup">
        <label for="firstName" style={{color: "#efefef"}}>First Name</label>
        <input className="sign-input" type="text" name="firstName" onChange={(event) => {setFirstName(event.target.value)}}/><br></br>
        <label for="lastName" style={{color: "#efefef"}}>Last name</label>
        <input className="sign-input" type="text" name="lastName" onChange={(event) => {setLastName(event.target.value)}}/><br></br>
        <label for="username" style={{color: "#efefef"}}>Username</label>
        <input className="sign-input" type="text" name="username" onChange={(event) => {setUsername(event.target.value)}}/><br></br>
        <label for="password" style={{color: "#efefef"}}>Password</label>
        <input className="sign-input" type="text" name="password" onChange={(event) => {setPassword(event.target.value)}}/><br></br>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">
          <span className="ui"></span>Keep me signed in
        </label>
        <div className="btn-animate">
        <a className="btn-signin" onClick={() => addUser()}>Sign up</a>
        </div>
        <div style={{marginTop:"-10px"}}>
        {message}
          </div>
      </form>
      )} else {
          return (
        <form className="form-signup" action="" method="post" name="form">
        <label style={{color: "#efefef"}} for="username">Username</label>
        <input
          className="sign-input"
          type="text"
          name="username"
          placeholder=""
          onChange={(event) => setUsername(event.target.value)}
        /><br></br>
        <label style={{color: "#efefef"}} for="password">Password</label>
        <input
          className="sign-input"
          type="text"
          name="password"
          placeholder=""
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">
          <span className="ui"></span>Keep me signed in
        </label>
        <div className="btn-animate">
        <a className="btn-signin" onClick={() => login()}>Login</a>
        </div>
        <div>
          {message}
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
        <button onClick={closeModal} className='close-btn'>close</button>
        <div className="sign-nav">
              <button className="login-btn" onClick={()=>{setIsLogin(true); setMessage('')}}>Login</button>
             <button className="login-btn" onClick={()=>{setIsLogin(false); setMessage('')}}>Sign up</button>
        </div>
        {logSwitch()}
      </div>
    </Modal>
  );
}
