import React from "react";
import Button from "../../components/Button";
import InputField from "../../components/ InputField";
import CheckBox from "../../components/CheckBox";
import { Link } from "react-router-dom";
import meetingImage from "../../Assets/meeting-bg.jpg";

const Login = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${meetingImage}")`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    opacity: 0.4,
    backgroundRepeat: "no-repeat",
  };

  const hrStyle = {
    border: "1px dashed #D8D8D8",
    marginTop: "3rem",
    width: "100%",
  };
  return (
    <div className="grid  grid-cols-[2fr_450px_0fr] ">
      <div className="h-auto w-auto bg-black overflow-hidden">
        <div style={backgroundImageStyle} />
      </div>
      <div className=" h-full bg-white">
        <h1 className="text-center text-title pt-10 text-2xl font-light">
          ISOMORPHIC
        </h1>
        <form className="pt-20 flex flex-col items-center px-12 ">
          <InputField
            type="text"
            placeholder="Username"
            name="username"
            onChange={() => {}}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            onChange={() => {}}
          />
          <div className="flex justify-between w-full">
            <CheckBox type="checkbox" inputTitle="Remember Me" />
            <Button
              name="Sign In"
              backgroundColor=" bg-accentBlue"
              type="submit"
              width="w-24"
              height="h-9"
            />
          </div>
          <hr style={hrStyle} />

          <div className="w-full mt-10 flex flex-col">
            <Button
              name="Sign in with Facebook"
              backgroundColor="bg-faceBookBlue"
              width="w-full"
              height="h-11"
              marginBottom="mb-3.5"
            />
            <Button
              name="Sign in with Google plus"
              backgroundColor="bg-googleOrange"
              width="w-full"
              height="h-11"
              marginBottom="mb-3.5"
            />
            <Button
              name="Sign in with Auth0"
              backgroundColor="bg-authOrange"
              width="w-full"
              height="h-11"
              marginBottom="mb-3.5"
            />
            <Button
              name="Sign in with Firebase"
              backgroundColor="bg-firebaseYellow"
              width="w-full"
              height="h-11"
              marginBottom="mb-3.5"
            />
          </div>
          <div className="flex flex-col items-center mb-2.5 mt-6 ">
            <p className="text-xs text-gray-600">
              {" "}
              <a href="#" className="hover:text-blue-500">
                {" "}
                Forgot password{" "}
              </a>{" "}
            </p>
            <p className="text-sm text-sky-600 mt-2.5">
              <Link to="signup"> Create an Isomorphic account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
