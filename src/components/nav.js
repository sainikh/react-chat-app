
import './login.css';

function Login()
{
      const user= null;

   return(
      <div className='flex flex-row bg-blue-500 h-fill w-fill text-white p-4 '>
       
          <div className='flex flex-auto w-56 p-4 text-2xl font-bold'>Shardings </div>
          {user? <div></div>:<div className='flex flex-row w-20'><button className=' h-15 bg-slate-500 rounded-md p-4 border-2'>Logout</button></div>}
          <div className=' m-1'></div>

   </div>

   );
}

export default Login;