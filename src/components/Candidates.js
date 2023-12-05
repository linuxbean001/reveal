import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { IoMdSearch, IoIosEye } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { RiFileListLine } from "react-icons/ri";
import { TbDots } from "react-icons/tb";

const Candidates = () => {
  return (
    <div>
      <Topbar />
      <div className="dashboard-content ">
        <Sidebar />
        <div className="dashboard container-fluid">
          <div className="welcomeName">Candidates</div>
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
              <table class="table ">
                <thead className="table-light">
                  <tr style={{ border: "aliceblue", fontSize: "12px" }}>
                    <th>
                      <span className="nameCandidate">Candidate Name</span>
                    </th>
                    <th>Created</th>
                    <th> Comments</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FaCircleCheck className="circleIcon" />
                      <span className="tablefontsize">Ron Kilgarlin</span>
                    </td>
                    <td>
                      <span className="tablefontsize">10-12-2023</span>
                    </td>
                    <td>
                      <span className="comments">Reports Emailed</span>
                    </td>
                    <td>
                      <button type="submit" className="btn compeleteBtn ">
                        Compelete
                      </button>
                      <span className="eyeContainer">
                        <IoIosEye className="eye" />
                      </span>
                      <span className="listContainer">
                        <RiFileListLine className="eye" />
                      </span>
                      <span className="eyeContainer">
                        <TbDots className="eye" />
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <FaCircleCheck className="circleIconPending" />
                      <span className="tablefontsize">Brad Heriage</span>
                    </td>
                    <td>
                      <span className="tablefontsize">10-12-2023</span>
                    </td>
                    <td>
                      <span className="commentsPending">
                        Awaiting Candidate
                      </span>
                    </td>
                    <td className="status">
                      <button
                        type="submit"
                        className="btn compeleteBtnPending "
                      >
                        Pending
                      </button>
                      <span className="eyeContainer">
                        <IoIosEye className="eye" />
                      </span>
                      <span className="listContainer">
                        <RiFileListLine className="eye" />
                      </span>
                      <span className="eyeContainer">
                        <TbDots className="eye" />
                      </span>
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
export default Candidates;
