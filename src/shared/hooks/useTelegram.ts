import { useCallback } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = useCallback(() => {
    tg.close();
  }, []);

  const onToggleButon = useCallback(() => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, []);

  return {
    onClose,
    onToggleButon,
    username: tg.initDataUnsafe?.user?.username,
    tg,
  };
};
