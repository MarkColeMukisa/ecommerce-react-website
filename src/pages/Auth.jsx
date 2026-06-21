import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const[mode, setMode] = useState('login');
  const[error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, user, logout, login } = useContext(AuthContext);

  const{register, handleSubmit, formState: {errors}} = useForm();

  function onSubmit(data){
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    }else {
      setError(result.error);
    }
    console.log(result);
  }

  

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">

            {user && (
              <>
                <p>User logged in: {user.email}</p>
                <button onClick={() => logout()}>Logout</button>
              </>
            )}
          <h1 className="page-title">{mode == 'signup' ? 'Sign Up' : 'Login'}</h1>

          <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
                {error && <div className='error-message'>{error}</div>}
                {/* Email  */}
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    placeholder='Enter Email'
                    className='form-input'
                    id='email'
                    {...register("email", { required: "Email is required"})}
                  />
                  {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>
                {/* Password  */}
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    placeholder='Enter Password'
                    className='form-input'
                    id='password'
                    {...register("password", { required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password must be less than 12 characters",
                      },                    })}
                  />
                  {errors.password && <p className="error-message">{errors.password.message}</p>}
              </div>

                <button 
                  type='submit' 
                  className='btn btn-primary btn-large'
                >
                  {mode == 'signup' ? 'Sign Up' : 'Login'}
                </button>
          </form>

            {/* Switch btn Signup and Login  */}
            <div className="auth-switch">
                {mode === 'signup' ? 

                  <p>{" "} Already have an account?{" "} 
                  <span 
                    className='auth-link'
                    onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>

                 : 

                  <p>{" "} Don't have an account?{" "} 
                  <span 
                    className='auth-link'
                    onClick={() => setMode("signup")}
                  >
                    Sign Up
                  </span>
                </p>

                }
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Auth