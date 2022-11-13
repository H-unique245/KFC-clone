import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import styles from "./styles/Cart.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Bux() {
  const navigate = useNavigate();
  const { price } = useSelector((store) => store.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <div>
      <Button
        _hover={"none"}
        justifyContent={"space-between"}
        borderRadius={"200px"}
        bg={"#e4002b"}
        color={"#fff"}
        className={styles.checkOut}
        onClick={onOpen}
      >
        <span>Continue to payment </span>-
        <span>₹{Math.floor(price)}</span>
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            Payment Completed
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody textAlign={"center"}>
            Thanks For Choosing Eat More We Deligted To
            Serve You <br />
            <br />
            Your Food Will Be Delivered Within 50 min <br />{" "}
            <br /> To Add More Item In The Cart Plase Vist
            the Menu
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              onClick={() => navigate("/menu")}
              colorScheme="red"
              ml={3}
            >
              Menu
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Bux;
