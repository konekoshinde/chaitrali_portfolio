import React from 'react'

import Timeline from "./Timeline";
import Progress from './Progress'
import ProgressRounded from './ProgressRounded'
import { FaCrown } from "react-icons/fa";
export default function About() {
  return (
    <div className='p-lg-5 m-lg-5 border border-2 border-black-50 rounded mb-5 '>
      
      <div className='d-flex flex-md-row flex-column justify-content-between'>
        <ul style={{width:"20rem"}} className=''><h2 className="imp mt-5">Technical Skills</h2>
        <Progress skillName="NextJS" Number="75"/>
        <Progress skillName="ReactJs" Number="70"/>
        <Progress skillName="C++" Number="70"/>
        <Progress skillName="MongoDB" Number="75"/>
        <Progress skillName="NodeJs" Number="70"/>
        <Progress skillName="MySql" Number="85"/>
        <Progress skillName="Python" Number="50"/>
        </ul>
        
        <div className='d-flex flex-column justify-content-evenly mx-2' style={{width:"50%"}}>
          <div className="d-flex flex-row justify-content-between"  data-aos-duration="2000" data-aos="flip-left">
          <div  className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Machine Learning</div>
          <div  className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Github</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Docker</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Software Engg</div>
          </div>
          <div className="d-flex flex-row justify-content-between"  data-aos-duration="2000" data-aos="flip-right">
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>operating system</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Kafka</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>OOPS</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Compiler design</div>
          </div>
          <div className="d-flex flex-row justify-content-between"  data-aos-duration="2000" data-aos="flip-left">
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>computer network</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Latex</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Html/CSS</div>
          <div className='m-2 p-1 p-md-2 bg-secondary text-white text-center' style={{width:"30rem"}}>Tailwind CSS</div>
          </div>
        </div>
      </div>

      <div className='d-flex flex-column flex-md-row justify-content-between'  >
            <ProgressRounded skillName="Communication" Number="70" style={{}} />
            <ProgressRounded skillName="Learning" Number="80" style={{}} />
            <ProgressRounded skillName="TeamWork" Number="70" style={{}} />
            <ProgressRounded skillName="Implementation" Number="80" style={{}} />
          </div>
          <br/>
          <br/>
          <br/>
      <ul className='ps-4 pe-2'><h2 className="imp">Achievements</h2>
          <div className=' text-white-50'><FaCrown className='imp mx-2'/><span className='imp2'>Semi Finalist</span> at <span className='imp2'>Google Girls Hackathon 2024 </span>top 1% among 20k participants.</div>
          <div className=' text-white-50'><FaCrown className='imp mx-2'/>Ranked <span className='imp2'>210 globally</span> in Codechef Starters 145 Div 2</div>
          <div className=' text-white-50'><FaCrown className='imp mx-2'/>Secured <span className='imp2'>621 among 45k candidates</span> on Codeforces Round 918 Div 4</div>
          <div className=' text-white-50'><FaCrown className='imp mx-2'/>Team ranked <span className='imp2'>6th among 900</span> groups for ZS tech challenge based on score.</div>
          <div className=' text-white-50'><FaCrown className='imp mx-2'/><span className='imp2'>Codeforces</span> (ratings 1381),<span className='imp2'> Codechef</span> (ratings 1802) global rank: 5907, <span className='imp2'>Leetcode</span> (approx. 250 problems)</div>
        </ul>
      <br/>
      <br/>
      <br/>
      <div>
        <ul><h2 className="imp">Education</h2></ul>
        <div className="container">
        <div className="d-flex flex-column justify-content-around m-3">
        
        <Timeline
            title="Indian Institute of Information Technology, Pune"
            subtitle="BTECH CSE"
            link="#"
            paragraph="CGPA:8.02"
            Time="2021-2025"
        />
        <Timeline
            title="NES Ratnam College of Arts, Science and Commerce (Mumbai)"
            subtitle="Higher secondary eduction"
            link="#"
            paragraph="Percentage: 95.5%"
            Time="2019-2021"/>
        <Timeline
            title="NES High School (Mumbai)"
            subtitle="Secondary eduction"
            link="#"
            paragraph="Percentage: 92.4%"
            Time="2009-2019"
            />
        </div>
        </div>
      </div>
      
    </div>
  )
}


