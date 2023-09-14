import React from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
 

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log("error");
    });
    // console.log(auth);
  };
  return (
    <div className="login" >
      <h3>Login Page</h3>
      <form action="">
        <div className="login_input">
          <input type="email" required placeholder="Enter email" />
        </div>
        <div className="login_input">
          <input type="password" required placeholder="password" />
        </div>
        <button>Login</button>
        <div>Forget Password</div>
        <p>--or--</p>
        <button onClick={handleGoogleLogin}>Login with Gogle</button>
      </form>
      <p>New User: Register Now</p>
    </div>
  );
}

export default Login;
