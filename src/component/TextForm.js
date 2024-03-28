import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    
    function handleOnChange(event){
        setText(event.target.value);
    }
    function handleUpperCase(){
        if(text!==""){ 
        if(text===text.toUpperCase()){
            props.showAlert("already in UpperCase","warning");
        }else{
            let newText = text.toUpperCase();
            setText(newText);        
        }
    }
    }
    function handleLowerCase(){
         if(text!==""){
            if(text===text.toLowerCase()){
                props.showAlert("already in lowercase","warning");
            }
            else{
                setText(text.toLowerCase());
            }
         }
        // text.toLowerCase()?props.showAlert("already in LowerCase","warning"):setText(text.toLowerCase); 
        // let newText = text.toLowerCase();
        // setText(newText);    
    }
    function handleClear(){
        setText("");
    }
    function handleCopyText(){
        let text = document.getElementById("exampleFormControlTextarea1");
        //text.select();
        navigator.clipboard.writeText(text.value);
        let preview = document.getElementById("preview").textContent;
        preview==="Nothing to preview.."?props.showAlert("nothing to copy","warning"):
        props.showAlert("text copied...","success");
    
        
    }
    const handleRemoveExtraSpaces =()=>{
        // let text1 = document.getElementById("exampleFormControlTextarea1").textContent;
        // let text2 = text1.split("[ ]+").filter((element)=>{return element.length!==0});
        setText(text.replace(/\s+/g,""));
    }
  return (
    <>
    <div className='container '>
      <h1>{props.heading}</h1>
      <div >
      <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"#1f3369":"white",color:props.mode==="dark"?"white":"black"}} value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleUpperCase} >{props.btnTextUp}</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase} >{props.btnTextLo}</button>
      <button type="button" className='btn btn-primary mx-1' onClick={handleClear}>{props.textClearBtn}</button>
      <button type="button" className='btn btn-primary mx-1' onClick={handleCopyText}>{props.copyTextBtn}</button>
      <button type="button" className='btn btn-primary mx-1' onClick={handleRemoveExtraSpaces}>{props.btnRemoveSpaces}</button>
    </div>
    <div className="container my-1.5">
        <h2>Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p id = "preview">{text.length>0?text:"Nothing to preview.."}</p>
    </div>
    </>
     
  );

    
}
