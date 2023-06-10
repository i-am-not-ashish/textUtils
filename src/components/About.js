import React from 'react'

export default function About(props) {
/*    const[myStyle,setMyStyle]=useState({
        color: 'black',
        backgroundColor: "white"
    })*/
    let myStyle={
        backgroundColor: props.mode==='dark'?'black':'white', 
        color: props.mode==='dark'?'white':'black',
        border: 'white solid 2px',
        borderRadius: '10px'
    }
  return (
    <div className='container my-3'>
        <h1 className='my-2 mx-4' style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                Analyse Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count, character count or preview the text. 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Safari, Internet Explorer, Opera etc. It suits to count characters in Facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}
