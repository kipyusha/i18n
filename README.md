
`npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend`

`react-i18next`: Основной пакет для интеграции i18next с React.

`i18next`: Ядро библиотеки i18n.

`i18next-browser-languagedetector`: Опциональный плагин для автоматического определения языка пользователя (из браузера, URL и т.д.)

`i18next-http-backend`: Опциональный плагин для загрузки переводов с сервера (или из локальных файлов через HTTP-запросы).


`.use(LanguageDetector)` Вызываем первым для дитекта языка из браузера

`.use(Backend)` Вызываем втором для подгрузки содержимого с бэка (в нашем случае из локальных файлов)

`.use(initReactI18next)` Иницилизируем библиотеку в конце


`.init` прописываем здесь настройки

`fallbackLng` указывает язык по умолчанию если по какой то причине не удалось определить язык

`debug` указывается для отладки в консоле (лучше использовать вместе с `fallbackLng` иначе язык будет определяться как `dev`)

`escapeValue` экранирование передаваемых значений для предотвращения XSS-инъекций

`backend` указываем путь до наших локальных файлов
