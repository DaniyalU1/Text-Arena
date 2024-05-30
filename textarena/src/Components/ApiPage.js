import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Apipage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
                setData(res.data);
            }
            catch (error) {
                console.log('Error', error)
            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <h1 className="text-center mb-4">API Data</h1>
            <div>
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>UserID: {item.userId}</p>
                            <p>ID: {item.id}</p>
                            <p>Completed: {item.completed ? 'true' : 'false'}</p>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
            <Button onClick={() => navigate('/')} style={{ background: 'purple' }}>
                Back to Home
            </Button>
        </Container>
    );
};

export default Apipage;