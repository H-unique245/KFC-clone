import React from "react";
import {
  Text,
  Heading,
  Input,
  Button,
  Center,
  Box,
  // Spinner,
  Image,
} from "@chakra-ui/react";
import { auth } from "../../Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authLoading,
  authSuccess,
  authError,
  authOtphandle,
  // otpLoading,
} from "../../Redux/Auth/auth.action";
import "./Signup.scss";
import { useState } from "react";
import TimerTracker from "./Timer";
import {
  AUTH_LOGIN_REQ_ERROR,
  AUTH_OTP_SUCCESS,
} from "../../Redux/Auth/auth.type";
import { memo } from "react";
import Loading from "../../Components/Loading/Loading";

function Signup() {
  const [Number, setNumber] = useState("");
  const [Authinicated, setAuthinicated] = useState(true);
  const [Otp, setOtp] = useState("");

  const { loading } = useSelector((store) => store.auth);
  const { token, authOtp} = useSelector((store) => store.otpVerify);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
// console.log(loading2)
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoading());
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    if (Number === "" || Number === undefined) {
      let data = "Please Enter Mobile Number";
      dispatch(authError(data));
      return;
    }
    if (Number.length > 10) {
      if (Number[0] !== "0") {
        dispatch(authError("Please Enter a Valid mobile Number"));
        return;
      } else if (Number.length < 10) {
        dispatch(authError("Please Enter a Valid mobile Number"));
        return;
      }
    }
    const phoneNumber = "+91" + Number;
  
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setAuthinicated(false);
        let data = { mobile: Number };
        dispatch(authSuccess(Number));
        dispatch(authOtphandle(data));
      })
      .catch((error) => {
        dispatch(authError("Mobile Number not verify"));
        Navigate("/error");
      });
  };

  const verifyOtp = (e) => {
   

    if (Otp.length !== 6) {
      dispatch(authError(""));
      return;
    }
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(Otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        dispatch({ type: AUTH_OTP_SUCCESS });
        if (token && authOtp) {
          Navigate("/");
        } else {
          Navigate("/users/signup");
        }
      })
      .catch((error) => {
        dispatch({ type: AUTH_LOGIN_REQ_ERROR });
        Navigate("/error");
      });
  };

  return (
    <div className="Sign-up">
      <Heading fontSize="23px" mb="25px">
        {Authinicated ? "Signin / Signup" : "Signin"}
      </Heading>
      <Center mb="20px">
        <Image
          src="/logoeatmore1.png"
          alt="logo"
          w={["20%", "20%", "20%", "20%"]}
        />
      </Center>
      {/* <div>{loading ? <Loading /> : " "}</div> */}
      {
        <>
          {" "}
          <div>
            {Authinicated ? (
              <div>
                <Heading fontSize={["10px", "10px", "20px", "20px"]}>
                  LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE
                </Heading>
                <Heading fontSize={["10px", "10px", "20px", "20px"]} mb="20px">
                  NUMBER!
                </Heading>
              </div>
            ) : (
              <Heading fontSize={["10px", "10px", "20px", "20px"]}>
                WE JUST TEXTED YOU
              </Heading>
            )}
            {Authinicated ? (
              ""
            ) : (
              <Text mt="20px" mb="35px">
                Please enter the verification code we just sent to {Number}
              </Text>
            )}
            <div>
              {Authinicated ? (
                <> 
                {!loading ?     
                <Input
                  colorScheme="black"
                  variant="flushed"
                  type="tel"
                  minLength="10"
                  maxLength="10"
                  placeholder="Phone Number *"
                  color="black"
                  mb="20px"
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                />: <Loading/>} </>
              ) : (
                <Center mb="20px">
                  <input
                    className="otp-pin"
                    type="text"
                    name="pin"
                    onChange={(e) => setOtp(e.target.value)}
                    pattern=" [0-9] {6}"
                    maxLength="6"
                  />
                </Center>
              )}
            </div>
            <Box id="recaptcha-container" mb="10px" />
            {Authinicated ? (
              <Text fontSize={["8px", "8px", "12px", "14px"]}>
                By “logging in to KFC”, you agree to our Privacy Policy and
                Terms & Conditions.
              </Text>
            ) : (
              <TimerTracker Otp={Otp} verifyOtp={verifyOtp} />
            )}
          </div>
          <div>
            <Text color="red" mt="10px">
              {Number.length !== 10 && Number.length !== 0
                ? "Plaese Enter a 10 digit Number"
                : ""}
            </Text>
          </div>
          {Authinicated ? (
            <Button
              mt="30px"
              onClick={handleSubmit}
              backgroundColor="black"
              colorScheme="grey"
              fontSize={{ sm: "15px" }}
              color="white"
              borderRadius="30px"
              p="4% 7%"
              disabled={ loading ||
                Number.length !== 10 || Number[0] === "0" ? true : false
              }
            >
              Send me a Code
            </Button>
          ) : (
            ""
          )}
        </>
      }
    </div>
  );
}

export default memo(Signup);
