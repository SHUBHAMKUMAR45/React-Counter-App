import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count , setCount ]=useState(0);

    function decreaseHandler(){
      setCount(count-1);
    }

    function increaseHandler(){
      setCount(count+1);
    }

    function resetHandler(){
      setCount(0);
    }

  return (
   <div className ="w-[100vw] h-[100vh] flex justify-center  items-center bg-[#344151] flex-col gap-10" >
     <div className="text-[#0398d4] font-medium text-3xl"> INCREMENT &&  DECREMENT  </div>
    < div className="bg-white flex justify-center gap-12 py-3 rounded-md text-[30px] text-[#344151]">
      <button onClick={decreaseHandler} className="border-r-3 text-center w-24 border-[#bfbfbf] text-5xl">
         -
      </button>
    <div className="font-bold gap-12 text-5xl">
    {count}
    </div>
      <button onClick={increaseHandler}className="border-r-3 text-center w-24 border-[#bfbfbf] text-5xl">
         +
      </button>
  </div>
    <button onClick={resetHandler} className="bg-[#0398d4] px-5 py-2 rounded-md text-white text-lg">
      Reset 
    </button>

   </div>
  );
}

export default App;
