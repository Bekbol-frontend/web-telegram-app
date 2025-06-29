import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const closeTg = () => {
    tg.close();
  };

  return (
    <div>
      <h1>App</h1>
      <button onClick={closeTg}>close</button>
    </div>
  );
}

export default App;
