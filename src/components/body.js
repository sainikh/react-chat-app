import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './body.css';
import Login from  './Login'
import Logout from './Logout'
import Sildebar from './Slidebar'

function body() {

    if (navigator.onLine) {
        console.log('online');
      } else {
        console.log('offline');
      }

    return (
         <div className = " flex  flex-row h-screen " >
        <div className="flex flex-col w-16 justify-between items-center p-4">
            <div className="flex flex-col space-y-2">
            <a><div className=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            </div>
          
           
             </div>
        <div className =" flex flex-col w-64 bg-amber-300 p-1">
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

     
        <div className="flex-auto bg-green-300 relative">
          <div className= "flex flex-col h-auto p-4 m-2 bg-slate-200"> Tech Point </div> 
          <div className= "flex flex-col h-[32rem] p-4 m-2  bg-slate-200"> Tech Point </div>
          <div className="absolute bottom-0 left-0 w-full"><Sildebar /></div>
          
          </div>
         
        </div>
    );
}

export default body;