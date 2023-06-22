import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth.jsx";
function SignUp() {
    return (
      <div className="signup-container">
          <Auth />
        </div>
    );
}

export default SignUp;