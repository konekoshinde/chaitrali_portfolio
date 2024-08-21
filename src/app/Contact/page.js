import React from 'react'
import Navbar from '../components/Navbar'
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import "../styles/G.css"

function page() {
  return (
    <div>
      <Navbar props="Contact"/>
 
        <h2 className='imp m-5'>Contact Me</h2>
        

        <div className="d-flex flex-md-row flex-column mb-3 justify-content-around">
            <div data-aos="flip-left" data-aos-duration="2000" className="card m-5 p-2 Temp border-5 glow bg-black text-white " style={{ width: "18rem" }}>
                <div className="card-body text-center ">
                    <MdAddCall style={{width:50,height:50, color:"rgb(242, 242, 85)"}}  className='my-2'/>
                    <h5 className="card-subtitle mb-2 imp2">Mobile</h5>
                    <p>+917710940176</p>
                    <p className='text-white-50'>Contact me when in urgency</p>
                </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className="card m-5 p-2 Temp border-5 glow bg-black text-white" style={{ width: "18rem" }}>
                <a href="https://www.linkedin.com/in/chaitrali-shinde-6b495b25b/" className="card-body text-center">
                <FaLinkedin style={{width:50,height:50, color:"rgb(242, 242, 85)"}} className='my-2'/>
                    <h5 className="card-subtitle mb-2 imp2">LinkedIn</h5>
                    <p> chaitrali-shinde-6b495b25b</p>
        
                </a>
                <p className='text-white-50'>I appreciate messaging on LinkedIn for hiring</p>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className="card m-5 p-2 Temp border-5 glow bg-black text-white" style={{ width: "18rem" }}>
                    <a className="card-body text-center" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chaitralis2004@gmail.com" target="_blank">
                    <SiGmail style={{width:50,height:50, color:"rgb(242, 242, 85)"}} className='my-2'/>
                    <h5 className="card-subtitle mb-2 imp2">Mail</h5>
                    <p>chaitralis2004@gmail.com</p>
                </a>
                <p className='text-white-50'>Click on Icon to write a mail to me I will reply to it as soon as possible</p>
            </div>
        </div>

      
    </div>
  )
}

export default page
