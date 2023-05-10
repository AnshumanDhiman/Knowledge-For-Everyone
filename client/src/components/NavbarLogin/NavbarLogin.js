import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";;


export default function NavbarLogin() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [message, setMessage] = useState('');
    const handleChange = (event) => {
      setMessage(event.target.value);
    }
    const searchAction = async () => {
      console.log(message);
     await axios.get(`/users?username=${message}`).then((res) => {
        console.log(res.data);
        if (res.data) {
          window.location.replace(`/profile/${message}`);
        }
      })
      .catch((err) => 
      window.location.replace(`/notfound`))

    }

    
  const logoutFunc = () => {
    localStorage.removeItem("user");
    window.location.replace("/");
  };


  

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Knowledge for Everyone</Navbar.Brand>
          <Nav className="me">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/features">Notes</Nav.Link>
            <Nav.Link href="/pricing">Courses</Nav.Link>
            <Nav.Link href="/offers">Offers</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link>
            <Form className="d-flex" onSubmit={e => { e.preventDefault(); }}>
                  <Form.Control
                    type="search"
                    placeholder="Search here"
                    className="me-2"
                    aria-label="Search"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                  />
        

                  <Button variant="outline-success" onClick={searchAction}>Search</Button>

                </Form>
                </Nav.Link>

            <Nav.Link>
                <Link to={`/profile/${user.username}`}>
                    <img src={ user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png" } alt="" className="topbarImg" />
                </Link>
                
            </Nav.Link>
            <Nav.Link>
            <p>Hi, {user.username}</p>
            </Nav.Link>
            <Nav.Link>
            <Button variant="success" color="primary" onClick={logoutFunc}>
                Logout
              </Button>
              </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>  
    </>
  )
}
