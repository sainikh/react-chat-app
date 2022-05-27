import './body.css';

function body() {
    return (
         <div class = " flex  flex-row h-screen " >
        <div class="flex flex-col w-16 justify-between items-center p-4">
            <div class="flex flex-col space-y-2">
            <a><div class=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div class=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div class=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            </div>
            <div class="flex flex-col space-y-2">
            <a><div class=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div class=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div class=" rounded-full bg-gray-400 w-8 h-8"></div></a>
            </div>
           
             </div>
        <div class ="w-64 bg-amber-300">submenu </div>
        <div class="flex-auto bg-green-300">maincontent </div>
        </div>
    );
}

export default body;