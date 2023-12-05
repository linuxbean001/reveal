import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { FaRegSmile, FaRocket, FaArrowRight } from "react-icons/fa";
import MultiStepForm from "./MultiStepForm";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <div className="dashboard-content ">
        <Sidebar />
        <div className="dashboard container-fluid">
          <div className="welcomeName">
            Welcome, Ron Kilgarlin <FaRegSmile className="smile" />
          </div>
          <div className="detailBox">
            <div className="multiStepForm">
              <MultiStepForm />
            </div>
            <div className="rocket">
              <div className="rocketbox">
                <FaRocket className="rocketIcon" />
              </div>
              <p className="rocketmsg">
                Compelete your profile to start ordering your background check
              </p>
            </div>
          </div>
          <div className="informationBox">
            <div className="businessHeading">Business Information</div>
            <form>
              <div className="taxId">
                <label htmlFor="exampleInputEmail1 " className="form-label">
                  US EIN Tax ID *
                </label>
                <input
                  type="email"
                  className="form-control dashboardField "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text messageDashboard">
                  Your 9-digit US EIN is also referred to as your Tax ID,
                  International customers can skip
                </div>
              </div>
              <div className="taxId">
                <label htmlFor="exampleInputEmail1 " className="form-label">
                  Business Address *
                </label>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control dashboardField "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Address 1"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control dashboardField "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Address 2"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control  dashboardField "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="City"
                  />
                </div>
                <div className="mb-3 dashboardField">
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control fontField "
                        placeholder="Zip Code"
                      />
                    </div>
                    <div class="col-md-6">
                      <select
                        class="form-select fontField "
                        aria-label="Default select example"
                      >
                        <option selected>State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label checkboxLabel"
                    for="flexCheckDefault"
                  >
                    I certify that I will order and use the reports only for a
                    lawful and appropriate permissible purpose, as defined by
                    the FCRA, and in accordance with all applicable law and the
                    <span className="loginButton">
                      {" "}
                      Reveal Customer Service Agreement.
                    </span>
                  </label>
                </div>
                <button type="submit" className="btn startedButton ">
                  CONTINUE <FaArrowRight className="arrowIcon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
