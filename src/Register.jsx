import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
