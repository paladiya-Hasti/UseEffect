import React ,{useEffect} from 'react'

const Logger = ({logMassges}) => {

    useEffect(()=>{
        console.log("componet mounted");
    },[])

    useEffect(()=>{
        console.log(`props changes ${logMassges}`);
    },[logMassges])
    
  return (
    <div>
      <h1>Logger Component</h1>
      <p>Current Log Message: {logMassges}</p>
    </div>
  )
}

export default Logger