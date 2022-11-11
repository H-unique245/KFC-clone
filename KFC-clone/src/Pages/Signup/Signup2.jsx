import {
  Box,
  Heading,
  Input,
  Text,
  Button,
  Spinner,
  Center,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";

import { signupHandle } from "../../Redux/Auth/auth.action";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup2() {
  const { number } = useSelector((store) => store.auth);
  const { loading, token, authnicated } = useSelector((store) => store.signup);
  const Navigate = useNavigate();
  const intilaState = {
    name: "",
    email: "",
    mobile: number,
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(intilaState);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(signupHandle(data));
    Navigate("/");
  };
  return (
    <div className="Sign-up">
      <Text mb="20px">Signin/Signup </Text>
      <Center>
        <Image
          src="/logoeatmore1.png"
          alt="logo"
          w={["20%", "20%", "20%", "20%"]}
        />
      </Center>
      <Heading mb="15px" fontSize={["12px", "16px", "25px", "25px"]}>
        WELCOME, THANK YOU FOR BEING WITH US!
      </Heading>
      <Text mb="30px" fontSize={["10px", "14px", "16px", "20px"]}>
        Please let us know you more.
      </Text>
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

      <Box>
        <Input
          colorScheme="black"
          variant="flushed"
          placeholder="First Name"
          color="black"
          mb="20px"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <Input
          colorScheme="black"
          variant="flushed"
          placeholder="Email Adress"
          color="black"
          mb="20px"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </Box>

      <Button
        mt="30px"
        backgroundColor="black"
        colorScheme="grey"
        fontSize={{ sm: "15px" }}
        color="white"
        borderRadius="30px"
        onClick={handleClick}
        disabled={data.email === "" || data.name === "" ? true : false}
      >
        Submit
      </Button>
    </div>
  );
}
