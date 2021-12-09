import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  // input onChange event function storeData()
  const storeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // assign input values to the userData object
    setUserData({ ...userData, [name]: value });
  };

  // alert

  // Function when submit button clicked, data will be POST in firbase realtime database
  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, email, address, message } =
      userData;
    try {
      if ((firstName, lastName, phoneNumber, email, address, message)) {
        const res = await fetch(
          "https://easy-pay-a5089-default-rtdb.firebaseio.com/UserMessageRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phoneNumber,
              email,
              address,
              message,
            }),
          }
        );
        if (res) {
          setUserData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            address: "",
            message: "",
          });
          toast("Your feedback has been saved successfully...");
        } else {
          toast("Your feedback has been not saved, Pleae try again!");
        }
      } else {
        toast("Please fill all the input fields...");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="row contact d-flex align-items-center">
            <div className="col-12 col-lg-5 contactCol1">
              <h2>Connect with our Sales team</h2>
              <p>
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s.
              </p>
              <img
                src="./images/salesTeam.jpg"
                alt="connect with our Sales team"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-7 contactCol2">
              {/* Form */}
              <form method="POST">
                <div className="row inputs">
                  <div className="col-12 col-lg-6 mb-4">
                    <label for="First Name" className="form-label"></label>
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      id="exampleFormControlInput1"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={storeData}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label for="Last Name" className="form-label"></label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                      name="lastName"
                      value={userData.lastName}
                      onChange={storeData}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <label for="Phone Number" className="form-label"></label>
                    <input
                      type="phone numberr"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={userData.phoneNumber}
                      onChange={storeData}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label for="Your Email" className="form-label"></label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email"
                      name="email"
                      value={userData.email}
                      onChange={storeData}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label for="Address" className="form-label"></label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Address"
                      name="address"
                      value={userData.address}
                      onChange={storeData}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label for="Message" class="form-label"></label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter Your Message"
                      name="message"
                      value={userData.message}
                      onChange={storeData}
                    ></textarea>
                  </div>
                  <div class="form-check my-3 mb-5">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label mx-3" for="exampleCheck1">
                      I agree to the terms and Conditions
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary formBtn"
                    onClick={submitData}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        closeOnClick
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact;
