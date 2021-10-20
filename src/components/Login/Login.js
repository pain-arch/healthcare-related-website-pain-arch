import React from 'react';
import { Container } from 'react-bootstrap';
import { Link , useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const {
         signInUsingGoogle,
         handleSignIn,
         handleEmailChange,
         handlePasswordChange,  
         error
        } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/blogs';

    //console.log("came from",location.state?.form);

    const handleSignInWithGoogle = (e) =>{
        e.preventDefault();
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-body" style={{marginTop: "80px", padding:"20px"}}>
            <Container className="w-50 p-5 rounded login-container-design ">
                <form onSubmit={handleSignIn} className="w-75 mx-auto" >
                    <h1 className="text-center text-secondary my-4">Login</h1>
                    <div className="my-4">
                        <label className="d-block fw-bold text-start" htmlFor="email"> Email Address: </label>
                        <input onChange={handleEmailChange} className="input-design w-100" type="email" name="eamil" placeholder="Enter your email" />
                    </div>
                    <div className="my-4">
                        <label className="d-block fw-bold" htmlFor="password"> Password : </label>
                        <input onChange={handlePasswordChange} className="input-design w-100" type="password" name="password" placeholder="Enter password" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>{error}</p>
                    </div>
                    <input className="btn btn-dark text-light mb-3" type="submit" value="Log In Now" /> 
                    <br />
                    <Link to="/register" className="text-decoration-none text-dark">New in Old-care? <span style={{color:"blue"}}>Register now</span> </Link>
                    <p className="mt-2 text-primary" style={{fontSize: "12px"}}>Or Sign in Using</p>
                    <div className="d-flex">
                        <button 
                         onClick={handleSignInWithGoogle}
                         className="btn btn-outline-dark" ><i className="fab fa-google-plus-g"></i> Google</button>
                    </div> 
                </form>

            </Container>
        </div>
    );
};

export default Login;