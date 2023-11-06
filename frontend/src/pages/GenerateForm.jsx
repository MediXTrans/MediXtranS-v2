import React from "react";
import "./generateForm.css"
export default function GenerateForm  ({ resultData }) {
  console.log("this is result data");
  console.log(resultData);
  // Use resultData to render the form content
  return (
    <>
    <div className="notes-form-section">
    <div className="container">
        <div className="notes-form-main-navbar">
          <div className="notes-form-heading">Create/Edit Patient Details</div>
          <div className="notes-form-cross-sign">
          </div>
        </div>
        <div>
          <div>
            <div className="notes-form-allInput">
              <div className="notes-form-classInput">
                <div className="notes-form-input-labels">
                  <label className="notes-form-classlabel">Name<span style={{ color: "red" }}>*</span></label>
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
                    <label className="notes-form-classlabel">Age<span style={{ color: "red" }}>*</span></label>
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
                  <label className="notes-form-classlabel">Patient History<span style={{ color: "red" }}>*</span></label>
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
                  <label className="notes-form-classlabel">Clinical_event<span style={{ color: "red" }}>*</span></label>
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
                  <label className="notes-form-classlabel">Sign_symptom<span style={{ color: "red" }}>*</span></label>
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
                <button className="uploadBtn">Download Form</button>
              </div>

              {/* <div className="btn_container">
                <button className="uploadBtn" onClick={handleSubmit} disabled={disable}> Create/Edit </button>
                <button className="cancleBtn" onClick={() => setUpdateNotesDrawer(false)}>Cancel</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};