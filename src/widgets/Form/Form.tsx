import { useEffect, useState } from "react";
import Button from "../../shared/ui/Button/Button";
import styles from "./Form.module.css";
import { useTelegram } from "../../shared/hooks/useTelegram";

function Form() {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("phesical");

  const { tg } = useTelegram();

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [tg, country, street]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отпарвить данные",
    });
  }, [tg]);

  return (
    <div className={styles.block}>
      <form className={styles.formWrapper}>
        <input
          type="text"
          placeholder="Страна"
          className={styles.input}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Улица"
          className={styles.input}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <select
          className={styles.select}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="phesical">Физическое лицо</option>
          <option value="legal">Юридическое лицо</option>
        </select>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Form;
