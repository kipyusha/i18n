import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation("ru");

  const changeLanguage = (): void => {
    console.log(i18n.language)
    if (i18n.language === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };
  return (
    <main className="text-center">
      <h2 className="mt-5 text-2xl font-bold">{t("welcome")}</h2>
      <button
        className=" bg-neutral-900 px-4 py-2 text-xl rounded mt-2 text-cyan-500 cursor-pointer hover:scale-103 transition-transform ease-out"
        onClick={changeLanguage}
      >
        {t("button_text")}
      </button>
      <p className="mt-2">{t("text_language")}</p>
    </main>
  );
};

export default HomePage;
