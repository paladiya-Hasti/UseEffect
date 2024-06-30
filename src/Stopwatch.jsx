import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    let [time,settime]=useState(0)
    const[isRuning,setRuning]=useState(false)
    const[interVaild,setinterVaild]=useState(null)

    useEffect(()=>{
        if(isRuning){
            const id=setInterval(()=>{
                settime(prevTime=>prevTime +1)
            },1000)
            setinterVaild(id)
        }
        else if(!isRuning && interVaild){
            clearInterval(interVaild)
            setinterVaild(null)
        }

        return()=>clearInterval(interVaild)
    },[isRuning])

    const start=()=>{
        setRuning(true)
    }

    const pause=()=>{
        setRuning(false)
    }

    const resret=()=>{
        setRuning(false)
        settime(0)
    }

    const formattime=(second)=>{
        const hrs=Math.floor(second/3600)
        const mins=Math.floor((second% 3600 )/60)
        const secs=second%60
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    }
  return (
    <div>
        <h1>Elapsed Time:{formattime(time)}</h1>
        <button onClick={start} disabled={isRuning}>Start</button>
        <button onClick={pause} disabled={isRuning}>Pause</button>
        <button onClick={resret} disabled={isRuning}>Reset</button>
    </div>
  )
}

export default Stopwatch