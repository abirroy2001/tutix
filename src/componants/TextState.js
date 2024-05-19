import React, { useState } from 'react';

export default function TextState(props) {
    const [Text, setText] = useState('Enter the text');

    const handleUpclick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        showAlert('Converted to uppercase', 'success');
    };

    const handleDownclick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        showAlert('Converted to lowercase', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        // var text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(Text);
        showAlert('Text is copied', 'success');
    };

    const handleExtraSpace = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(' '));
        showAlert('Removed extra spaces', 'success');
    };

    const handleClear = () => {
        setText('');
        showAlert('Cleared the text', 'success');
    };

    const showAlert = (message, type) => {
        props.showAlert(message, type);
    };

    return (
        <div>
            <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={Text}
                    style={{
                        color: props.mode === 'dark' ? 'white' : 'black',
                        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
                    }}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="10"
                ></textarea>
            </div>
            <div className="container">
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleDownclick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} id="myBox">
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
                    Delete Extra Space
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
                    Clear Text
                </button>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary</h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {Text.split(/\s+/).filter((element) => {
                        return element.length !== 0;
                    }).length}{' '}
                    words and {Text.length} characters
                </p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {Text.split(' ').filter((element) => {
                        return element.length !== 0;
                    }).length * 0.008} read time
                </p>
            </div>
        </div>
    );
}
