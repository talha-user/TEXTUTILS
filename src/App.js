import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
function App() {
const [mode,setMode] = useState("light");
const [switchText,setSwitchText] = useState("Enable dark mode");
const [fontLight,setFontLight] = useState("text-dark");

const [alert, setAlert] = useState(null);

const showAlert = (message,type)=> {
setAlert({
  msg: message,
  type: type,
});
setTimeout(()=>{
setAlert(null)
},2000);
}
const toggleMode =()=>{
  if(mode === "light"){
    setMode("dark");
    setSwitchText("Enable light mode");
    setFontLight("text-light");
    document.body.style.backgroundColor="#1f3369";
    document.body.style.color="white";
    showAlert("Dark mode enabled.","success");
  }
  else{
    setMode("light")
    setSwitchText("Enable dark mode");
    setFontLight("text-dark");
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showAlert("Light mode enabled.","success");

  }
}

  return(
<>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} switchText={switchText} fontText={fontLight} />
 <Alert alert={alert}/>
 {/* <div className="container my-3"></div> */}
<TextForm heading="Enter the text to analyze" btnTextUp="Convert to uppercase" btnTextLo="convert to lowercase"
 textClearBtn = "Clear Text" copyTextBtn="Copy Text" btnRemoveSpaces="Remove Extra Spaces" mode={mode} showAlert={showAlert} />  

{/* <About/> */}
</>
);
  }

export default App;
