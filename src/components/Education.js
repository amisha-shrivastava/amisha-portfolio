import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <div className=" details d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Institute of Technology & Management, Gwalior
            </span>
            <span className="university-degree">
              Bachelors of Technology in Information Technology
            </span>
            <span className="university-degree">cgpa: 8.55</span>
          </div>
          <div>
            <span className="year-passed-out">2020-2024</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Gwalior Glory High School</span>
            <span className="university-degree">12th Percentage: 90%</span>
            <span className="university-degree">10th Percentage: 88%</span>
          </div>
          <div>
            <span className="year-passed-out">2018-2020</span>
          </div>
        </div>
      </div>
    </>
  );
}
