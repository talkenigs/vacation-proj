import {useState} from "react";
import "./header.css";
import SignModal from "./SignModal";
import { FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";

export default function Header() {
  let subtitle;
  const [isOpen, setIsOpen] = useState(false);


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
