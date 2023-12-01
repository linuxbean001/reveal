import React, { useState } from "react";

import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import information from "../assets/images/information.png";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

import american from '../assets/images/american.png'
import discover from '../assets/images/discover.png'
const steps = [
  "Select Candidate",
  "Select Package",
  "Select add-ons",
  "Review & Submit",
];

function OrderBackgroundCheck() {
  const [selectedOption, setSelectedOption] = useState('option1');

  
  const [activeStep, setActiveStep] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            {/* Content for step 1 */}
            <div className="businessHeading orderHeading">
              Where will your candidates be located ?
            </div>
            <form>
              <div className="taxId">
                <select
                  class="form-select dashboardField"
                  aria-label="Default select example"
                >
                  <option selected>United States of America</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="taxId">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control dashboardField "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Louisiana"
                  />
                </div>
                <div className="mb-3">
                  <select
                    class="form-select dashboardField"
                    aria-label="Default select example"
                  >
                    <option selected>Shreveport</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="orderHeading fw-bold">
                  Enter email address of the candidates you wish to invite ?
                  We'll send their invitation links after you place your order.
                </div>
                <div className="mb-3 mt-3  input-group dashboardField">
                  <div class="row">
                    <div class="col-md-6">
                      <div className="chechboxConatiner">
                        <input
                          className="form-check-input ms-3 mt-3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked
                        />
                        <label
                          className="form-check-label  ms-1 checkboxLable "
                          htmlFor="flexRadioDefault1"
                        >
                          Enter Manually
                        </label>
                        <div className="checkboxText">
                          up to 100 emails at a time
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="chechboxConatiner">
                        <input
                          className="form-check-input ms-3 mt-3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label  ms-1 checkboxLable "
                          htmlFor="flexRadioDefault1"
                        >
                          Upload CSV
                        </label>
                        <div className="checkboxText">
                          up to 500 emails at a time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control fontField"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter email address one per line or seperate by comma"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        );
      case 1:
        return (
          <div>
            {/* Content for step 2 */}
            <div className="businessHeading orderHeading ">
              Select the package that meets your requirement.
            </div>
            <div class="container mt-3">
              <div className="row">
                <div className="col-md-5">
                  <span className="selectPackage ms-5">PACKAGE NAME</span>
                </div>
                <div className="col-md-4">
                  <span className="selectPackage">INCLUDED SEARCHES</span>
                </div>
                <div className="col-md-3">
                  <span className="selectPackage">COST</span>
                </div>
              </div>

              <div className="row mt-3 preEmployment">
                <div className="checkPreEmployment">
                  <div className="col-md-5">
                
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios1"
                        id="exampleRadios1"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={() => handleOptionChange('option1')}
                      />
                      <label class="form-check-label selectPackage" for="exampleRadios1">
                      Pre-Employment Package
                      </label>
                      <div className="revealCheck">Reveal Check Plus </div>
                    </div>
                
                    
                  </div>
                  <div className="col-md-5">
                    <ul className="screeningPoints">
                      <li>National criminal database</li>
                      <li>Address, Names, & DOB verification</li>
                      <li>Social security</li>
                      <li>Sex offender</li>
                      <li>Global watchlist</li>
                      <li>Statewide criminal database</li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <span className="price">
                      $19.<span className="decimal">99</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-3 educationVerification">
                <div className="checkPreEmployment">
                  <div className="col-md-5">
                 
                      <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios1"
                        id="exampleRadios2"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={() => handleOptionChange('option2')}
                      />
                      <label class="form-check-label selectPackage" for="exampleRadios1">
                      Education Verification
                      </label>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <ul className="screeningPoints">
                      <li>1 Degree / Diploma</li>
                      <li>Turnaround within an hour</li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <span className="price">
                      $14.<span className="decimal">95</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-3 educationVerification">
                <div className="checkPreEmployment">
                  <div className="col-md-5">
               
                      <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios1"
                        id="exampleRadios3"
                        value='option3'
                        checked={selectedOption === 'option3'}
                        onChange={() => handleOptionChange('option3')}
                      />
                      <label class="form-check-label selectPackage" for="exampleRadios1">
                      MVR Instant Driving Record Search
                      </label>
                    </div>
                     
                  </div>
                  <div className="col-md-5">
                    <ul className="screeningPoints">
                      <li>Motor Vehicle Report </li>
                      <li>Immediate trunaround</li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <span className="price">
                      $39.<span className="decimal">99</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            {/* Content for step 3 */}
            <div className="businessHeading orderHeading ">
              Select additional searches if required.
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <select
                    class="form-select fontField recordsDropdown"
                    aria-label="Default select example"
                  >
                    <option selected>Criminal Records Search </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div className="row criminal">
                    <div className="col-md-7 informationText">
                      County Criminal Search
                      <img src={information} className="informationImage" />
                    </div>

                    <div className="col-md-2 informationText mt-2">$12.00</div>
                    <div className="col-md-3">
                      <button type="submit" className="addBtn ">
                        <IoIosAdd className="addIcon" /> ADD
                      </button>
                    </div>
                  </div>

                  <div className="row criminal">
                    <div className="col-md-7 informationText">
                      Statewide Criminal Court Search
                      <img src={information} className="informationImage" />
                    </div>

                    <div className="col-md-2 informationText mt-2">$19.95</div>
                    <div className="col-md-3">
                      <button type="submit" className="addBtn ">
                        <IoIosAdd className="addIcon" /> ADD
                      </button>
                    </div>
                  </div>

                  <div className="row criminal">
                    <div className="col-md-7 informationText">
                      Statewide Criminal Database Search
                      <img src={information} className="informationImage" />
                    </div>

                    <div className="col-md-2 informationText mt-2">$19.95</div>
                    <div className="col-md-3">
                      <button type="submit" className="addBtn ">
                        <IoIosAdd className="addIcon" /> ADD
                      </button>
                    </div>
                  </div>

                  <div className="row criminal">
                    <div className="col-md-7 informationText">
                      National Criminal Database Search
                      <img src={information} className="informationImage" />
                    </div>

                    <div className="col-md-2 informationText mt-2">$7.50</div>
                    <div className="col-md-3">
                      <button type="submit" className="addBtn ">
                        <IoIosAdd className="addIcon" /> ADD
                      </button>
                    </div>
                  </div>

                  <div className="row criminal">
                    <div className="col-md-7 informationText">
                      Federal Criminal Records Search
                      <img src={information} className="informationImage" />
                    </div>

                    <div className="col-md-2 informationText mt-2">$19.95</div>
                    <div className="col-md-3">
                      <button type="submit" className="addBtn ">
                        <IoIosAdd className="addIcon" /> ADD
                      </button>
                    </div>
                  </div>

                  <div className="row criminalLast">
                    <div className="col-md-7 informationText">
                      National Criminal Database Alias Search
                      <img src={information} className="informationImage" />
                    </div>

                    <div className="col-md-2 informationText mt-2">$19.95</div>
                    <div className="col-md-3">
                      <button type="submit" className="addBtn ">
                        <IoIosAdd className="addIcon" /> ADD
                      </button>
                    </div>
                  </div>

                  <select
                    class="form-select fontField recordsDropdown"
                    aria-label="Default select example"
                  >
                    <option selected>Civil Records Search</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="col-md-4 summaryContainer">
                  <div className="summaryHeading ">Summary</div>
                  <div className="row summaryBorder">
                    <div className="col-md-9 summaryText">
                      Pre-Employment Package
                      <div className="subText">Reveal Check Plus </div>
                    </div>
                    <div className="col-md-3 summaryText">$19.99</div>
                  </div>

                  <div className="row subtotalBorder">
                    <div className="col-md-9 summaryText">
                      Sub-total
                      <div className="subTotal">Excluding sales tax </div>
                    </div>
                    <div className="col-md-3 summaryText">$19.99</div>
                  </div>
                  <div className="summaryButton">
                    <button
                      type="button"
                      className="btn startedButton"
                      onClick={nextStep}
                      disabled={activeStep === steps.length - 1}
                    >
                      Continue <FaArrowRight className="arrowIcon" />
                    </button>
                    {/* <button
                  type="button"
                  className="btn startedButton"
                  onClick={prevStep}
                  disabled={activeStep === 0}
                >
                  Back
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            {/* Content for step 4 */}
            <div className="container">
              <div className="businessHeading orderHeading ">
                Review & Payment
              </div>
              <p className="reviewDescription">
                Please review the folllowing information is correct. Once you
                sucessfully complete your payment, we will send invitation to
                all candidates in the list to sign any authorization, sign
                consent form and complete information required to complete the
                background check.
              </p>

              <div className="row">
                <div className="col-md-8 candidatesBox">
                  <div className="candidatesContainer">
                    <div className="row partitionRow">
                      <div className="col-md-6 CandidateText">
                        Candidates
                        <span style={{ marginLeft: "10px" }}>
                          <button type="button" className="editButton">
                            Edit
                          </button>
                        </span>
                      </div>
                      <div className="col-md-6 mt-2">
                        <ul className="screeningPoints ">
                          <li>brad@americanscreeningcorp.com</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="row ">
                        <div className="col-md-6 CandidateText ">
                          <span className="workbox">Work Location</span>
                          <span style={{ marginLeft: "10px" }}>
                            <button type="button" className="editButton">
                              Edit
                            </button>
                          </span>
                        </div>
                        <div className="col-md-6 mt-2">
                          <ul className="screeningPoints ">
                            <li>Shrevport, Louisiana</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="paymentHeading ">Payment Method</div>
                  <div className="candidatesContainer">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Credit Card
                        <span>
                        <img src={american}/>
                        <img src={discover}/>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="candidatesContainer">Paypal</div>
                  <div className="candidatesContainer">Google Pay</div>
                  <div className="candidatesContainer">Apple Pay</div>
                </div>

                <div className="col-md-4 summaryContainer">
                  <div className="summaryHeading ">Order Summary</div>
                  <div className="row summaryBorder">
                    <div className="col-md-9 summaryText">
                      Pre-Employment Package
                      <div className="subText">Reveal Check Plus </div>
                    </div>
                    <div className="col-md-3 summaryText">$19.99</div>
                  </div>

                  <div className="row subtotalBorder">
                    <div className="col-md-9 summaryText">
                      Sub-total
                      <div className="subTotal">Tax </div>
                    </div>
                    <div className="col-md-3 summaryText">
                      $19.99
                      <div className="subTotal">$2.56 </div>
                    </div>
                  </div>
                  <div className="summaryButton">
                    <button
                      type="button"
                      className="btn startedButton"
                      onClick={nextStep}
                      // disabled={activeStep === steps.length - 1}
                    >
                      PLACE ORDER
                    </button>
                    {/* <button
                  type="button"
                  className="btn startedButton"
                  onClick={prevStep}
                  disabled={activeStep === 0}
                >
                  Back
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Topbar />
      <div className="dashboard-content ">
        <Sidebar />
        <div className="dashboard container-fluid">
          <div className="welcomeName">Order Background Check</div>
          <div className="detailBox">
            <div className="multiStepForm">
              <div>
                <Box sx={{ width: "90%" }}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
            </div>
          </div>
          <div className="informationBox">
            <div>{renderStepContent(activeStep)}</div>
            {(activeStep === 0 || activeStep === 1) && (
              <div className="taxId">
                <button
                  type="button"
                  className="btn startedButton"
                  onClick={nextStep}
                  disabled={activeStep === steps.length - 1}
                >
                  Continue <FaArrowRight className="arrowIcon" />
                </button>
                <button
                  type="button"
                  className="btn startedButton"
                  onClick={prevStep}
                  disabled={activeStep === 0}
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderBackgroundCheck;
