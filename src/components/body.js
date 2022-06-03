
import React, { useRef, useState,useEffect } from 'react';
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
  const messagesEndRef = useRef(null);

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { Filed: 'id' });
  const [formValue, setFormValue] = useState('');


  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };


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
  useEffect(scrollToBottom);
  return (<>



<div className = "  flex  flex-row h-screen " >
        <div className=" hidden flex flex-col w-16 justify-between items-center p-4">
            <div className="flex flex-col space-y-2">
            <a><div className=" rounded-full bg-gray-800 w-8 h-8"></div></a>
            <a><div className=" rounded-full bg-gray-800 w-8 h-8"></div></a>
            <a><div className=" rounded-full bg-gray-800 w-8 h-8"></div></a>
            </div>
          
           
             </div>
      

     
        <div className="flex-auto  bg-slate-700 h-fit">
          <div className= "flex flex-col h-auto p-4 m-2 bg-zinc-900"> Welcome and Chat on</div> 
          <div className= "flex flex-col h-fill sm:m-2  m-1 h-[40rem] bg-zinc-900  overflow-scroll"> 
          <div className='middle'>
          <div className='flex flex-col  space-y-10'>
          


          <main>
            { messages && messages.map((msg,id) => <ChatMessage key={id} message={msg} />)}
          </main>
          </div>
       
    <div  ref={messagesEndRef}></div>
          
           

          
          </div>

          
          </div>
          <div className=" w-sm "><Sildebar /></div>
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
   

    
      <div className=' bg-zinc-900  '>
        
            <div className= "my-3 font-normal rounded-2xl p-2 place-content-center bg-zinc-800  max-w-[120px] md:max-w-xl ">
        <Editor editorState={editorState} readOnly={true} />
      </div>
      </div>
    </div>
    
  </>)
  
}


export default body;