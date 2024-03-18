import React,{ useState } from 'react'

export default function TextState(props) {
  const [Text, setText] = useState('Enter the text');
  const handleUpclick= ()=>{
    console.log("you are clicked on the button")
    let newText=Text.toUpperCase()
    setText(newText);
    props.showAlert("converted to the upper case", "Success");
  }
  const handledownclick= ()=>{
    console.log("you are clicked on the button")
    let newText=Text.toLowerCase()
    setText(newText);
    props.showAlert("converted to the Lower case", "Success");
  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value)
  }
  const handlecopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "Success");
  }
  const handleExtraSpace=()=>{
    let newtext=Text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removerd extra spaces", "Success");
  }
  const handleClear=()=>{
    setText("");
    props.showAlert("cleared the text", "Success");
  }
  return (
    <div >
      <h1 style={{color: props.mode==='dark'? 'white':'black'}}>{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} style={{color: props.mode==='dark'? 'white':'black', backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="myBox" rows="10"></textarea> 
      </div>
      <div className="container">
      <button className='btn btn-primary mx-1' onClick={handleUpclick} >convert To Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handledownclick} >convert To Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handlecopy} id='myBox' >copy text</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpace} >delete extra space</button>
      <button className='btn btn-primary mx-1' onClick={handleClear} >Clear Text</button>
      <h2 style={{color: props.mode==='dark'? 'white':'black'}}>your text summry</h2>
      <p style={{color: props.mode==='dark'? 'white':'black'}}>{Text.split(" ").length} words and {Text.length} charecters</p>
      <p style={{color: props.mode==='dark'? 'white':'black'}}>{Text.split(" ").length * .008} read time</p>
      </div>
      
    </div>
  )
}
