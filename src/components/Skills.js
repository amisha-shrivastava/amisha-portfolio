import React from "react";
import "./Skills.css";

export default function Skills() {
  const value = [
    {
      text: "Python",
      percentage: 90
    },
    {
      text: "C++",
      percentage: 90
    },
    {
      text: "C",
      percentage: 90
    },
    {
      text: "JavaScript",
      percentage: 80
    },
    {
      text: "MySQL",
      percentage: 90
    },
    {
      text: "Oracle",
      percentage: 90
    },
    {
      text: "Django",
      percentage: 80
    },
    {
      text: "Flask",
      percentage: 80
    },
    {
      text: "React",
      percentage: 60
    }
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-mg-6 col-sm-12 my-2 details">
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
