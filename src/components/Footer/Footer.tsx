import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© Google {currentYear} </p>
      <p>version: 0.1.0</p>
    </footer>
  );
};
