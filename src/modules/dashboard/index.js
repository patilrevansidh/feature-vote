import React, { Component } from 'react';
import AdminDashboard from './home/adminDashboard';
import UserDashboard from './home/userDashboard';

const Dashboard = (props) => {
    const user = JSON.parse(localStorage.getItem('userDetails'))
    return user.role === "admin" ? <AdminDashboard role="admin" /> : <UserDashboard role="user"/>
}
export default Dashboard;