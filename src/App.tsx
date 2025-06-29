import { useEffect } from "react";
import { useTelegram } from "./shared/hooks/useTelegram";
import Header from "./widgets/Header/Header";

function App() {
  const { tg, onToggleButon } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <>
      <Header />
      <button onClick={onToggleButon}>toggle btn</button>
    </>
  );
}

export default App;
