import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        let text1 = text.toLocaleUpperCase();
        setText(text1)
        if (text===''){
            props.showAlert('warning','TextBox is empty.')
        }else{

            props.showAlert('success','Text has been converted to UpperCase')
        }
    }

    const handleLowerCase=()=>{
        let text1=text.toLocaleLowerCase();
        setText(text1)
        if (text===''){
            props.showAlert('warning','TextBox is empty.')
        }else{
        props.showAlert('success','Text has been converted to LowerCase')
        }
    }
    const handleOnChange = (event) => { // this fucntion is used to listen the text form for onchange function
        setText(event.target.value)
    }

    const handleSpaces=()=>{
        let text1=text.split(/[ ]+/)
        setText(text1.join(" "))
        if (text===''){
            props.showAlert('warning','TextBox is empty.')
        }else{
        props.showAlert('success','Spaces has been removed')
        }}

    const handleCopy=()=>{
        
        if (text===''){
            props.showAlert('warning','TextBox is empty.')
        }else{
            let text=document.getElementById('TextArea')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('success','Copied Text')
        }
    }

    const handleClear=()=>{
        setText('')
        if (text===''){
            props.showAlert('warning','TextBox is empty.')
        }else{
        props.showAlert('success','Text has been cleared')
        }
    }

    return (
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
        <div className="container"  >
            <h1>{props.heading}</h1>

            {/* Text area */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.textarea}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter your text here." id="TextArea" rows="5"></textarea>
            </div>
             {/* {value} should be assigned and {onchange} to listen the text to type */}

            <button className="btn btn-primary mx-1"  onClick={handleUpperCase}>Convert Uppercase</button> 
            {/* [onClick] sees the handleUpperCase fucntion */}

            <button onClick={handleLowerCase} className='btn btn-primary mx-1'>Convert Lowercase</button>

            <button onClick={handleSpaces} className='btn btn-primary mx-1'>Remove Extra Spaces</button>

            <button onClick={handleCopy} className='btn btn-success mx-1'>Copy Text</button>

            <button onClick={handleClear} className='btn btn-danger mx-1'>Clear Text</button>
        </div>
        <div className='container my-2'>
            <h1>Text summary.</h1>
            <p>{text.length} character and {text.split(" ").length} word</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
    )
}
TextForm.defaultProps = {
    heading: "Heading",
    email: "Your Text"
}