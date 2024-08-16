import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import uzbek_language from "./Translation/uz/uzbek_langauge.json";
import russian_language from "./Translation/ru/russian_language.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") || "uz", // Persist the selected language
  fallbackLng: 'uz', // Fallback to Uzbek if translation is missing
  resources: {
    uz: {
      global: uzbek_language
    },
    ru: {
      global: russian_language
    },
  },
  debug: true, // Enable this for troubleshooting if needed
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
