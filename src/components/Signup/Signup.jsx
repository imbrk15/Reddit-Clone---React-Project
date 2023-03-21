import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/signup.css'


export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if(username.trim()==='' || password.trim()===''){
            return;
        }
        localStorage.setItem("user", username);
        localStorage.setItem("pwd", password);
        navigate("/");
    }
    return (
        <div className='signup'>
            <div className='art'>
                <img src={require('../image/side.png').default} alt="logo" />
            </div>
            <div className='form'>
                <form onSubmit={submitHandler}>
                    <h3 className='title'><i>Sign up</i></h3>
                    <div className='input'>
                        <div className='name'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder='NAME' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='EMAIL' id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='username'>
                            <label htmlFor="username">Username:</label>
                            <input type="text" placeholder='USERNAME' id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder='PASSWORD' id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>
                    <div className='btn-login'>
                        <button className='btn-in' type='submit'>SIGN UP</button>
                    </div>
                </form>
                <p className='text'>Already a redditor? <a href="/">LOG IN</a></p>
            </div>
        </div>
    )
}
