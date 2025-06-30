import { useEffect } from "react";
import { useTelegram } from "./shared/hooks/useTelegram";
import Header from "./widgets/Header/Header";
import { Route, Routes } from "react-router-dom";
import { ProductsList } from "./widgets/ProductsList";
import Form from "./widgets/Form/Form";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
