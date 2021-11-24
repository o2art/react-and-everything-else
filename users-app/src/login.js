import { handleLogin } from "./utils";

<div className="login">
  <h2> Login </h2>
  <div className="login-input">
    <span> mail: </span>
    <input type="email" />
  </div>
  <div className="login-input">
    <span> pass: </span>
    <input type="password" />
  </div>
  <div className="login-input">
    <button onClick={handleLogin}> Login </button>
  </div>
</div>;
