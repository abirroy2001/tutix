import React, { useState } from 'react'

export default function About(props) {
    
    // const[myStyle,setStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle={
        color: props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'rgb(36 74 104)':'white'
    }
    // const handleChange=()=>{
    //     if(myStyle.color== 'white'){
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    //     else{
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    // }
  return (
    <div style={{width: '70%', margin: 'auto'}}>
        <h2 style={{color: props.mode==='dark'? 'white':'black'}}>About Us</h2>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyse your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or

                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use

                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible


                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                11 This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc
                </div>
                </div>
            </div>
        </div>
        {/* <div>
        <button className='btn btn-primary my-3' onClick={handleChange} >Eneble dark mode</button>
        </div> */}
    </div>
  )
}
