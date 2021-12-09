import React, { useState } from "react";
import sendMoney from "../sendMoneyApi/sendMoneyApi";

const SendingMoney = () => {
  const [sendData, setSendData] = useState(sendMoney);
  return (
    <>
      <section className="container pt-5 mt-5">
        <h2 className="fw-bold text-center mb-5 mt-lg-5 pt-lg-5 pt-md-5">
          How to send money
        </h2>
        <div className="row sendMoneyRow">
          {sendData.map((data) => {
            const { id, icon, title, info } = data;
            return (
              <div className="col-11 col-lg-3 col-xxl-3 sendMoneyBox" key={id}>
                <i className={`${icon} icon`}></i>
                <h4>{title}</h4>
                <p>{info}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SendingMoney;
