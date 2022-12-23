import React, { useEffect, useState } from "react";
import CartItemComponent from "../Components/CartItemComponent";
import { Link } from "react-router-dom";

import {
  deleteItem,
  getcartItem,
} from "../Redux/cartRedux/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const { data } = useSelector((store) => store.cart);
  const [products, setProducts] = useState(data);

  const dispatch = useDispatch();

  const handleclick = (id) => {
    setTimeout(() => {
      dispatch(getcartItem());
      setProducts(data);
    }, 1000);
    dispatch(deleteItem(id));
  };
  useEffect(() => {
    dispatch(getcartItem());
  }, [products]);

  return (
    <div>
      <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>

        <>
          <Button mt={4} onClick={onOpen}>
            <Text fontWeight={"bold"}> Order Now</Text>
          </Button>
          <Modal
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Visit</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>
                  <Button >Button</Button>
                </Box>
                <br/>
                <Box>
                  <Button >Button</Button>
                </Box>
                  <br/>
                <Box>
                  <Button >Button</Button>
                </Box>
                  <br/>
                <Box>
                  <Button >Button</Button>
                </Box>
                  <br/>
                <Box>
                  <Button >Button</Button>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Link
                  to={"/deal"}
                  style={{ marginRight: "10px" }}
                >
                  <Button colorScheme="blue">
                    <Text fontWeight={"bold"}> Deals</Text>
                  </Button>
                </Link>
                <Link to={"/menu"}>
                  <Button variant="ghost">
                    <Text fontWeight={"bold"} Menu>
                      Menu
                    </Text>
                  </Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </div>
      <CartItemComponent
        data={data}
        handleclick={handleclick}
      />
      <br />
      <br />
    </div>
  );
}

export default Cart;
