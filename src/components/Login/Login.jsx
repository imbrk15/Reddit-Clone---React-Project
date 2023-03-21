import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../styles/login.css'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [iserror, setIserror] = useState(false);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const originalUsername = localStorage.getItem("user");
        const originalPassword = localStorage.getItem("pwd");
       

        if (originalUsername === username && originalPassword === password) {
            setIserror(false);
            navigate("./home");
        } else {
            setIserror(true);
        }
    };
    return (
        <>
            <div className='login'>
                <div className='art'>
                    <img src={require('../image/side.png').default} alt="logo" />
                </div>
                <div className='form'>
                    <form onSubmit={submitHandler}>
                        <div className='title'>
                            <h3><i>Log in</i></h3>
                            <p>By continuing, you agree to our <a href="">User Agreement</a> and <a href="">Privacy Policy</a>.</p>
                        </div>
                        <div className='input'>
                            <div className='username'>
                                <label htmlFor="username">Username:</label>
                                <input type="text" id='username' placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='password'>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id='password' placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        {iserror && <p style={{ color: "red" }}>Invalid username or password</p>}
                        <div className='btn-login'>
                            <button className='btn-in' type='submit'>LOG IN</button>
                        </div>
                    </form>
                    <p className='text'>Forgot your <a href=''>username</a> or <a href=''>password</a> ?</p>
                    <div className='text'>
                        <p>New to Reddit? <Link to={'./signup'}>SIGN IN</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
