import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>🐾</div>

        <h2 style={styles.title}>PetCare Jordan</h2>
        <p style={styles.subtitle}>Welcome 💙</p>

        <label style={styles.label}>
          Email
          <input type="email" placeholder="example@email.com" style={styles.input} />
        </label>

        <label style={styles.label}>
          Password
          <input type="password" placeholder="********" style={styles.input} />
        </label>

        <button style={styles.button} onClick={() => navigate("/home")}>
          Login
        </button>

        <p style={styles.footer}>
          Don’t have an account? <span style={styles.link}>Register</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5efe6",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "#ffffff",
    borderRadius: 20,
    padding: 28,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    textAlign: "center",
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "#dff3f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    margin: "0 auto",
  },
  title: { margin: 0, fontSize: 26, color: "#2c7da0" },
  subtitle: { margin: 0, fontSize: 14, color: "#777" },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 14,
    textAlign: "left",
    color: "#444",
    marginTop: 8,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #cce3ea",
    fontSize: 14,
    boxSizing: "border-box",
    background: "#f9fdff",
  },
  button: {
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    border: "none",
    background: "#76c7d6",
    color: "#ffffff",
    fontSize: 15,
    cursor: "pointer",
  },
  footer: { fontSize: 13, color: "#555", marginTop: 6 },
  link: { color: "#2c7da0", cursor: "pointer", textDecoration: "underline" },
};

export default Login;
