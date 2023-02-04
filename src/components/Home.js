import React,{ useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
// import Employee from './Employee';
import { Link } from "react-router-dom";
import axios from 'axios';

function Home() {

  const [allEmployees,setAllEmployees]=useState([])

  //function to call api to get all Employees
  const getEmployees = async ()=>{
   const result = await axios.get('http://localhost:5000/all-employees')
   setAllEmployees(result.data.allEmployees);
 }

 useEffect(()=>{
  getEmployees()

},[])
console.log(allEmployees);

    const handleDelete = async(id)=>{
        
      const result = await axios.delete('http://localhost:5000/delete-employee/'+id)
      alert(result.data.message)
      getEmployees()
    }
    const handleEdit = (id,name,age,desg,salary)=>{
      localStorage.setItem("Name",name)
      localStorage.setItem("Age",age)
      localStorage.setItem("Id",id)
      localStorage.setItem("desg",desg)
      localStorage.setItem("salary",salary)
    }
  return (
    <>
    <div style={{margin:"10rem"}}>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Desgnation</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            allEmployees && allEmployees.length > 0 ?
            allEmployees.map((item)=>(
        <tr>
          <td>{item.uname}</td>
          <td>{item.age}</td>
          <td>{item.desg}</td>
          <td>{item.salary}</td>

          <td> 
<Link to={'/edit'}>
            <Button onClick={()=>handleEdit(item.id , item.uname,item.age,item.desg,item.salary)} variant="primary">Edit</Button>

</Link>            &nbsp;
          <Button onClick={()=>handleDelete(item.id)} variant="primary">Delete</Button>

          </td>  
        </tr>
            ))
            :
        'no table data'
        } 
      </tbody>
    </Table>
    <br></br>
    <Link to={'/add'} style={{textDecoration:'none'}}>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Add New Employee
      </Button>
      </div>
    </Link>
    </div>
    </>
  )
}

export default Home