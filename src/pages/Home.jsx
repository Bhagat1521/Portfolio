import { motion, AnimatePresence } from "framer-motion";
import useRotatingText from "../hooks/useRotatingText";
import usePageTitle from "../hooks/usePageTitle";
import profileImg from "../assets/profile.png";


export default function Home() {
  // SEO (React 19 safe)
  usePageTitle("Bhagat Shinde | Software Developer");

  const role = useRotatingText(
    [
      "Software Developer",
      "React & Node.js Engineer",
      "Building Modern Web Apps",
    ],
    2800
  );

  return (
    <section className="container" style={styles.hero}>
      {/* LEFT CONTENT */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          Hi, I’m{" "}
          <span style={styles.nameGradient}>
            Bhagat
          </span>
        </motion.h1>

        {/* Rotating Role */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={role}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            style={styles.role}
          >
            {role}
          </motion.h2>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={styles.desc}
        >
          I design and develop scalable, high-performance web applications
          focusing on clean architecture, smooth user experience, and modern UI.
        </motion.p>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <motion.img
        src={profileImg}
        alt="Software developer illustration"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        style={styles.image}
      />

    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    alignItems: "center",
    minHeight: "calc(100vh - 70px)",
    // gap: "8px",
  },

  title: {
    fontSize: "3.2rem",
    fontWeight: 700,
    marginBottom: "12px",
    lineHeight: 1.2,
  },

  nameGradient: {
    background:
      "linear-gradient(90deg, #6366f1, #22d3ee, #a855f7)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "200% auto",
    animation: "gradientMove 4s linear infinite",
  },

  role: {
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "#22d3ee",
    marginBottom: "22px",
  },

  desc: {
    color: "#9ca3af",
    maxWidth: "500px",
    lineHeight: 1.7,
    fontSize: "1rem",
  },

  image: {
    width: "100%",
    maxWidth: "380px",
    justifySelf: "center",
    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
  },
};
