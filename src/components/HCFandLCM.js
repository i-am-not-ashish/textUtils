
import React,{useState} from 'react'
export default function HCFandLCM(props) {
    
    const HandleClick=()=>{
    let x="HCF is "+HCF(input1,input2);
    let y="LCM is "+LCM(input1,input2);
    setX(x);
    setY(y);
       
    }
    const HandleA=(event)=>{
        setA(event.target.value);
    }
    const HandleB=(event)=>{
        setB(event.target.value);
    }
    const[a,setA]=useState('');
    const[b,setB]=useState('');
    const[x,setX]=useState("");
    const[y,setY]=useState("");
    let input1=a;
    let input2=b;
    function HCF(input1,input2){
        if(input1<input2){
            let temp1=input2%input1;
            while(temp1!==0){
                input2=input1;
                input1=temp1;
                temp1=input2%input1;
            }
            return input1;
        }
       else if(input2<input1){
            let temp2=input1%input2;
            while(temp2!==0){
                input1=input2;
                input2=temp2;
                temp2=input1%input2;
            }
            return input2;
        }
        else {
            return input1;
        }
    }
    function LCM(input1,input2){
        return(input1*input2)/HCF(input1,input2);
    }
    
  return (
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div><input type="text" className='input-form my-1 mx-2' value={a} onChange={HandleA}/></div>
    <div><input type="text" className='input-form my-1 mx-2' value={b} onChange={HandleB}/></div>
    <button type="button" className="btn btn-outline-primary mx-2 my-1" style={{backgroundColor: props.mode==='dark'?props.btnColor:'#0d6efd',color : 'white'}} onClick={HandleClick}>Submit</button>
    <div className='mx-2'>{x}</div>
    <div className='mx-2'>{y}</div>
    </div>
  )
}
HCFandLCM.defaultProps={
 x:""
}
