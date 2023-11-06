import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./generateForm.css";

export default function GenerateForm({ resultData }) {
  const formRef = useRef(null);
  const handleDownload = () => {
    const input = formRef.current;

    const pdfWidth = input.offsetWidth * 1.5; // Increase the width by a factor, adjust as needed
    const pdfHeight = input.offsetHeight; // Get the height of the content

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "px", [pdfWidth, pdfHeight]); // Set orientation to landscape ("l") and specify width and height
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("form.pdf");
    });
  };
  console.log("this is result data");
  console.log(resultData);
  // Use resultData to render the form content
  return (
    <>
      <div className="notes-form-section" ref={formRef}>
        <div className="container">
          <div className="notes-form-main-navbar">
            <div className="notes-form-heading">
              Create/Edit Patient Details
            </div>
            <div className="notes-form-cross-sign"></div>
          </div>
          <div>
            <div>
              <div className="notes-form-allInput">
                <div className="notes-form-classInput">
                  <div className="notes-form-input-labels">
                    <label className="notes-form-classlabel">
                      Name<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    // value={notesDetails.name}
                    // onChange={handleTextChange}
                    required
                  ></input>
                </div>

                <div className="horizonInput">
                  <div className="horizonclassInput">
                    <div className="notes-form-input-labels">
                      <label className="notes-form-classlabel">
                        Age<span style={{ color: "red" }}>*</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      name="branch"
                      // value={notesDetails.branch}
                      // onChange={handleTextChange}
                    ></input>
                  </div>
                  <div className="horizonclassInput">
                    <div className="notes-form-input-labels">
                      <label className="notes-form-classlabel">Sex</label>
                    </div>
                    <input
                      type="text"
                      name="college"
                      // value={notesDetails.college}
                      // onChange={handleTextChange}
                    ></input>
                  </div>
                </div>

                <div className="notes-form-classInput">
                  <div className="notes-form-input-labels">
                    <label className="notes-form-classlabel">
                      Patient History<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="courseName"
                    // value={notesDetails.courseName}
                    // onChange={handleTextChange}
                  ></input>
                </div>

                <div className="notes-form-classInput">
                  <div className="notes-form-input-labels">
                    <label className="notes-form-classlabel">
                      Clinical_event<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="resourceLink"
                    // value={notesDetails.resourceLink}
                    // onChange={handleTextChange}
                  ></input>
                </div>
                <div className="notes-form-classInput">
                  <div className="notes-form-input-labels">
                    <label className="notes-form-classlabel">
                      Sign_symptom<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="resourceLink"
                    // value={notesDetails.thumbnailUrl}
                    // onChange={handleTextChange}
                  ></input>
                </div>

                <div className="notes-form-classInput">
                  <div className="notes-form-input-labels">
                    <label className="notes-form-classlabel">description</label>
                  </div>
                  <textarea
                    type="text"
                    name="description"
                    // value={notesDetails.description}
                    // onChange={handleTextChange}
                  ></textarea>
                </div>
                <div className="btn_container">
                  <button className="uploadBtn" onClick={handleDownload}>
                    Download Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
