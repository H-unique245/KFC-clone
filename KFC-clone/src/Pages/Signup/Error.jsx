import React from "react";

import { Text, Center,Heading,Button,Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Error() {
const {error}=useSelector((store)=>store.auth)
 console.log(error)
    const Navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        Navigate("/signup");
 }

    return (
      <div className="Sign-up">
        <Text mb="30px">Signin/Signup </Text>
        <Center mb="40px">
          <Image
            src="/logoeatmore1.png"
            alt="logo"
            w={["20%", "20%", "20%", "20%"]}
          />
        </Center>

        <Heading mb="40px">
          {error
            ? error
            : "Something Went wrong Please"}{" "}
          <Link to="/signup"> Try again</Link>
        </Heading>

        <Button mt="20px" onClick={handleClick}>
          Go Back
        </Button>
      </div>
    );




}