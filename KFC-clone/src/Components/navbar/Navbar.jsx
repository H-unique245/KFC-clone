import "./navbar.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import {
  Button,
  Image,
  Show,
  Center,
  Box,
  Hide,
  Flex,
  Text,
  Stack,
  Input,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../Redux/Auth/auth.action";
import { HamburgerIcon } from "@chakra-ui/icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Sidebar from "./sidebar";

const GetData = async (values) => {
  let res = await axios.post(
    `https://eat-more3.onrender.com/users/singleuser`,
    values
  );
  return res;
};

const Navbar = () => {
  const [name, setname] = useState("signup");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [location, setLocation] = useState("");
  const { price } = useSelector((store) => store.cart);
  let ID = JSON.parse(localStorage.getItem("id"));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authLogout());
    setname("signup");
  };

  const handleLocationState = (event) => setLocation(event.target.value);

  const handleLocationFunction = () => {
    onOpen();
  };

  const idCollecter = () => {
    let datas = { _id: ID };
    GetData(datas)
      .then((res) => {
        let firstName = res.data.split(" ");
        setname(firstName[0]);
      })
      .catch((e) => {
        setname("signup");
        console.log(e);
      });
  };
  console.log(ID);

  useEffect(() => {
    if (ID) {
      idCollecter();
    }
  }, [ID]);

  const handleIt = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Added the set location feature here */}
      <Box>
        <Hide below="md">
          <Box bg="#fff" boxShadow="base">
            <Center>
              <Flex p="5px 1% 0" gap={8} alignItems="center">
                <Text>
                  <LocationOnIcon
                    style={{ color: "#e4002b" }}
                    fontSize="small"
                  />
                  Allow location access for local store
                </Text>
                {location ? (
                  <Button
                    onClick={handleLocationFunction}
                    bg="black"
                    color="red"
                    _hover={{ bg: "#e4002b", color: "white" }}
                  >
                    {location}
                  </Button>
                ) : (
                  <Button
                    bg="black"
                    color="white"
                    onClick={handleLocationFunction}
                    _hover={{ bg: "#e4002b", color: "white" }}
                  >
                    Set Location
                  </Button>
                )}
              </Flex>
            </Center>
          </Box>
          <Modal isOpen={isOpen} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <b>Enter Your Location</b>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody mb={4}>
                <Stack>
                  <Input
                    value={location}
                    onChange={handleLocationState}
                    placeholder="Enter Your Location"
                    size="sm"
                    mb={4}
                  />
                  <Button _hover={{ bg: "black", color: "white" }} mb={100} onClick={onClose}>Submit</Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Hide>
      </Box>
      <Box zIndex={1000} boxShadow="base" position="sticky" top="0px"></Box>

      {/* Main Navbar      */}
      <div className="nav_main">
        <div className="left_side">
          <Link to="/">
            <Image className="logo_img" src="/logoeatmore1.png" alt="" />
          </Link>
          <Show breakpoint="(min-width: 680px)">
            <b>
              <Link className="link" to="/menu">
                Menu
              </Link>
            </b>
            <b>
              <Link className="link" to="/deals">
                Deals
              </Link>
            </b>
          </Show>
        </div>
        <Show breakpoint="(min-width: 680px)">
          <div className="right_side">
            <span>
              <img src="/login2.png" alt="" />
            </span>
            <b>
              <Link className="link" to={ID ? "/" : "/signup"}>
                {name}
              </Link>
            </b>
            {ID ? (
              <Button
                colorScheme="grey"
                onClick={handleClick}
                color="white"
                bgColor="black"
              >
                Signout
              </Button>
            ) : (
              ""
            )}

            <h6 className="cartCountItems">₹ {price}</h6>

            <Button bgColor="white" onClick={() => navigate("/cart")}>
              <img className="cart_img" src="/cart.svg" alt="" />
            </Button>
          </div>
        </Show>
        <Show breakpoint="(max-width: 680px)">
          <Sidebar
            price={price}
            handleClick={handleClick}
            ID={ID}
            name={name}
          />
        </Show>
      </div>
    </>
  );
};

export default Navbar;
