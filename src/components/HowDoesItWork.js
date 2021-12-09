import React, { useState } from "react";
import workApi from "../workApi/workApi";

const HowDoesItWork = () => {
  const [work, setWork] = useState(workApi);
  return (
    <>
      <div className="container ">
        <section className="howWorks">
          <h1>How does it works</h1>
          <div className="row">
            {work.map((rec) => {
              const { id, logo, title, info } = rec;
              return (
                <div className="col-12 col-lg-4 worksColumn1" key={id}>
                  <i className={logo}></i>
                  <h3 className="py-4">{title}</h3>
                  <p>{info}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default HowDoesItWork;
