function Home() {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Home Screen🐾</h2>

      <div style={styles.unit}>
        <div style={styles.icon}>🐶</div>
        <div>
          <h3 style={styles.unitTitle}>My Pets</h3>
          <p style={styles.text}>You have 3 registered pets</p>
        </div>
      </div>

      <div style={styles.unit}>
        <div style={styles.icon}>💉</div>
        <div>
          <h3 style={styles.unitTitle}>Vaccinations</h3>
          <p style={styles.text}>2 upcoming vaccinations this month</p>
        </div>
      </div>

      <div style={styles.unit}>
        <div style={styles.icon}>🩺</div>
        <div>
          <h3 style={styles.unitTitle}>Vet Appointments</h3>
          <p style={styles.text}>1 appointment scheduled</p>
        </div>
      </div>

      <div style={styles.unit}>
        <div style={styles.icon}>🏡</div>
        <div>
          <h3 style={styles.unitTitle}>Adoption</h3>
          <p style={styles.text}>5 pets available for adoption</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5efe6",
    padding: 40,
    maxWidth: 900,
    margin: "0 auto",
  },

  title: {
    marginBottom: 30,
    color: "#2c7da0",
  },

  unit: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    background: "#ffffff",
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  icon: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "#76c7d6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    color: "#fff",
    flexShrink: 0,
  },

  unitTitle: {
    margin: 0,
    color: "#2c7da0",
  },

  text: {
    margin: "6px 0 0",
    color: "#555",
    fontSize: 14,
  },
};

export default Home;
