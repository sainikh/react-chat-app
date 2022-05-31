import { render } from '@testing-library/react';
import './login.css';
import Body from './body'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';     
import 'firebase/compat/auth';

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
   apiKey: "AIzaSyAuRGkM_Cen2Ik1ZV1f37W2B_QaoD1JSJQ",
    authDomain: "react-chat-app-2-24e00.firebaseapp.com",
    projectId: "react-chat-app-2-24e00",
    storageBucket: "react-chat-app-2-24e00.appspot.com",
    messagingSenderId: "244843804677",
    appId: "1:244843804677:web:76ecb9ad7c5607aa15c46c",
    measurementId: "G-HWLZ55EQ4X"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function Login()
{
      
const [user] = useAuthState(auth);


   return(
      
            <section>
               {user?<Body/>:<SignIn/>}
            </section>
           
           
   );
}

function SignIn()
{
   const SignInWithGoogle = () =>
   {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
   }


   return(<div> 
       <div className='  bg-gray-700 h-screen w-fill text-white'>
         <div>
            <br/>
            <div className=' flex justify-center p-10'>
            <button className=' bg-slate-600 p-4 align-middle rounded-md'>Login in with Google
            <img onClick={SignInWithGoogle} src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="192" alt="second logo" ></img>
            </button>
            </div>
            <div className=' p-5 text-center text-xl '><p>Please create your google account </p></div>
            <div className=' p-1 text-center text-xl '><p>if not present </p></div>
            </div>
            
   </div></div>);
}
export default Login;
