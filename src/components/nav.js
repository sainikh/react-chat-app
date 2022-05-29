
import './login.css';

function Login()
{
      

   return(
      <div className='flex flex-row bg-blue-500 h-fill w-fill text-white p-4 '>
       
          <div className='flex flex-auto w-56 p-4 text-2xl font-bold'>SHACHAT </div>
          <div className='flex flex-row w-20'><button className=' bg-slate-500 rounded-3xl p-3 border-4'>Logout</button></div>
          <div className=' m-1'></div>

   </div>

   );
}

export default Login;