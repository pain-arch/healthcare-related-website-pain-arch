import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {  

    const {
        signInUsingGoogle,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        error
        } = useAuth();


    const handleSignInWithGoogle = (e) =>{
        e.preventDefault();
        signInUsingGoogle();
    }


    return (
        <div className="register-body" style={{marginTop: "80px", padding:"20px"}}>
            <Container  className="w-50 p-5 rounded register-container-design">
                <form onSubmit={handleRegistration} className="w-75 mx-auto" >
                    <h1 className="text-center text-secondary my-4">Create An Account</h1>
                    <div className="my-4">
                        <label className="d-block fw-bold" htmlFor="text"> Name : </label>
                        <input onChange={handleNameChange} className="input-design w-100" type="text" name="name" placeholder="Enter your username" />
                    </div>
                    <div className="my-4">
                        <label className="d-block fw-bold" htmlFor="email"> Email Address: </label>
                        <input onChange={handleEmailChange} className="input-design w-100" type="email" name="eamil" placeholder="Enter your email" />
                    </div>
                    <div className="my-4">
                        <label className="d-block fw-bold" htmlFor="password"> Password : </label>
                        <input onChange={handlePasswordChange} className="input-design w-100" type="password" name="password" placeholder="Enter password" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>{error}</p>
                    </div>
                    <input className="btn btn-dark text-light mb-2" type="submit" value="Register Now" />  <br />
                    <Link to="/login" className="text-decoration-none text-dark"> If you Created a Now Account Go to <span style={{color:"blue"}}>Login or click here</span> </Link> 
                    <p className="mt-3 text-primary" style={{fontSize: "12px"}}>Or Sign Up Using</p>
                    <div className="d-flex">
                        <button onClick={handleSignInWithGoogle} className="btn btn-outline-dark" ><i className="fab fa-google-plus-g"></i> Google</button>
                    </div>
                </form>

            </Container>
        </div>
    );
};

export default Register;