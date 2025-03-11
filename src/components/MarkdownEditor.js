import React, { useState } from "react";

const Markdown = ()=>{

    const[text, setText] = useState('')

    return(
        <div  className="editor-container">
            <textarea 
            className="textarea"
            value={text}
            onChange={(e)=>setText(e.target.value)}></textarea>
            <div className="preview">{text}</div>
        </div>
    )
}
export default Markdown