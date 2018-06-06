import React, { Component } from 'react';
import AdminDashboard from './home/adminDashboard';
const Dashboard = (props) => {
    const user = JSON.parse(localStorage.getItem('userDetails'))
    return <AdminDashboard role="admin" />
}
export default Dashboard;