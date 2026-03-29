import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import UserList from './components/UserList.jsx';
import UserDetails from './components/UserDetails.jsx';
import UserCreate from './components/UserCreate.jsx';
import UserEdit from './components/UserEdit.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import './css/main.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/create" element={<UserCreate />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/users/:id/edit" element={<UserEdit />} />
                <Route path="*" element={<Home />} /> 
            </Routes>
        </Router>
    );
}

export default App;
