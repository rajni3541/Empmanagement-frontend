import React, { useEffect, useState } from 'react'
// import axios from "axios";
import Navbar from 'react-bootstrap/navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/nav'
// import Button from 'react-bootstrap/button'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8080/admin/getall').then(res => setEmployee(res.data));
  })
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:/8080/admin/delete/${id}`).then(res => console.log(res.data))
  }
  return (
      <>
    <div>
        <center><h1>Admin-dashboard</h1></center>
    <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand>admin-portal</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="click here to signup and signin"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/AdminSignup">signup</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/AdminSignin">signin</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div style={{minHeight: 'calc(100vh - 10rem)',width: '80%', margin: '0 auto',marginTop: '3rem', display: 'grid', placeItems: 'center', border: '2px solid #ddd'}}>
<center><h1 style={{color: 'blue'}}>WELCOME TO ADMIN-DASHBOARD</h1></center>
        <center><h2>made by rajni saini</h2></center>
        <div style={{backgroundColor:'pink', margin:'10px 0px', padding:'20px 30px', border:'1px solid black', borderRadius:'12px', textDecoration:'none'}} > 
        <h1><Link to="/EmpDashboard">GO TO EMPLOYEE-DASHBOARD</Link></h1>
       
          
        {/* <Button variant="primary" size="lg">
       GO TO EMPLOYEE-DASHBOARD */}
       {/* <Link to="/EmpDashboard"></Link> */}
     {/* </Button> */}
        
        
     </div>
</div>
</div>
<div style={{width: '80%', marginInline: 'auto', border: '2px solid #ddd'}}>
{
          employee.map(employee => <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',gap: '1rem', marginBottom: '1rem'}}>
            <div>{employee.name}</div>
            <div>{employee.email}</div>
            
            <Button onClick={() => navigate(`/admin/edit/${employee._id}`)}>Edit</Button>
            <Button onClick={() => {
              deleteEmployee(employee._id)
            }}>Delete</Button>
          </div>)
        }
</div>
 
</>
  )
}

export default AdminDashboard