'use client';

import Navbar from "../components/Navbar";

function Card(props){
    return(
    <div className="card" style={{width: "20rem"}}>
    <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h6>
        <br/>
        <br/>
        <p className="card-text">{props.paragraph}</p>
        <a href={props.link} className="card-link">Link</a>
    </div>
    </div>
    )
}
export default function page() {
  return (
    <div>

        <Navbar props="Project"/>
        <div className="d-flex flex-column justify-content-around m-3">
        <div className="d-flex flex-md-row flex-column justify-content-around my-3">
        <Card
            title="UWSN (underwater wireless sensor network)"
            subtitle="machine learning, K-Means Clustering, Q-learning, Python"
            link="https://github.com/konekoshinde/UWSN"
            paragraph="Node deployment algorithm for less cost and sustainable network with dynamic node selection and secure data transfer.Used hierarchical clustering for cluster head selection resulting in 60% alive nodes and Q-learning trust value against DOS and Data manipulation attack making it 90% more secure (all the comparisons are according to published algorithms)"
        />
        <Card
            title="Drive Protector"
            subtitle="Next.js, React.js, npm, MongoDB, Next-Auth, AES, RSA, Digital signature"
            link="https://github.com/konekoshinde/driveprotectoriiitp"
            paragraph="A fullstack project with aim to achieve encrypted and privacy protected text-files on google-DRIVE.My work includes integration of SSO, google-API and ”keys only policy” on MongoDb which guarantees 99% privacy and unique key exchange dynamics.Gives 90% robust against virtual brute force and 80% data breaches (analysis are done using past years data)"/>
        <Card
            title="HueP (hue Palette)"
            subtitle="React.js, npm, Node.js, Express.js, Javascript, MongoDB, HTML/CSS, Material-UI"
            link="https://github.com/konekoshinde/hueP"
            paragraph="built a tool for color palette with features like Image & Gradient Color Extractor, Custom Palette maker, Scheme Generator & visualisation of colors on site along with downloading and exporting the palettes using node packages. Used Express for REST-API having import, export, search on functionality. Survey data showed saving 60% user’s time and satisfaction"
            />
        </div>
        
            
        <div className="d-flex flex-md-row flex-column justify-content-around my-3">
        <Card
            title="Google Hackathon Project"
            subtitle="machine learning, XG-boost, flask, NextJs"
            link="https://github.com/konekoshinde/google_hackathon"
            paragraph="Made a doctor recommendation app based on locality, reliability and auto-matic detection of disease using symptoms. Authentication for doctors. Reliability of doctors is measured by customers rating and feedback. Most importantly checking the authenticity of doctor by verifying their lisence through government website"
        />
        <Card
            title="RakSoftech TextEditor"
            subtitle="Next.js, React.js, npm, MongoDB"
            link="https://github.com/konekoshinde/math-text-Editor_Raksoftech"
            paragraph="A fullstack project on Text-Editor with functionality of editing maths equations. Used npm packages like katex, math-live to facilitate math-text-box and react-quill for textEditing. Stores all the typed mathematical equation in latex form on MongoDB"/>
        <Card
            title="RakSoftech Farmhouse Website"
            subtitle="NextJs, React.js, npm, MongoDB"
            link="https://github.com/konekoshinde/RakSoftech_webpage"
            paragraph="build a fullstack showcase website for farmhouse with added animations and functionality like contact-us using email address and whatsapp messages. Live location tracker for giving correct location through google map api."
            />
        
        </div>
        </div>
    </div>
  )
}

