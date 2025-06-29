import { useTelegram } from "../../shared/hooks/useTelegram";
import Button from "../../shared/ui/Button/Button";
import styles from "./Header.module.css";

function Header() {
  const { onClose, username } = useTelegram();

  return (
    <header className={styles.header}>
      <span>{username ? username : "User"}</span>
      <Button onClick={onClose}>close</Button>
    </header>
  );
}

export default Header;
