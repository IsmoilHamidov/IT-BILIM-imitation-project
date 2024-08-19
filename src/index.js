import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import uzbek_language from "./Translation/uz/uzbek_langauge.json";
import russian_language from "./Translation/ru/russian_language.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const setDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem("language");
  const defaultLanguage = savedLanguage ? savedLanguage : "uz";
  i18next.changeLanguage(defaultLanguage);
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'uz', // Default language
  fallbackLng: 'uz',
  resources: {
    uz: {
      global: uzbek_language
    },
    ru: {
      global: russian_language
    },
  },
  debug: true,
});

// Set language after i18next is initialized
setDefaultLanguage();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
