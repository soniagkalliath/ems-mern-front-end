import React, { useState } from 'react';
import Employee from './Employee';
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Add() {
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[desg,setDesg] = useState('')
    const[salary,setSalary] = useState('')


    let history = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault()
      const body ={
        name,
        age,
        desg,
        salary
      }
        const result = await axios.post('http://localhost:5000/add-employee',body)
   alert(result.data.message);
        
        history('/')
    }
  return (
    <div style={{margin:"10rem",border:"1px solid",padding:"1rem"}}>
        <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Name" required
        onChange={(e)=>setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formage">
        <Form.Control type="text" placeholder="Enter Age" required
        onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formdesg">
        <Form.Control type="text" placeholder="Enter Desgnation" required
        onChange={(e)=>setDesg(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formsal">
        <Form.Control type="text" placeholder="Enter Salary" required
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

export default Add