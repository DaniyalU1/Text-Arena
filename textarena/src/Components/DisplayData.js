import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
const DisplayData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state || {};

    const [editableFormData, setEditableFormData] = useState(formData || {});
    const [isEditing, setIsEditing] = useState(false);

    if (!formData) {
        return <div>No data to display over here</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableFormData({ ...editableFormData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        navigate('/display', { state: { formData: editableFormData } });
    };

    return (
        <Container>
            <h1 className="text-center mb-4">Displaying your Data</h1>
            {isEditing ? (
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <Form.Control
                                type="text"
                                name="username"
                                value={editableFormData.username}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Control
                                type="email"
                                name="email"
                                value={editableFormData.email}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <Form.Control
                                as="textarea"
                                name="text"
                                value={editableFormData.text}
                                rows={2}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Control
                                as="select"
                                name="role"
                                value={editableFormData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="guest">Guest</option>
                                <option value="admin">Admin</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Button type="submit" className="w-100" style={{ background: 'purple' }}>Save</Button>
                </Form>
            ) : (
                <>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <p><strong>Username:</strong> {formData.username}</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p><strong>Email:</strong> {formData.email}</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <p><strong>Text:</strong> {formData.text}</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p><strong>Role:</strong> {formData.role}</p>
                        </Col>
                    </Row>
                    <button className="btn btn-primary" onClick={() => setIsEditing(true)} style={{ background: 'purple', marginRight: '10px' }}>Edit</button>
                </>
            )}
        </Container>
    );
};

export default DisplayData;