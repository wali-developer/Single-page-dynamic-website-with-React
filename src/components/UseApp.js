import React, { useState } from "react";
import useAppApi from "../useAppApi/UseAppApi";

const UseApp = () => {
  const [use, setUse] = useState(useAppApi);
  return (
    <>
      <section className="container useApp">
        <div className="row imageBoxRow">
          <div className="col-12 col-lg-5 imageBoxCol1 d-flex align-items-center justify-content-center">
            <img src="./images/image3.jpg" />
          </div>
          <div className="col-12 col-lg-7 imageBoxCol2">
            <h4>--Available @ Google and IOS App Store Only</h4>
            <h2>How to use the App ?</h2>

            {use.map((rec) => {
              return (
                <div
                  className="row useAppInnerRow d-flex flex-row align-items-start"
                  key={rec.id}
                >
                  <div className="col-1 col-lg-1 mt-2">
                    <span>{rec.id}</span>
                  </div>

                  <div className="col-10 col-lg-11 m-0 p-0 useAppInnerRowText">
                    <h3 className="workTitle">{rec.title}</h3>
                    <p>{rec.info}</p>
                  </div>
                </div>
              );
            })}
            <div className="buttons">
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseApp;
