import Button from "../../shared/ui/Button/Button";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>user name</span>
      <Button>close</Button>
    </header>
  );
}

export default Header;
