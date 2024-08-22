import React from 'react'
import '../styles/G.css'


export default function Timeline(props){
  return(
  
    <div className='position-relative mx-lg-5 d-flex justify-content-start Card my-2' data-aos="fade-down">
    <div className="card border-5 text-end Temp bg-black" style={{width:"30rem"}} >
    <div className="card-body d-flex flex-column justify-content-between " >
        <a href={props.link} className="card-title imp" target="_blank">{props.title}</a>
        <h6 className="card-subtitle mb-2 text-body-secondary ">{props.subtitle}</h6>
        <br/>
        <br/>
        <p className="imp2">{props.paragraph}</p>
    </div>
    </div>
      <div className="my-auto p-2 imp2">
        <time>{props.Time}</time>
      </div>

    </div>
    
  )
  

}
