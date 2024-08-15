// DataNumbersBox.js
import React from "react";
import NumberIncrement from "./NumberIncrement";
import { useTranslation } from "react-i18next";

function DataNumbersBox() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="container-fluid Data_numbers_box">
      <div className="numbers">
        <NumberIncrement end={70} duration={2000} />
        <p>{t("Numbers.text1")}</p>
      </div>
      <div className="numbers">
        <NumberIncrement end={534} duration={2000} />
        <p>{t("Numbers.text2")}</p>
      </div>
      <div className="numbers">
        <NumberIncrement end={4000} duration={2000} />
        <p>{t("Numbers.text3")}</p>
      </div>
      <div className="numbers">
        <NumberIncrement end={661} duration={2000} />
        <p>{t("Numbers.text4")}</p>
      </div>
    </div>
  );
}

export default DataNumbersBox;
