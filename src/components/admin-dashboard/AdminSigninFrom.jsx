import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/button'
import axios from "axios";
// import { displayUser } from "../../redux/signin/signin.action";
// import { useNavigate } from "react-router-dom";



const AdminSignin = () => {
    // const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });

const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleOnClick = (event) => {
        event.preventDefault();
        axios
            .post("https://localhost:8080/app/user/signin", user)
            .then((res) => {
                // setToken(response.data.token);
                // setAdmin(response.data.admin);
                // navigate(`/admin/dashboard`);
                console.log(res.data)

            })
            .catch(function (error) {
                alert(error);
            });



    };
    return (
        <>
            <div style={{ color: 'white', marginTop: '20px', backgroundColor: 'black' }}>
                <center><h1>Admin Sign-in From</h1></center>
            </div>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={handleOnChange} type="email" placeholder="Email" />

                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" onChange={handleOnChange} />

                    </Col>
                </Form.Group>
            </Form>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={handleOnClick} type="submit">Sign in</Button>
                </Col>
            </Form.Group>

        </>
    )
}
// const mapDispatchToProps = dispatch =>({
//     sendUser: userList => dispatch(displayUser(userList))
//   })
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setToken: (token) => dispatch(setToken(token)),
//         setAdmin: (admin) => dispatch(setAdmin(admin)),
//     };
// };
export default (AdminSignin);
