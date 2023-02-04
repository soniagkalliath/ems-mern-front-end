import React, { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Edit() {
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[id,setId]= useState('')
    const[desg,setDesg] = useState('')
    const[salary,setSalary] = useState('')


    let history = useNavigate();
    var index = Employee.map((item)=>item.id).indexOf(id)

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const body ={
          id,
          name,
          age,
          desg,
          salary
        }
          const result = await axios.post('http://localhost:5000/edit-employee',body)
     alert(result.data.message);
        history('/')
    }

    useEffect(()=>{
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))
        setDesg(localStorage.getItem("desg"))
        setSalary(localStorage.getItem("salary"))

    },[])


  return (
    <div style={{margin:"10rem",border:"1px solid",padding:"1rem"}}>
        <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" value={name} placeholder="Enter Name" required
        onChange={(e)=>setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" value={age} placeholder="Enter Age" required
        onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" value={desg} placeholder="Enter Desgnation" required
        onChange={(e)=>setDesg(e.target.value)}
        />
      </Form.Group><Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" value={salary} placeholder="Enter Salary" required
        onChange={(e)=>setSalary(e.target.value)}
        />
      </Form.Group>
     
      <Button onClick={(e)=>handleSubmit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Edit