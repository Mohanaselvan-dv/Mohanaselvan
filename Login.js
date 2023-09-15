import React, { useState } from "react";
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [idproof, setId] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleContact = (e) => {
        setContact(e.target.value);
        setSubmitted(false);
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    };
    const handleId = (e) => {
        setId(e.target.value);
        setSubmitted(false);
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };


    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || contact === '' || address === '' || idproof === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    return (
        <div className="container">
            <div className="header">
                <div className="text"> Sign Up </div>
                <div className="underline"></div>
            </div>
            <div className="inputs" align = "center">
                <form>

                    <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                        value={name} type="text" />

                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" />

                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" />

                    <label className="label">Contact</label>
                    <input onChange={handleContact} className="input"
                        value={contact} type="tel" />

                    <label className="label">Address</label>
                    <input onChange={handleAddress} className="input"
                        value={address} type="text" />

                    <label className="label">ID Proof</label>
                    <input onChange={handleId} className="input"
                        value={idproof} type="file" />
                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );

}

export default Login 