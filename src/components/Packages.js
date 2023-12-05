import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { FaRegSmile, FaRocket, FaArrowRight } from "react-icons/fa";
import MultiStepForm from "./MultiStepForm";
import { Stepper } from "react-form-stepper";
import { IoMdSearch, IoIosEye, IoIosAdd } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { RiFileListLine } from "react-icons/ri";
import { TbDots } from "react-icons/tb";

const Packages = () => {
  return (
    <div>
      <Topbar />
      <div className="dashboard-content ">
        <Sidebar />
        <div className="dashboard container-fluid">
          <div className="package">
            <div className="welcomeName">Packages</div>
            <button type="submit" className="createButton ">
              <IoIosAdd className="addIcon" /> CREATE PACKAGE
            </button>
          </div>
          <form class="d-flex">
            <div class="input-group">
              <input
                class="form-control me-2 customColor"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span>
                <IoMdSearch className="searchIcon" />
              </span>
            </div>
          </form>
          <div className="informationBox">
            <div class="container mt-3 tableClass">
              <table class="table">
                <thead className="table-light">
                  <tr style={{ border: "aliceblue" }}>
                    <th>
                      <span className="nameCandidate">Package Name</span>
                    </th>
                    <th>Price</th>
                    <th> Screenings</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="prepackage">
                    <td>
                      <div className="employmentPackage">
                        Pre-Employment Package
                        <div className="revealCheck">Reveal Check Plus </div>
                      </div>
                    </td>
                    <td>
                      <span className="price">
                        $19.<span className="decimal">99</span>
                      </span>
                    </td>
                    <td>
                      <ul className="screeningPoints">
                        <li>National criminal database</li>
                        <li>Address, Names, & DOB verification</li>
                        <li>Social security</li>
                        <li>Sex offender</li>
                        <li>Global watchlist</li>
                        <li>Statewide criminal database</li>
                      </ul>
                    </td>
                    <td>
                      <button type="submit" className="orderBtn ">
                        ORDER NOW
                      </button>
                    </td>
                  </tr>

                  <tr className="prepackage">
                    <td>
                      <div className="employmentPackage">
                        Pre-Employment Package
                        <div className="revealCheck">
                          Reveal Check Compelete{" "}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="price">
                        $32.<span className="decimal">99</span>
                      </span>
                    </td>
                    <td>
                      <ul className="screeningPoints">
                        <li>National criminal database</li>
                        <li>Address, Names, & DOB verification</li>
                        <li>Social security</li>
                        <li>Sex offender</li>
                        <li>Global watchlist</li>
                        <li>Statewide criminal database</li>
                        <li>Unlimited country criminal check</li>
                      </ul>
                    </td>
                    <td>
                      <button type="submit" className="orderBtn ">
                        ORDER NOW
                      </button>
                    </td>
                  </tr>

                  <tr className="prepackage">
                    <td>
                      <div className="employmentPackage">
                        Reveal Check Executive
                        <div className="revealCheck">
                          Reveal Check Executive{" "}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="price">
                        $52.<span className="decimal">99</span>
                      </span>
                    </td>
                    <td>
                      <ul className="screeningPoints">
                        <li>National criminal database</li>
                        <li>Address, Names, & DOB verification</li>
                        <li>Social security</li>
                        <li>Sex offender</li>
                        <li>Global watchlist</li>
                        <li>Statewide criminal database</li>
                        <li>Education Verification</li>
                        <li>Federal Criminal Search </li>
                        <li>Employment Verifications </li>
                      </ul>
                    </td>
                    <td>
                      <button type="submit" className="orderBtn ">
                        ORDER NOW
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Packages;
