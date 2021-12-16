import {useState , useContext} from "react";
import "./header.css";
import SignModal from "./SignModal";
import { FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { UserContext, UserProvider } from "../Context/UserProvider";


export default function Header() {
  let subtitle;
  const [isOpen, setIsOpen] = useState(false);
  const userNow = useContext(UserContext)
  console.log(userNow)

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="header">
        <div className="contact-info">
        <FaEnvelope/>
        <span>vacations@tal-kenigs.com</span>
        <span>|</span>
        <HiLocationMarker/>
        <span>keren hayesod 31, Nesher, 385689</span>
      </div>
      <div className="login">
        <BsPersonCircle/>
        <a onClick={openModal}>Login / Signup</a>
      </div>
      </div>
      <SignModal isOpen={isOpen}
                setIsOpen={setIsOpen}
                subtitle={subtitle}
      >
      </SignModal>
    </>
  );
}
