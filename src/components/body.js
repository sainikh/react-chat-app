
import './body.css';
import Sildebar from './Slidebar'

function body() {

    if (navigator.onLine) {
        console.log('online');
      } else {
        console.log('offline');
      }

    return (
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
          <div className= "flex flex-col h-auto p-4 m-2 bg-slate-200"> Tech Point </div> 
          <div className= "flex flex-col h-fill  p-4 m-2 h-[40rem] bg-slate-200  overflow-scroll"> 
          <div className='flex flex-col space-y-4'>
            <div className='grid justify-items-start bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">hi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div>
         

            <div className='grid justify-items-end bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">Im fine how are you doing.asd adsd sdas ds asdsa das dasdasdasdasd sads ddhi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div>

          
            <div className='grid justify-items-end bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">Im fine how are you doing.asd adsd sdas ds asdsa das dasdasdasdasd sads ddhi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div>

          
            <div className='grid justify-items-end bg-slate-200'>
            <img src={process.env.PUBLIC_URL+"/google-logo-png.png"} width="100"  alt="second logo" />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">Im fine how are you doing.asd adsd sdas ds asdsa das dasdasdasdasd sads ddhi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div>

          
            <div className='grid justify-items-end bg-slate-200 '>
            <img className='rounded-full ' src="https://lh3.googleusercontent.com/a-/AOh14GhnzO5AnXbkgbiMu0Ga1OPTa6TAZyPFicmtc1JaIw=s96-c" width="40" alt='df' />
            <div className= " rounded-2xl p-3  bg-slate-400 max-w-md ">Im fine how are you doing.asd adsd sdas ds asdsa das dasdasdasdasd sads ddhi this is sai nikhil A  asdsd sd adasdsa dad sd asd asd sad as das das d  d as dsa dassdsadas das dasd asd sad asd sd asd sadas d asd asd as </div>
            </div>

          
          </div>

          
          </div>
          <div className=" w-full "><Sildebar /></div>
          {/* <div className='flex bg-fuchsia-500 p-4'></div> */}
          </div>
 
        </div>
    );
}

export default body;