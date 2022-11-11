import { Text } from "@chakra-ui/react";
import React, { memo, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function TimerTracker() {
    const [Timer, setTimer] = useState(140);
    const timerId = useRef(null);
   

   if (!timerId.current) {
     timerId.current = setInterval(() => {
       setTimer((prev) => prev- 1);
     }, 1000);
   }
   
    if (Timer == 0) {
         clearInterval(timerId.current);
      timerId.current = null;
     
    }
 

  return <Text>Your code will expire in 0:{Timer} sec</Text>;
}

export default memo(TimerTracker);
