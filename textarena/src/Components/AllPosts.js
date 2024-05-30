import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


const AllPosts = () => {
  const { users } = useContext(UserContext);


  return (
    <Container>
      <h1 className="text-center mb-4">All Posts</h1>
      {users.map((user) => (
        <Card className="mb-3" key={user.id}>
          <Card.Body>
            <Row>
              <Col xs={12} sm={6}>
                <p><strong>Username:</strong> {user.username}</p>
              </Col>
              <Col xs={12} sm={6}>
                <p><strong>Email:</strong> {user.email}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <p><strong>Text:</strong> {user.text}</p>
              </Col>
              <Col xs={12} sm={6}>
                <p><strong>Role:</strong> {user.role}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AllPosts;
