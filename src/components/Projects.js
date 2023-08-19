import React from "react";

export default function Projects() {
  return (
    <>
      <div className=" details d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <a href="https://github.com/amisha-shrivastava/ShopIng">
              <span className="university-name">ShopIng</span>
            </a>
            <span className="university-degree">
              Django, React, SQL, JavaScript
            </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <a href="https://github.com/amisha-shrivastava/ITM-ResumeBuilder">
              <span className="university-name">ITM-Resume Builder</span>
            </a>
            <span className="university-degree">
              Flask, JavaScript, Oracle, Bootstrap
            </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <a href="https://github.com/amisha-shrivastava/Face-Recognition">
              <span className="university-name">
                Facial Emotion Recognition
              </span>
            </a>
            <span className="university-degree">Keras, Tensorflow, OpenCV</span>
          </div>
        </div>
      </div>
    </>
  );
}
