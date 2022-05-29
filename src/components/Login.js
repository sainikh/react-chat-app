import { render } from '@testing-library/react';
import './login.css';


function Login()
{
      

   return(
      <div className='  bg-gray-700 h-screen w-fill text-white'>
         <div>
            <br/>
            <div className=' flex justify-center p-10'>
            <button className=' bg-slate-600 p-4 align-middle rounded-md'>Login in with Google
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="192" alt="second logo" ></img>
            </button>
            </div>
            <div className=' p-5 text-center text-xl '><p>Please create your google account </p></div>
            <div className=' p-1 text-center text-xl '><p>if not present </p></div>
            </div>
   </div>);
}

export default Login;
