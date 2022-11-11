import React from "react";
import {
  Text,
  Heading,
  Input,
  Button,
  Center,
  Box,
  PinInput,
  PinInputField,
  Spinner,
  Image
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
  otpLoading,
} from "../../Redux/Auth/auth.action";
import "./Signup.css";
import { useState } from "react";
import TimerTracker from "./Timer";

function Signup() {
  const [Number, setNumber] = useState("");
  const [Authinicated, setAuthinicated] = useState(true);
  const [Otp, setOtp] = useState("");
  const { loading, isAuth, error } = useSelector((store) => store.auth);
  const { token, loading2, authOtp } = useSelector((store) => store.otpVerify);
  // console.log(token);
  const dispatch = useDispatch();

  const Navigate = useNavigate();

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
    console.log(phoneNumber);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        setAuthinicated(false);
        let data = { mobile: Number };
        dispatch(authSuccess(Number));
        dispatch(authOtphandle(data));
      })
      .catch((error) => {
        dispatch(authError(""));
        Navigate("/error");
      });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
     
     
    dispatch(otpLoading());
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
        console.log("otp verify");

        
          if (token && authOtp ) {
            Navigate("/");
          } else {
            Navigate("/users/signup");
          }
      
      })
      .catch((error) => {
        console.log("error");
        Navigate("/error");
      });
  };

  return (
    <div className="Sign-up">
      <Text mb="30px">Signin/Signup </Text>
      <Center mb="20px">
        <Image
          src="/logoeatmore1.png"
          alt="logo"
          w={["20%", "20%", "20%", "20%"]}
        />
      </Center>
      <div>
        {loading ? (
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.400"
              color="blue.500"
              size="xl"
            />
          </Center>
        ) : (
          " "
        )}
      </div>
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
            <Input
              colorScheme="black"
              variant="flushed"
              type="tel"
              minlength="10"
              maxlength="10"
              placeholder="Phone Number *"
              color="black"
              mb="20px"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
            />
          ) : (
            <Center mb="20px">
              <PinInput type="alphanumeric" mask>
                <PinInputField
                  mr="5px"
                  onChange={(e) => setOtp(Otp + e.target.value)}
                />
                <PinInputField
                  mr="5px"
                  onChange={(e) => setOtp(Otp + e.target.value)}
                />
                <PinInputField
                  mr="5px"
                  onChange={(e) => setOtp(Otp + e.target.value)}
                />
                <PinInputField
                  mr="5px"
                  onChange={(e) => setOtp(Otp + e.target.value)}
                />
                <PinInputField
                  mr="5px"
                  onChange={(e) => setOtp(Otp + e.target.value)}
                />
                <PinInputField
                  mr="5px"
                  onChange={(e) => setOtp(Otp + e.target.value)}
                />
              </PinInput>
            </Center>
          )}
        </div>
        <Box id="recaptcha-container" mb="10px" />
        {Authinicated ? (
          <Text fontSize={["8px", "8px", "12px", "14px"]}>
            By “logging in to KFC”, you agree to our Privacy Policy and Terms &
            Conditions.
          </Text>
        ) : (
          <TimerTracker />
        )}
      </div>
      <div>
        <Text color="red">{error}</Text>
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
          disabled={Number.length !== 10 || Number[0] === "0" ? true : false}
        >
          Send me a Code
        </Button>
      ) : (
        <Button
          mt="30px"
          backgroundColor="black"
          colorScheme="grey"
          fontSize={{ sm: "15px" }}
          color="white"
          borderRadius="30px"
          disabled={Otp.length === 6 ? false : true}
          onClick={verifyOtp}
        >
          Submit
        </Button>
      )}
    </div>
  );
}

export default Signup;
