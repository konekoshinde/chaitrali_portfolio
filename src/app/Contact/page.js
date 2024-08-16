import React from 'react'
import Navbar from '../components/Navbar'
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

function page() {
  return (
    <div>
      <Navbar props="Contact"/>
      <div className='m-5'>
        <h1>Contact Me</h1>
        <div className="my-2" style={{text:"green",backgroundColor:"green",width: "200px", height: "5px" }}></div>
        
        <div style={{text:"green",backgroundColor:"green",width: "100px", height: "5px" }}></div>
      </div>

        <div className="d-flex flex-md-row flex-column mb-3 justify-content-around">
            <div className="card m-5 p-2" style={{ width: "18rem" }}>
                <div className="card-body text-center ">
                    <MdAddCall style={{width:50,height:50, color:"red"}}  className='my-2'/>
                    <h5 className="card-subtitle mb-2 text-body-secondary" >Mobile</h5>
                    <p>+917710940176</p>
                </div>
            </div>
            <div className="card m-5 p-2" style={{ width: "18rem" }}>
                <a href="https://www.linkedin.com/in/chaitrali-shinde-6b495b25b/" className="card-body text-center">
                <FaLinkedin style={{width:50,height:50, color:"red"}} className='my-2'/>
                    <h5 className="card-subtitle mb-2 text-body-secondary">LinkedIn</h5>
                    <p> chaitrali-shinde-6b495b25b</p>
                </a>
            </div>
            <div className="card m-5 p-2" style={{ width: "18rem" }}>
                    <a className="card-body text-center" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chaitralis2004@gmail.com" target="_blank">
                    <SiGmail style={{width:50,height:50, color:"red"}} className='my-2'/>
                    <h5 className="card-subtitle mb-2 text-body-secondary">Mail</h5>
                    <p>chaitralis2004@gmail.com</p>
                </a>
            </div>
        </div>

      
    </div>
  )
}

export default page
