export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Bhagat Shinde
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "30px 0",
    borderTop: "1px solid #1f2937",
    color: "#9ca3af",
    marginTop: "80px",
  },
};
