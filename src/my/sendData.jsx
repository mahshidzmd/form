import React, { useState } from 'react'
import { useEffect } from 'react';
import JsonData from './data.json'


function SendData(){
        
const [data, setData] = useState({
    name: "",
    lastName: "" 
})
 useEffect(()=>{
    getData()
 },[])


function submit(e){
    e.preventDefault();
    
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)

}

const getData=()=>{
    fetch(JsonData,{
        name: data.name,
        lastName: data.lastName
    }).then(function(response){
        return response.json()
    })
}

    return(
        <div>
             <form onSubmit={(e)=>submit(e)}>
                    <input placeholder='name' type="text" id="first_name" value={data.name}></input>
                    <input placeholder='lastName' type="text" id="last_name" value={data.lastName}></input>
                    <button>Submit</button>
             </form>
        </div>
    );
}

export default SendData;