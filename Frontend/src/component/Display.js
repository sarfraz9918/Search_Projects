import axios from "axios";
import { useState, useEffect } from "react";
import StuDesign from "./StuDesign";

const Display=()=>{
    const [mydata, setMydata]= useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/student/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        }).catch((err)=>{
            alert("Error in data fetching....");
        });
    }

    useEffect(()=>{
        loadData();
    });


    const ans=mydata.map((key)=> <StuDesign 
      rno={key.rollno}
      nm={key.name}
      ct={key.city}
      fs={key.fees}
    />);



    return(
        <>
        <center>
         <h1> Display Students Record</h1>
        
         <table id="customers">
            <tr bgcolor="orange">
                <th> Rollno </th>
                <th> Name</th>
                <th> City </th>
                <th> Fees </th>
            </tr>
            {ans}
         </table>
         </center>
        </>
    )
}

export default Display;