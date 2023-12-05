import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountNavigate } from "./accountNavigate";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    console.log("navigate to account...")
    navigate("/Kanbas/account");
  };

  return (
    <div>
      <h1>Sign in</h1>
      <AccountNavigate />
      <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin}> Sign in </button>
    </div>
  );
}
export default Signin;