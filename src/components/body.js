
import React, { useRef, useState } from 'react';
import { Editor, EditorState, convertFromRaw } from "draft-js";
import storedState from "./Stored.json";
import './body.css';
import Sildebar from './Slidebar'
import firebase from './firebase';   
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const auth = firebase.auth();
const firestore = firebase.firestore();

function body() {

    if (navigator.onLine) { 
        console.log('online');
      } else {
        console.log('offline');
      }

     
   


    return (<div><ChatRoom/> </div>
     
    
    );
}


function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { Filed: 'id' });
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL,userName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

  }
  return (<>



<div className = "  flex  flex-row h-screen " >
        <div className=" hidden flex flex-col w-16 justify-between items-center p-4">
            <div className="flex flex-col space-y-2">
            <a><div className=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            </div>
          
           
             </div>
        <div className ="hidden flex flex-col w-64 bg-amber-300 p-1">
            <div>
            <a><div className =" flex flex-col  bg-slate-800 p-3">asdasdasdasda sdad  asd  asd  ssadddas asdsd asdas </div></a>
            </div>
            <div>
            <a><div className =" flex flex-col  bg-slate-800 p-3">asdasdasdasda sdad  asd  asd  ssadddas asdsd asdas </div></a>
            </div>    
            <div className="flex flex-col bg-slate-400 p-1">sdasdasdsdas sdasd sdas 
            <a></a>
           
            </div>
         </div>

     
        <div className="flex-auto bg-green-300 h-fit">
          <div className= "flex flex-col h-auto p-4 m-2 bg-slate-200"> Welcome and Chat on</div> 
          <div className= "flex flex-col h-fill sm:m-2  m-1 h-[40rem] bg-slate-200  overflow-scroll"> 
          <div className='flex flex-col  space-y-10'>
            {/* <div className='grid justify-items-start bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">hi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div>
         

            <div className='grid justify-items-end bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">Im fine how are you doing.asd adsd sdas ds asdsa das dasdasdasdasd sads ddhi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div> */}


<main>
      { messages && messages.map((msg,id) => <ChatMessage key={id} message={msg} />)}
    </main>
          
           

          
          </div>

          
          </div>
          <div className=" w-full "><Sildebar /></div>
          {/* <div className='flex bg-fuchsia-500 p-4'></div> */}
          </div>
 
        </div>










    {/* <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form> */}
   

    
  </>)
}

function ChatMessage(props) {
  
  const { userName, uid, photoURL ,data} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
  // console.log(data);
// console.log(props.message);

const contentState = convertFromRaw(JSON.parse(data));
const editorState = EditorState.createWithContent(contentState);

  return (<>
  <div className={`message ${messageClass}`}>
    <div className='relative h-32 w-22 '>
    <div className='flex absolute left-0 top-0 center'>
    </div>
    
      <div className=' text-center text-[10px]'>{userName}</div>
    <div className='shrink w-8 sm:w-10 md:w-16 items-center '> <img src={photoURL} alt='ssas' className=' rounded-full ' width="50" /></div>
    </div>
   
     
      
      <div className='grid justify-items-start bg-slate-200 '>
        <div className=' bg-gray-800 p-2 invisible'>sa</div>
            <div className= " rounded-2xl p-2 place-content-center bg-slate-400 max-w-md ">
        <Editor editorState={editorState} readOnly={true} />
      </div>
      </div>
    </div>
    
  </>)
}


export default body;