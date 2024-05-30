import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { UserContext } from '../Context/UserContext';


const Home = () => {
  const [formData, setFormData] = useState({ username: '', email: '', text: '', role: 'guest' });
  const { users, addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { ...formData, id: Date.now() };
    addUser(newEntry);
    navigate('/display', { state: { formData: newEntry } });
  };

  const handleViewAll = () => {
    navigate('/all-posts');
  };
  const handleApiAll=()=>{
 navigate('/all-api');
  }

  return (
    <Container>
      <h1 className="text-center mb-4">Text Arena</h1>
      <div className="d-flex align-items-center justify-content-left mb-4">
        <FaUser style={{ fontSize: '24px', marginRight: '8px' }} />
        <h2 style={{ fontSize: '24px', margin: '0' }}>Test your Abilities:</h2>
        <Button className="btn btn-primary count-button-midnight-purple ml-auto" style={{ background: 'purple' }}>
          Count: {users.length}
        </Button>
      </div>
      <Button className="btn btn-primary mr-2" style={{ background: 'purple' }} onClick={handleViewAll}>
        All Posts
      </Button>
      <Button className="btn btn-primary ml-2" style={{background: 'purple' }} onClick={handleApiAll}>Show Api Page</Button>
      <Card className="p-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col xs={12} sm={6}>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Enter your username here"
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col xs={12} sm={6}>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email here"
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12}>
                <Form.Control
                  as="textarea"
                  name="text"
                  value={formData.text}
                  placeholder="Enter your text here"
                  rows={2}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12}>
                <Form.Control
                  as="select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="guest">Guest</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button type="submit" className="w-100">Submit</Button>
              </Col>
            </Row>
            
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
