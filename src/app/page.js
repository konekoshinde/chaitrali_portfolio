'use client'
import { useState } from "react";

import Navbar from "./components/Navbar";
import "./styles/G.css"

export default function Home() {
  
  
  
  return (
    <div>
    <Navbar props="Home"/>
    <div>

    </div>
    <div >
        <div className="card m-5 p-5" >
        <div className="row g-0">
            <div className="col-md-8">
            <div className="card-body m-md-5">
                <h5 className="card-title fw-bolder fs-2">Hello my name is <span className="fst-italic imp">Chaitrali Shinde</span></h5>
                <br/>
                <p className="card-text text-white-50" >
                I am a Competitive programmer with over 50 contests and has secured rankings in the top 5% medium division contests. Also a hackathon enthusiasts. Coming from a tier 2 college, I have made project achieving top 2% score among college peers. I have skills in software engineering, communication, and quick learning.  
                </p>
                <br/>
                <br/>
                <a className=" me-5 bg-white p-2" href="https://drive.google.com/file/d/16IsmkAbQq1A68oo_CF_2xOGrHwcB5up2/view?usp=drive_link" target="_blank">Resume</a>
                <a href="/About" >More</a>
            </div>
            </div>

            <div className="col-md-4">
            <img src="profile.jpg" width={500} className="img-fluid glow" alt="..." />
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}
