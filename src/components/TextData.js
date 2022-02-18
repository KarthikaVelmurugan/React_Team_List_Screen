import React from 'react'

const TextData=({data})=>{
  console.log("data",data)
return(
  
  <div className="text-gray-400 font-medium text-base">
                {data}
                </div> 
)

} 
export default TextData;