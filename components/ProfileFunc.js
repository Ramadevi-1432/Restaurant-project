import React, { useEffect } from 'react'

const ProfileFunc = (props) => {
    console.log(props);
    useEffect(()=>{
      setInterval(()=>{
        console.log('set interval')
      })
      return()=>{
       console.log('useeffect return')
      }
      
      console.log('useeffect')
    },[]);

    console.log('render');

  return (
    <div>
      <h2>From profile functional component</h2>
     <h3>{props.name}</h3>

    </div>
  )
}

export default ProfileFunc
