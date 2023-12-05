import React from "react";
import background from "../assets/images/img_1.png";
import heading from "../assets/images/img_2.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };
  return (
    <div class="container ">
      <div className="row">
        <div className="col-lg-12">
          <div className="revealContainer">
            <div class="leftContainer">
              <img src={background} className="leftImage" />
            </div>
            <div className="rightContainer">
              <div className="image">
                <img src={heading} className="rightImage" />
              </div>
              <div className="heading text-center">
                <b>Welcome Back!</b>
              </div>
              <div className="discription text-center">
                Please enter your login details
              </div>
              <form className="loginForm">
                <div className="formFields mt-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label labelSize"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control loginfieldSize"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="formFields">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label labelSize"
                  >
                    Password*
                  </label>
                  <input
                    type="password "
                    className="form-control loginfieldSize"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="text-center forgot">
                  <button
                    onClick={login}
                    type="submit"
                    className="btn startedButton loginSize "
                  >
                    LOGIN
                  </button>
                </div>
              </form>
              <div className="forgot  text-center">
                <Link to="/login" className="forgotButton ">
                  Forgot password?
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

export default Login;
