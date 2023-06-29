import { React, useState } from "react";
import axios from "axios";
import { server } from "../App";
import { mediXlogo_2, Authentication_rafiki, vector_eye } from "../assets/index.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the email, password, and confirmPassword state values here
    try {
      console.log(email, password, confirmPassword);
      const data = await axios.post(
        `${server}/register`,
        {
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Registration successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw]">
      <div className="flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-[#88d2df] h-[100vh] w-[100vw] ">
        <div className=" relative items-center justify-center w-[60%] md:w-[50vw] flex-shrink-0">
          <img src={Authentication_rafiki} alt="logo" className="xl:ml-[35%] mb-[50px]" />
        </div>
        <div className="flex items-center justify-center lg:bg-[#ebebeb] w-[100%] md:w-[50vw] h-[100%] ">
          <div className=" w-[331px]  rounded-[25px] bg-[#fff] shadow-[0px,4px,4px,4px] px-[15px] ">
            <div className="my-[10px] items-center justify-center flex flex-row flex-wrap">
              <div className="w-[64px] h-[50px] flex-shrink-0">
                <img src={mediXlogo_2} alt="logo" />
              </div>
              <div className="flex flex-col text-[#000] flex-shrink-0 text-[19px] font-[Roboto] font-[600]">
                MediXtranS
              </div> 
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-start p-[5%] gap-3 text-[#9C9C9C] font-[Roboto]"
            >
              <div className="flex flex-col">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="border-[1px] border-[#9C9C9C] rounded-md px-2 py-1"
                />
              </div>
              <div className="flex flex-col justify-start ">
                <label htmlFor="password">Password</label>
                <div className="w-[100%] flex flex-row items-center border-[1px] border-[#9C9C9C] rounded-md ">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className=" px-2 py-1 rounded-md w-[90%]"
                />
                <img src={vector_eye} alt="" className=" w-[22px] h-[14.14px]"/>
                </div>
              </div>
              <div className="flex flex-col justify-start ">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="w-[100%] flex flex-row items-center border-[1px] border-[#9C9C9C] rounded-md ">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className=" px-2 py-1 rounded-md w-[90%]"
                />
                <img src={vector_eye} alt="" className=" w-[22px] h-[14.14px]"/>
                </div>
              </div>
              <div className="mt-[10px] flex flex-row text-[12px] justify-between">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <div>
                  <a href="link" className="text-[#88D2DF]">Forgot Password</a>
                </div>
              </div>
              <button type="submit" className="bg-[#88D2DF] p-2 rounded-lg font-[Inter] text-[17px] text-[#fff]">Register</button>
            </form>
            <div className="flex justify-center text-[12px] text-[#9C9C9C] mb-5">
              Already have Account? <a href="/login" className="text-[#88D2DF] pl-2">Login Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
