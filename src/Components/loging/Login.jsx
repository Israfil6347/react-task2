import React, { useState } from "react";
import Input from "../InputComponent/Input";
import InputPassword from "../InputComponent/InputPassword";
import Button from "../InputComponent/Button";
import Encryption from "../../utils/Encryption";
import CryptoJS from "crypto-js";
// import { useNavigate } from "react-router-dom";
import LoginProtal from "./LoginProtal";

function Login(userInfo) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [OutputMessage, setOutputMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ErrorMessageFont, setErrorMessageFont] = useState("");
  const [ErrorPassFont, setErrorPassFont] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const emailHandler = (event) => {
    setUserName(event.target.value);
    // setUserName(userName);
  };

  const passwordHandler = (event) => {
    setUserPass(event.target.value);
  };

  var encryptObj = new Encryption();

  const loginHandler = async (event) => {
    event.preventDefault();

    const emailValidation = /\S+@\S+\.\S+/;

    if (emailValidation.test(userName)) {
      setErrorMessageFont();
    } else {
      setErrorMessageFont("invalid user name");
      return;
    }
    // if (userName.length === 0) {
    //   setErrorMessageFont();
    //   return;
    // } else {
    //   setErrorMessageFont("please enter password");
    // }
    // if (userPass.length === 0) {
    //   setErrorPassFont();
    //   return;
    // } else {
    //   setErrorPassFont("please enter password");
    // }
    console.log(ErrorPassFont);
    var hashMain = CryptoJS.MD5(userPass);
    const obj = {
      UserName: userName,
      Password: hashMain.toString(),
    };
    var objMain = { Data: encryptObj.getEncryptedData(JSON.stringify(obj)) };

    const response = await fetch(
      "http://27.147.142.178:4541/api/LoginApi/Post_v2",
      {
        method: "POST",
        body: JSON.stringify(objMain),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        localStorage.setItem("token", response.headers.get("token"));
        return response.json();
      })
      .then((data) => {
        if (data.Status === "success") {
          var obj = JSON.parse(data.Data);
          var userInfoObject = {
            userid: obj[0].userid,
            UserName: obj[0].UserName,
            UserPicture: obj[0].UserPicture,
            loginemail: obj[0].loginemail,
            Address: obj[0].Address,
            RegMobile: obj[0].RegMobile,
            RoleId: obj[0].RoleId,
            RoleName: obj[0].RoleName,
          };
          localStorage.setItem("userinfo", JSON.stringify(userInfoObject));
          //   console.log("sucess");
          setOutputMessage(userInfoObject);
          // navigate("user");
        } else {
          //   console.log("faild");
          setErrorMessage(data.Message);
        }
        console.log(OutputMessage);
      });
  };

  return (
    <LoginProtal open={isOpen} onClose={() => setIsOpen(false)}>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Login
              </h2>
              <form onSubmit={loginHandler}>
                <Input
                  userName={userName}
                  onChange={emailHandler}
                  errorMessage={ErrorMessageFont}
                  id="UserName"
                />
                <InputPassword userPass={userPass} onChange={passwordHandler} />
                <Button />
              </form>
            </div>
          </div>
        </section>
      </div>
    </LoginProtal>
  );
}

export default Login;
