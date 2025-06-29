import { useCallback } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = useCallback(() => {
    tg.close();
  }, []);

  return {
    onClose,
    username: tg.initDataUnsafe?.user?.username,
    tg,
  };
};
