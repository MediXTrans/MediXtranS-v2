import {Reac,useEffect, useState} from "react";
import "./generateForm.css"
export default function GenerateForm  ({ resultData }) {
  // Use resultData to render the form content
  var [Age, setAge] = useState(null);
  var [Sex, setSex] = useState(null);
  var [CE, setCE] = useState(null);
  var [BS, setBS] = useState(null);
  var [SS, setSS] = useState(null);
  Age = localStorage.getItem("medixTransGenerateFormAge");
    Sex = localStorage.getItem("medixTransGenerateFormSex");
    BS = localStorage.getItem("medixTransGenerateFormBS");
    CE = localStorage.getItem("medixTransGenerateFormCE");
    SS = localStorage.getItem("medixTransGenerateFormSS");
  // useEffect(() => {
    
  //   console.log(CE);
  //   console.log(Sex);
  //   console.log(BS);
  //   console.log(Age);
  //   console.log(SS);
  // },[]);
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
                    value={Age}
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
                    value={Sex}
                    // onChange={handleTextChange}
                  ></input>
                </div>
              </div>

              <div className="notes-form-classInput">
                <div className="notes-form-input-labels">
                  <label className="notes-form-classlabel">Biological_structure<span style={{ color: "red" }}>*</span></label>
                </div>
                <input
                  type="text"
                  name="courseName"
                  value={BS}
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
                  value={CE}
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
                  value={SS}
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