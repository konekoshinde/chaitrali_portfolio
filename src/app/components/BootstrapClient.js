'use client';
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function BootstrapClient() {
    

    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle");
        AOS.init();
      },[])
   
    
  return (
    <div>
      {/* <button onClick={()=>setColor((color==="black")?"white":"black")}>change</button> */}
    </div>
  )
}

export default BootstrapClient
