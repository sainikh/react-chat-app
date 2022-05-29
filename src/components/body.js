import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './body.css';
import Login from  './Login'
import Logout from './Logout'

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


        <div className="flex-auto bg-green-300">
          <div className= "flex flex-col p-4 m-7 bg-slate-200">

            </div> 
          </div>
        </div>
    );
}

export default body;