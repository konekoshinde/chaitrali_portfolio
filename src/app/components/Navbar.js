'use client';
import { IoChatbubbles } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

export default function Navbar(props) {
  console.log(props.props)
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid fw-bold">
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto mx-5 px-5" >
          <a className="nav-link mx-5 px-5" aria-current="page" href="/" style={{backgroundColor: (props.props==="Home")?"green":"inherit"}}>
            <FaHome  style={{width:50, color:"red"}}/>Home
          </a>
          <a className="nav-link mx-5 px-5" href="/About" style={{backgroundColor: (props.props==="About")?"green":"inherit"}}>
            <FaUser  style={{width:50, color:"red"}}/>About
          </a>
          <a className="nav-link mx-5 px-5" href="/Project" style={{backgroundColor: (props.props==="Project")?"green":"inherit"}}>
            <FaFolderOpen  style={{width:50, color:"red"}}/>Project
          </a>
          <a className="nav-link mx-5 px-5" href="/Contact" style={{backgroundColor: (props.props==="Contact")?"green":"inherit"}}>
            <IoChatbubbles  style={{width:50, color:"red"}}/> Contact
          </a>
          
        </div>
      </div>
    </div>
  </nav>


  )
}


