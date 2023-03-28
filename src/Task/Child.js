import React from 'react'

const Parent = (props) => {
       let a = props.Year;
       console.log(a);

  return (
    <div>

        <button onClick={() => a.filter(function(b){
        if(b.year < 2014){
            console.log(b.name);
        }
    })}>Click Here</button>
    </div>
  )
}

export default Parent