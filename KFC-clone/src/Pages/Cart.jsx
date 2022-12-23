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
          <Button bg={"red"} onClick={onOpen}>
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
                  <Link to="/menu#chicken_buckets">
                    <Button width={"400px"}>
                      Chicken Buckets
                    </Button>
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link to="/menu#new_launch">
                    <Button width={"400px"}>
                      New Launch
                    </Button>
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link to="/menu#biryani_buckets">
                    <Button width={"400px"}>
                      Chicken Buckets
                    </Button>
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link to="/menu#stay_home_specials">
                    <Button width={"400px"}>
                      Stay Home Special
                    </Button>
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link to="/menu#box_meals">
                    <Button width={"400px"}>
                      Box Meals
                    </Button>
                  </Link>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Link
                  to={"/deals"}
                  style={{ marginRight: "10px" }}
                >
                  <Button bg={"red"} color={"white"}>
                    <Text fontWeight={"bold"}> Deals</Text>
                  </Button>
                </Link>
                <Link to={"/menu"}>
                  <Button bg={"red"} color={"white"}>
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
