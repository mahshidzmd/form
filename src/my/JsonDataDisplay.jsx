import React from 'react'
import JsonData from './data.json'

function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td >{info.name}</td>
                    <td >{info.lastName}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay;