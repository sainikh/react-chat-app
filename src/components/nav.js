import './login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


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


function Nav(props) {

    return ( <div className = ' flex flex-row bg-black h-fill w-fill text-white p-4 '>
        <div className = 'flex flex-auto w-56 p-4 text-2xl font-bold' > Shardings </div> 
        {props.user ? < div > </div>:<div className='flex flex-row w-20'><button onClick={()=> auth.signOut()} className=' h-15 bg-zinc-800 rounded-md p-4 border-2 hover:bg-blue-900  '>Logout</button > </div>}
         <div className = ' m-1' > </div>

            </div>

        );
    }

    export default Nav;