'use client'

function Info() {
  return (
    <div className="card p-5 m-lg-5 border border-2 border-black-50 rounded " >
        <div className="row g-0" >
            <div className="col-md-8 mb-5" style={{width:"50rem"}} >
            <div className="card-body ">
                <h5 className="card-title fw-bolder fs-2 text-md-start text-center">Hello my name is <span className="fst-italic imp">Chaitrali Shinde</span></h5>
                <br/>
                <p className="card-text text-white-50" >
                I am a Competitive programmer with over 50 contests and has secured rankings in the top 5% medium division contests. Also a hackathon enthusiasts. Coming from a tier 2 college, I have made project achieving top 2% score among college peers. I have skills in software engineering, communication, and quick learning.  
                </p>
                <br/>
                <br/>
                <a className="me-5 imp p-2 bg-secondary" href="https://drive.google.com/file/d/16IsmkAbQq1A68oo_CF_2xOGrHwcB5up2/view?usp=drive_link" target="_blank">Resume</a>
                
            </div>
            </div>
            

            <div className="col-md-4 mx-auto">
            <img src="profile.jpg" className="img-fluid glow" alt="..." />
            </div>
        </div>
        </div>
  )
}

export default Info
