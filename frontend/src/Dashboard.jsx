import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const userData = JSON.parse(data);
        setUserInfo(userData);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user-info');
        navigate('/login');
    }

    return (
        <div className="dashboard">
            <div className="welcome-text">
                <h1>Welcome, {userInfo?.name}!</h1>
            </div>
            <img src={userInfo?.image} alt={userInfo?.name} />
            <h3>{userInfo?.email}</h3>
            <p>This is a practice page to demonstrate how to connect the backend with a frontend application in Express and integrate it with a database.</p>
            <p>Thanks for visiting!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
