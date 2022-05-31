

import './login.css';
import Body from './body';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';     
import 'firebase/compat/auth';
import Nav from './nav';


import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGINGS_SENDER_ID,
   appId: process.env.REACT_APP_API_ID,
   measurementId: process.env.REACT_APP_MEASUREMENT_ID
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function Login()
{
      
const [user] = useAuthState(auth);
console.log(process.env.REACT_APP_API_KEY)
   return(
      
            <section>
               <Nav name = {user}/>
               {user ?<Body/>:<SignIn/>}
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
   </div>
   </div>);
}
export default Login;
