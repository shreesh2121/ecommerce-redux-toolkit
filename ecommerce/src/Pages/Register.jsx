import React,{useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCPassword]=useState("");

    const registerUser=(e)=>{
        e.preventDefault();
        if(password!==cpassword){
            toast.error("passwords do not match")
        }
        // console.log(email,password,cpassword)
        }
  return (
    <div className='login'>
        <h3>Register Page</h3>
        <form onSubmit={registerUser}>
            <div className="register_input">
                <input type="email" required placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="register_input">
                <input type="password" required placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="register_input">
                <input type="password" required placeholder='Confirm password'value={cpassword} onChange={(e)=>setCPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
           
            <p>Already hace an account?Signup</p>
           

        </form>
        <ToastContainer/>
        

    </div>
  )
}

export default Register