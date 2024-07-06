// DataNumbersBox.js
import React from "react";
import NumberIncrement from "./NumberIncrement";

function DataNumbersBox() {
  return (
    <div className="container-fluid Data_numbers_box">
      <div className="numbers">
        <NumberIncrement end={70} duration={2000} />
        <p>Shartnoma tuzilgan o‘quv markazlari</p>
      </div>
      <div className="numbers">
        <NumberIncrement end={534} duration={2000} />
        <p>Platformadagi o‘quv kurslari soni</p>
      </div>
      <div className="numbers">
        <NumberIncrement end={4000} duration={2000} />
        <p>Topshirilgan arizalar soni</p>
      </div>
      <div className="numbers">
        <NumberIncrement end={661} duration={2000} />
        <p>Bitiruvchilar soni</p>
      </div>
    </div>
  );
}

export default DataNumbersBox;
