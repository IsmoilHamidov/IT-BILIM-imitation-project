import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import uzbek_language from "./Translation/uz/uzbek_langauge.json"
import russian_language from "./Translation/ru/russian_language.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({  
  interpolation: {escapeValue: false},
  lng: "uz",
  resources: {
    uz:{
      global: uzbek_language
    },
    ru:{
      global: russian_language
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
          <App />
    </I18nextProvider>
  </React.StrictMode>
);


reportWebVitals();
