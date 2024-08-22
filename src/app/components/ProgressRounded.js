'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'
import { useState,useEffect } from 'react';

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);
  
    return children(value);
};
function ProgressRounded(props) {
    const value=props.Number
  return (
    <div style={{width:"10rem"}} className='mx-auto text-center '>
        <div className='bg-secondary text-white m-2'>{props.skillName}</div>
      <ProgressProvider valueStart={0} valueEnd={value}>
          {(value) => <CircularProgressbar 
          value={value} 
          text={` ${value}%`} 
          styles={buildStyles({
            pathTransitionDuration: 5,
            backgroundColor: 'rgb(0,0,0)',
            textSize: '0.8rem',
            pathColor:'rgb(242, 242, 85)',
            textColor:'rgb(242, 242, 85)',
            
          })}/>}
        </ProgressProvider>
    </div>
  )
}

export default ProgressRounded
