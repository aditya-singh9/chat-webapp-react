import React, { useEffect } from "react";
import "./App.css";
import Telegram from "./Components/Telegram";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./slices/userSlice";
import Login from "./Components/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //Login
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return <div className="app">{user ? <Telegram /> : <Login />}</div>;
}

export default App;
