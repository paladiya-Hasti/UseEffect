import React, { useEffect,useState } from 'react'

const Timer = () => {
    let [second,setsecond]=useState(0)
    useEffect(()=>{
            const timer=setInterval(()=>{
                setsecond(prevTime=>prevTime+1)
            },1000)

            return()=>clearInterval(timer)
    },[])
  return (
    <div>
        <h1>Elapsed Time: {second}second</h1>
    </div>
  )
}

export default Timer