import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");


  return (
    <div className="row justify-content-center mt-7 mx-2">
    <div class="row">
      <div class="col-md-3 col-10 mx-auto mb-3 my-5 py-5 border shadow" >
        <h3 class="text-center mb-3" style={{textDecoration : 'underline'}}>Sign-In </h3>
        <form id="form" >
          <div class="form-group">
            <label>Email</label>
            <input
              name=""
              id="weight"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              name=""
              id="height"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="text"
              placeholder="password"
              class="form-control"
              required
            />
          </div>
          <div style={{display:'flex' , justifyContent:'center',marginTop : '15px'}}>
            <button type="submit" class="btn btn-primary btn-block col-md-5"  >
              Sign In
            </button>
          </div>
        </form>
        
          <div style={{display:'flex' , justifyContent:'center',marginTop : '5px',textDecoration :'underline'}}>
            <h6>Forgot password?</h6>
          </div>
         
      </div>
    </div>
    </div>
  );
};

export default Login;
