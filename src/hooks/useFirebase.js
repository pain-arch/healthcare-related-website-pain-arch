import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signOut ,createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();


const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [name , setName]= useState(''); 
    const [email , setEmail]= useState('');
    const [password , setPassword]= useState(''); 
    const [error , setError]= useState(''); 


    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
      }
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
      }
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
      }

    const auth = getAuth();


    // sign in with google pop-up
    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
           
    }

    // set user
    useEffect(() =>{
        onAuthStateChanged(auth, user => {
            if (user){
                setUser(user);
            }
        })
    },)


    //set user name 
    const setUserName = () =>{
        updateProfile(auth.currentUser , {displayName: name})
        .then(result => {

        })
    }

    // Register using eamil and pass
    const handleRegistration = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
            setError('');
            setUserName();
            window.location.reload(false);
        })
        .catch((error) => {
            setError(error.message);
          });
    }
    // Sign In using eamil and pass
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
            setError('');
        }).catch((error) => {
            setError(error.message);
          });  
    }

    // set log out
    const logOut = () =>{
        signOut(auth)
             .then(() =>{
                 setUser({})
             })
             
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleSignIn,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange      
    }
}

export default useFirebase;