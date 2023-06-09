import React,{useState} from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/Textform';
import HCFandLCM from './components/HCFandLCM';


function App() {
  const[mode,setMode]=useState('light')//whether darkmode is enabled or not
  
  const[alert,setAlert]=useState(null);
  const[btnColor,SetBtn]=useState('primary');
  const showAlert=(messsage,type)=>{
      setAlert({
        msg:messsage,
        Type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  /*const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#495057";
      showAlert("Dark Mode has been enabled!!","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode has been disabled!!","primary")
    }
  }*/
  const mode1=()=>{
    setMode("dark");
    document.body.style.backgroundColor="#161916";
    showAlert("Dark Mode 1 has been enabled!!","secondary")
    SetBtn("#161916");
  }
  const mode2=()=>{
    setMode("dark");
    document.body.style.backgroundColor="rgb(1 13 32)";
    showAlert("Dark Mode 2 has been enabled!!","primary")
    SetBtn("rgb(1 13 32)");

  }
  const mode3=()=>{
    setMode("dark");
    document.body.style.backgroundColor="rgb(2 32 1)";
    showAlert("Dark Mode 3 has been enabled!!","success")
    SetBtn("rgb(2 32 1)");
  }
  const mode4=()=>{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Dark Mode has been disabled!!","success");
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} mode1={mode1} mode2={mode2} mode3={mode3} mode4={mode4} />
    <Alert alert={alert}></Alert>
    <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} btnColor={btnColor}></TextForm>
    <HCFandLCM heading="Enter the numbers to calculate HCF and LCM" mode={mode} btnColor={btnColor}></HCFandLCM>
    {/*<About></About>*/}
    </>
  );
}

export default App;
