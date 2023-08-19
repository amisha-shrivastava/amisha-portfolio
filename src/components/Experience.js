import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <>
      <div className="details mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">KPMG</span>
            <span className="year-passed-out">Nov 2022 - Dec 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Data Analytics Consulting Internship</span>
          <span className="description">
            <ul>
              <li>
                Reviewed the quality of data sets to ensure that it is ready for
                our Analysis.
              </li>
              <li>Analyzed the data and provided appropriate strategies.</li>
              <li>Developed dashboards using Tableau.</li>
            </ul>
          </span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Numeric Infosystem Pvt. Ltd.</span>
            <span className="year-passed-out">June 2022 - Dec 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Python/Django Intern</span>
          <span className="description">
            <ul>
              <li>
                Developed an e-commerce website known as MedAssist from scratch.
              </li>
              <li>Used Django, Jquery, SQLLite and MaterializeCSS</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
