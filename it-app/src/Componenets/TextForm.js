
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupClick=()=>{
        console.log("Uppercase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleonchange=(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    const handledownClick=()=>{
      let newtext1=text.toLowerCase();
      setText(newtext1);
    }
    const handleclearClick=()=>{
      let newtext1='';
      setText(newtext1);
    }
   const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

   
    const[text,setText]=useState("");
  return (
    <>
    <div className='container'style={{ color : props.mode==='dark'?'white':'black'}} >
   <h2>{props.heading}</h2> 
<div className="mb-3">
  {/* <label htmlfor="exampleFormControlTextarea1"  className="form-label"></label> */}
  <textarea className="form-control" value={text} onChange={handleonchange}   style={{backgroundColor:props.mode==='dark'?'grey':'white',
   color : props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handledownClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

    </div> 
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your Text summary</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008*text.split(" ").length } minutes</p>
    <h2> Preview</h2>
    <p>{text.length>0?text:"Enter Something here"}</p>
   
  </div>
 

    </>
  )
}
