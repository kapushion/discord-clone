import React, {useEffect} from 'react';
// import logo from './logo.svg';
import Sidebar from "./Sidebar";
import './App.css';
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import {login,logout} from './features/userSlice';

function App() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    useEffect(()=> {
        auth.onAuthStateChanged((authUser)=> {
            if(authUser) {
                //load the user
                dispatch(login({
                    uid: authUser.uid,
                    photo:authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                }))
            } else {
                dispatch(logout());
            }
        })
    }, [dispatch])
  return (
    <div className="app">
        {user ? (
            <>
                <Sidebar/>
            <Chat/>
            </>
        ) : (
            // <h2>you need to login</h2>
            <Login/>
        )}
    </div>
  );
}

export default App;

