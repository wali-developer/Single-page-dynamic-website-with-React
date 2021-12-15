import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// sweet alert for sign up
// const opensweetalert = () => {
//   Swal.fire({
//     title: "Register on Easy Pay!",
//     html:
//       '<div class="mb-3 mt-3 mx-2 row">' +
//       '<div class="col-sm-10">' +
//       '<input type="text" class="form-control" id="inputPassword" placeholder="Name">' +
//       "</div>" +
//       "</div>" +
//       '<div class="mb-3 mx-2 row">' +
//       '<div class="col-sm-10">' +
//       '<input type="text" class="form-control" id="staticEmail" placeholder="Email">' +
//       "</div>" +
//       "</div>" +
//       '<div class="mb-3 mx-2 row">' +
//       '<div class="col-sm-10">' +
//       '<input type="password" class="form-control" id="inputPassword" placeholder="Password">' +
//       "</div>" +
//       "</div>" +
//       '<div class="mb-3 mx-2 row">' +
//       '<div class="col-sm-10">' +
//       '<input type="password" class="form-control" id="inputPassword" placeholder="Confirm Password">' +
//       "</div>" +
//       "</div>",
//     inputAttributes: {
//       autocapitalize: "off",
//     },
//     showCancelButton: true,
//     confirmButtonText: "Sign up",
//     showLoaderOnConfirm: true,
//     timer: "",
//   });
// };

// sweet alert of Log in
// const loginAlert = () => {
//   Swal.fire({
//     title: "Welcome Back!",
//     html:
//       '<div class="mb-3 mx-3 row">' +
//       '<div class="col-sm-10">' +
//       '<input type="text" class="form-control" id="staticEmail" placeholder="Email">' +
//       "</div>" +
//       "</div>" +
//       '<div class="mb-3 mx-3 row">' +
//       '<div class="col-sm-10">' +
//       '<input type="password" class="form-control" id="inputPassword" placeholder="Password">' +
//       "</div>" +
//       "</div>",
//     inputAttributes: {
//       autocapitalize: "off",
//     },
//     showCancelButton: true,
//     confirmButtonText: "Log in",
//     showLoaderOnConfirm: true,
//   });
// };
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Easy Pay
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex buttons">
                <button
                  className="btn btn-outline-primary signup"
                  type="submit"
                  // onClick={opensweetalert}
                >
                  <Link to="/SignUp" className="btnLink">
                    Sign Up
                  </Link>
                </button>
                <button
                  className="btn btn-outline-primary login"
                  type="submit"
                  // onClick={loginAlert}
                >
                  <Link to="/login" className="btnLink">
                    Logn in
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
