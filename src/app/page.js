'use client'
import { useState } from "react";

import Navbar from "./components/Navbar";


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
                <h5 className="card-title fw-bolder fs-1">Hello my name is <span className="fst-italic">Chaitrali Shinde</span></h5>
                <br/>
                <p className="card-text text-white-50" >
                I am a Competitive programmer with over 50 contests and has secured rankings in the top 5% medium division contests. Also a hackathon enthusiasts. Coming from a tier 2 college, I have made project achieving top 2% score among college peers. I have skills in software engineering, communication, and quick learning.  
                </p>
                <a href="/About" >More</a>
            </div>
            </div>
            <div className="col-md-4">
            <img src="profile.jpg" width={500} className="img-fluid px-4 border border-5 border-top-0 border-bottom-0" alt="..." />
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}
