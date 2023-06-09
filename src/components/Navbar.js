import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>
     {/* Real dark mode option
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
*/}
<div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}` }>
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={props.mode1}/>
  <label className="form-check-label" htmlFor="inlineRadio1"><div style={{backgroundColor:"#161916",width: "20px",height:"20px",border:"1px solid black",borderRadius:"25%"}}></div></label>
</div>
<div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={props.mode2}/>
  <label className="form-check-label" htmlFor="inlineRadio2"><div style={{backgroundColor:"rgb(1 13 32)",width: "20px",height:"20px",border:"1px solid black",borderRadius:"25%"}}></div></label>
</div>
<div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onClick={props.mode3}/>
  <label className="form-check-label" htmlFor="inlineRadio3"><div style={{backgroundColor:"rgb(2 32 1)",width: "20px",height:"20px",border:"1px solid black",borderRadius:"25%"}}></div></label>
</div>
<div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={props.mode4}/>
  <label className="form-check-label" htmlFor="inlineRadio1">Normal Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype={
  title:PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps={
  aboutText:"Apne bare me bol"
}