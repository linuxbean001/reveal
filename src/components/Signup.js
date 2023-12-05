import React from "react";
import "./style/styles.css";
import background from "../assets/images/img_1.png";
import heading from "../assets/images/img_2.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="container ">
      <div className="row">
        <div className="col-lg-12">
          <div className="revealContainer">
            <div class="leftContainer">
              <img src={background} className="leftImage" />
            </div>
            <div className="rightContainer">
              <img src={heading} className="rightImage" />
              <div className="heading">
                <b>Sign Up</b> for an Account!
              </div>
              <div className="discription">
                Unleash the power of secure & FCRA complaint background checks
                and make informed decisions with our reliable and customizable
                service.
              </div>
              <div className="information">Account Information</div>

              <form>
                <div className="">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label labelSize"
                  >
                    First Name*
                  </label>
                  <input
                    type="email"
                    className="form-control fieldSize"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label labelSize"
                  >
                    Last Name*
                  </label>
                  <input
                    type="email"
                    className="form-control fieldSize"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label labelSize"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control fieldSize"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text messageSize">
                    This will also be your username when you return in the
                    future
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label labelSize"
                  >
                    Password*
                  </label>
                  <input
                    type="password "
                    className="form-control fieldSize"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn startedButton ">
                  GET STARTED
                </button>
              </form>
              <div className="login">
                Already have an account ?
                <Link to="/login" className="loginButton">
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
