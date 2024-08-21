'use client';
import '../styles/G.css'

export default function Progress(props){
    return(
      <div className='my-5'>
        <div>{props.skillName}</div>
        <div
        className="progress"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuemin={0}
        aria-valuenow={30}
        aria-valuemax={100}
        style={{height:"7px"}}
        >
  
        <div
          className="progress-bar glow "
          style={{ width: `${props.Number}%` ,backgroundColor:"rgba(242, 242, 85,0.8)"}}
        />
        </div>
  
      </div>
    )
  }