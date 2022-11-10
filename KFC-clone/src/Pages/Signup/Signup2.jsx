import { Box, Heading,Input,Text,Button} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Signup.css";
import axios from "axios";



export default  function Signup2() {
    
    const { number } = useSelector((store) => store.auth);

    const intilaState = {
      name: "",
      email: "",
      mobile: "85963224",
    };
    
    const [data, setData] = useState(intilaState);

    const handleClick = async(e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:8080/users/signup",data);

      }
    return (
      <div className="Sign-up">
        <Text mb="30px">Signin/Signup </Text>
        <Heading>WELCOME, THANK YOU FOR BEING WITH US!</Heading>
        <Text>Please let us know you more.</Text>

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
        >
          Submit
        </Button>
      </div>
    );
}