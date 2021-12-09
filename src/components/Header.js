import React from "react";
import Swal from "sweetalert2";

// function for sweet alert when someone submit his email
const Header = () => {
  const emailAlert = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Get in touch, You will be notify!",
      showConfirmButton: true,
      timer: 5000,
    });
  };
  return (
    <>
      <header className="header">
        <section className="container">
          <div className=" row d-flex flex-row justify-content-center align-items-center flex-wrap">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center headerFirstCol">
              <h1 className="display-4">Online Payment Made Easy For You</h1>
              <p className="">
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make.
              </p>
              <h4 className="pb-2">Get early access for you</h4>
              <div className=" inputButton">
                <input
                  type="email"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  placeholder="Enter your email"
                />
                <button
                  className="input-group-text"
                  id="addon-wrapping"
                  onClick={emailAlert}
                >
                  Got it now
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 imagesContainer">
              <img
                src="./images/computer.jpg"
                alt="computer image"
                className="computer"
              ></img>
              <img
                src="./images/mobile.jpg"
                alt="header image"
                className="mobile"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
