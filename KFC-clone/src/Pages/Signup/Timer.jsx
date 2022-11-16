import { Text, Button, Center } from "@chakra-ui/react";
import React, { memo, useRef } from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TimerTracker({ Otp, verifyOtp }) {
  const [Timer, setTimer] = useState(130);
  const timerId = useRef(null);
  const Navigate = useNavigate();

  if (!timerId.current) {
    timerId.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }

  if (Timer === 0) {
    clearInterval(timerId.current);
    timerId.current = null;
    setTimeout(() => {
      Navigate("/error");
    }, 2000);
  }

  return (
    <div>
     
      <Text fontSize={["12px","15px","18px","20px"]} color={Timer === 0 ? "red" : "black"}>
        Your code will expire in 0:{Timer} sec
      </Text>
      <Center>
        {Timer === 0 ? (
          <Link fontSize={["12px", "15px", "18px", "20px"]} to="/signup"> Please Try again otp Time limit expiry </Link>
        ) : (
          " "
        )}
      </Center>
      <Button
        mt="20px"
        backgroundColor="black"
        colorScheme="grey"
        fontSize={{ sm: "15px" }}
        color="white"
        borderRadius="30px"
        disabled={Otp.length !== 6 || Timer === 0 ? true : false}
        onClick={() => verifyOtp()}
      >
        Submit
      </Button>
    </div>
  );
}

export default memo(TimerTracker);
