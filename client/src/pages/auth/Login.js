import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !password) {
            toast.error("Please enter both name and password.");
            return;
        }
        try {
            const res = await axios.post(`http://localhost:5050/api/v1/auth/login`, { name, password });
            if (res.data.success) {
                toast.success("Login successful");
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/dashoard');
            } else {
                toast.error(res.data.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder='admin' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='admin' id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login