import React from "react";

export default function GenerateForm  ({ resultData }) {
  console.log("this is result data");
  console.log(resultData);
  // Use resultData to render the form content
  return (
    <div>
      <h1>Generated Form</h1>
      {/* Render your form fields using the resultData */}
      {/* For example: */}
      <p>{resultData}</p>
      {/* <p>{resultData.age}</p>
      <p>{resultData.sex}</p> */}
      {/* Add more form fields as needed */}
    </div>
  );
};

