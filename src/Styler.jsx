import React, { useEffect, useState } from 'react'

const Styler = ({ishighlighted}) => {
    let [style,setStyle]=useState({})

    useEffect(()=>{
        if(ishighlighted){
            setStyle({
                backgroundColor: 'yellow',
                color: 'black',
                padding: '10px',
                border: '2px solid black',
              })
        }
        else{
            setStyle({
                backgroundColor: 'pink',
                color: 'blue',
                padding: '10px',
                border: '2px solid gray',
                });
        }
    },[ishighlighted])
  return (
    <div style={style}>
        <h1> HIGH:{ishighlighted ? 'ishighlighted' : 'not ishiglighted'}</h1>
    </div>
  )
}

export default Styler