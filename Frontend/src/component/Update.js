import axios from "axios";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [mydata, setMydata]= useState([]);
const  navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/student/update";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        }).catch((err)=>{
            alert("Error in data fetching....");
        });
    }

    useEffect(()=>{
        loadData();
    }, []);

    const myDelete=(myid)=>{
        axios.post("http://localhost:8000/student/studelete",{id:myid}).then((res)=>{
            alert(res.data.msg)
            loadData();
        })
        
    }

    const myEdit=(myid)=>{
        navigate("/editdata/"+myid); 
      } 
const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
          <td>{key.rollno}</td>  
          <td>{key.name}</td>  
          <td>{key.city}</td>  
          <td>{key.fees}</td>  
          <td className="action-icons edit-icon"><MdDelete onClick={()=>{myDelete(key._id)}}/></td>
          <td MdDelete className="action-icons delete-icon"><MdEdit  onClick={()=>{myEdit(key._id)}} /></td>

        </tr>
        </>
    );
})
    



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
                <th> Delete</th>
                <th>Edit</th>

            </tr>
            {ans}
         </table>
         </center>
        </>
    )
}

export default Update;