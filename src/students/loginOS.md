Source Code :-
import './Login.css'
import { useState, useEffect } from 'react'

const Login = () => {

  const [action, setAction] = useState("")
  const [message, setMessage] = useState("")

  // ✅ useEffect reacts to action changes
  useEffect(() => {
    if (action === "forgot") {
      setMessage("Redirecting to password reset page...")
    }

    if (action === "register") {
      setMessage("Redirecting to create account page...")
    }
  }, [action])

  return (
    <div className="login">
        <h1 className="loginTitle">
            Login to access for your Own Course
        </h1>

        <div className="loginContainer">
            <input 
              className="emailLoginStu" 
              type="email" 
              placeholder="Enter your email" 
            />

            <input 
              className="passwordLoginStu"   
              type="password" 
              placeholder="Enter your password" 
            />

            <button className='LoginButtonAc'>Login</button>

            {/* Options */}
            <div className="loginOptions">
                <span 
                  onClick={() => setAction("forgot")}
                  className="forgotPassword"
                >
                    Forgot Password?
                </span>

                <span 
                  onClick={() => setAction("register")}
                  className="createAccount"
                >
                    Create New Account
                </span>
            </div>

            {/* Message */}
            {message && <p className="loginMessage">{message}</p>}
        </div>
    </div>
  )
}

export default Login
-------------
🧠 1. Importing Hooks
🧠 1. Importing Hooks