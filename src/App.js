
import { useState } from 'react';
import './App.css';

import NavBar from './Components/NavBar';

import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';


function App() {

  const [mode,setMode]=useState('light')
  const toogleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('success','Dark mode has been enabled')
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('success','Light mode has been enabled')
    }
  }

  const [alert,setAlert]=useState(null);
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message,
    })
    setTimeout(()=>{
      setAlert(null)
    },2500)
  }

  // const[text,setText]=useState(null)

  return (
    <>
    {/* Setting the value of title, contact, about */}
    <NavBar title="SMS" contact="Contact" mode={mode} toogleMode={toogleMode} about="About"/> 
    {/* <NavBar/>..........for default value */}
    <Alerts alert={alert}/>

      <div className="container">
        <TextForm  showAlert={showAlert} heading="Write Something Unique" mode={mode} textarea="Compose your text"/>
        {/* <TextForm/> ..............for  default value */}
       
        
      </div>
    </>
  );
}

export default App;
