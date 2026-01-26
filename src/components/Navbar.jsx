import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.nav}>
        <h2 style={styles.logo}>Bhagat.dev</h2>

        <nav style={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "#0b0f19",
    borderBottom: "1px solid #1f2937",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
  },
  logo: {
    fontWeight: 700,
    background: "var(--accent)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  links: {
    display: "flex",
    gap: "24px",
    color: "#9ca3af",
  },
};
