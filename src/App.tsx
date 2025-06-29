import { useEffect } from "react";
import { useTelegram } from "./shared/hooks/useTelegram";
import Header from "./widgets/Header/Header";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
