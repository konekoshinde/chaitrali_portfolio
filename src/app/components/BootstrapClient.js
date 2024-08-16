'use client';
import { useEffect } from "react";


function BootstrapClient() {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle");
      },[])
  return (
    <div>
      
    </div>
  )
}

export default BootstrapClient
