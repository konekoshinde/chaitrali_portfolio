'use client'
import { useState } from "react";


import "./styles/G.css"
import Info from "./components/Info";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";

export default function Home() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top my-2" style={{height:"2rem"}}>
        <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="navbarOffcanvasLg"
        aria-labelledby="navbarOffcanvasLgLabel"
        >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close m-0 "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-around flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Home">
              <FaHome style={{width:50}} className="imp"/>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
              <FaUser style={{width:50}} className="imp"/>About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Project">
              <FaFolderOpen  style={{width:50}} className="imp"/>Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
              <IoChatbubble style={{width:50}} className="imp"/>Contact
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <a id="Home">
    <Info/>
    </a>

    <a id="About">
    <About/>
    </a>
    <a id="Project">
    <Project/>
    </a>
    <a id="Contact">
    <Contact/>
    </a>

    </div>
  );
}
