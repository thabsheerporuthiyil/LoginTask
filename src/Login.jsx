import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
