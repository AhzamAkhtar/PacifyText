import React, { useState } from "react";
import ReactPlayer from 'react-player'
import Music from "./misic/second.mp3"
function Textform(props){
    const [moon,Setmoon]=useState("moon")
    const [bg,changeBg]=useState({
        color:"black",
        background:"white"
    })
    const [btntext,setBtnText]=useState("Dark Mode")
    function dark(){
        if(bg.color=="black"){
            changeBg({
                color:"white",
                background:"black",
            })
            setBtnText("Light Mode")
            Setmoon("sun")
        }else{
            changeBg({
                color:"black",
                background:"white"
            })
            setBtnText("Dark Mode")
            Setmoon("moon")
        }
    }
    const handleupclick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handlelpclick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const clear=()=>{
        let newText=""
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const copy=()=>{
        var text =document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const extra=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const [text,setText]=useState("")
    return(
        <>
        <div className="container" style={bg}>
        <h1 style={bg}>{props.heading}</h1>
        <div className="mb-3" style={bg}>
        <label for="exampleFormControlInput1"  style={bg} className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={bg}  />
      </div>
      <div className="mb-3" style={bg}>
        <label for="exampleFormControlTextarea1" style={bg} className="form-label"></label>
        <textarea className="form-control" value={text} style={bg} onChange={handleOnChange} id="mybox" style={bg} rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>UPPERCASE</button>
      <button className="btn btn-secondary mx-2 my-2" onClick={handlelpclick}>LOWERCASE</button>
      <button className="btn btn-danger mx-2 my-2" onClick={clear}>Clear</button>
      <button className="btn btn-dark mx-2 my-2" onClick={copy}>Copy</button>
      <button type="button" className="btn btn-success my-2" onClick={extra}>Remove Extra Space</button>
      <button type="button" className="btn btn-dark mx-2 my-2" onClick={dark}>{btntext}</button>
      <i class={`fas fa-${moon} mx-2`}></i>
<div class="btn-group">
  <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  PLAY MUSIC
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item">Play</a></li>
  </ul>
</div>
      <div className="container my-2">
          <h1>YOUR SUMMARY</h1>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and  {text.length} CHARACTERS </p>
          <p>{0.008*text.split(" ").length} Minutes To Read</p>
          <h2>PREVIEW</h2>
          <p>{text}</p>
      </div>
      </div>
      </>
    )
}
export default Textform 