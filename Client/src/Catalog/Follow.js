import { useState, useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { UserContext } from "../Context/UserProvider";

export default function Follow(props) {
  const [icon, setIcon] = useState(() => (props.isUser ? true : false));
  const userNow = useContext(UserContext)

  //     useEffect(async () => {
  //       if (icon === true) {
  //       const vac_id = props.vacationId
  //       await fetch("http://127.0.0.1:4000/follow", {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer',
  //     body: JSON.stringify({vac: vac_id, user: userNow().id})
  //   })
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error('There was an error!', error);
  // })
  // .then(response => {
  //   console.log(response)
  //   })};
  //     }, [icon])

  const HandleFollow = async () => {
    let vac_id = props.vacationId;
      await fetch("http://127.0.0.1:4000/addFollow", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ vac: vac_id, user: userNow.id }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((response) => {
          console.log(response);
        }); 
    setIcon(icon ? false : true);
  };

  return (
    <>
      <div className="follow-div">
        <button className="follow-btn" onClick={() => HandleFollow()}>
          {icon ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    </>
  );
}
