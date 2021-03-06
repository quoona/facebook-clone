/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
function Login() {
  const [state, dispatch] = useStateValue();

  const HandleSignin = () => {
    //sign in stuff
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //dispatch from usereducer
        dispatch({
          //set type is SET_USER and then pass result to user
          //push in datalayer
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
        <img
          id="textlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
        />
      </div>

      <Button onClick={HandleSignin} type="submit">
        Sign In
      </Button>
    </div>
  );
}

export default Login;
