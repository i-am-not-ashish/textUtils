import React,{useState} from 'react'
export default function TextForm(props) {
    const handleClick=()=>{
        //console.log("Uppercase are clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UppperCase!!!!","success")
    }
    const handleDOwnClick=()=>{
        let y=text.toLowerCase();
        setText(y);
        props.showAlert("Converted to LowerCase!!!!","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const[text,setText]=useState("");
    //setText("Text daal be");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(73, 80, 87)':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?props.btnColor:'#0d6efd'}} onClick={handleClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?props.btnColor:'#0d6efd'}} onClick={handleDOwnClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summery</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>It will take {0.008*text.split(" ").length} minutes to read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview. "}</p>
    </div>
    </>
  )
}

