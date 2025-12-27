import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    
    navigate("/home");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logoCircle}>🐾</div>

        <h1 style={styles.title}>PetCare Jordan</h1>
        <p style={styles.subtitle}>
          {mode === "login" ? "Welcome back 💙" : "Create new account 💙"}
        </p>

        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>

        {mode === "register" && (
          <div style={styles.field}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>
        )}

        {error && <p style={styles.error}>{error}</p>}

        <button onClick={handleSubmit} style={styles.button}>
          {mode === "login" ? "Login" : "Register"}
        </button>

        <p style={styles.footer}>
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span style={styles.link} onClick={() => setMode("register")}>
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span style={styles.link} onClick={() => setMode("login")}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #f6f2eb, #e8f4fb)",
    padding: 24,
  },
  card: {
    width: 380,
    background: "#fffdf9",
    borderRadius: 20,
    padding: 28,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  logoCircle: {
    width: 70,
    height: 70,
    margin: "0 auto 12px",
    borderRadius: "50%",
    background: "#d9eef7",
    display: "grid",
    placeItems: "center",
    fontSize: 30,
  },
  title: {
    margin: 0,
    color: "#4fa3c7",
    fontSize: 26,
  },
  subtitle: {
    margin: "6px 0 20px",
    color: "#777",
    fontSize: 14,
  },
  field: {
    textAlign: "left",
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 4,
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid #dcdcdc",
    fontSize: 14,
    outline: "none",
  },
  button: {
    width: "100%",
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    border: "none",
    background: "#9fd3ea",
    color: "#fff",
    fontSize: 15,
    cursor: "pointer",
  },
  error: {
    color: "#d9534f",
    fontSize: 13,
    margin: "6px 0",
  },
  footer: {
    marginTop: 16,
    fontSize: 13,
    color: "#555",
  },
  link: {
    color: "#4fa3c7",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
