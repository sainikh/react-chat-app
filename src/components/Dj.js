import React from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import storedState from "./Stored.json";
import './DJ.css';

class DJ extends React.Component {
 render() { 
    const contentState = convertFromRaw(storedState);
    const editorState = EditorState.createWithContent(contentState);
    return (
      <div className=' justify-items-end bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">
        <Editor editorState={editorState} readOnly={true} />
      </div>
      </div>
      
    );
  }}

export default DJ;