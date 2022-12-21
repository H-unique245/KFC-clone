import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { BsHeart, BsTriangleFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getcartItem,
  updateDec,
  updateInc,
  updateQty,
} from "../Redux/cartRedux/cart.actions";

function ProductCard({
  _id,
  title,
  price,
  cata,
  desc,
  image,
}) {
  const [count, setCount] = useState(0);
  const { data } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // const cart = useSelector((state) => { // console.log(state.cart.data);
  //   return (
  //     state.cart.data.find((item) => item.id === _id) || { qty: 0 }
  //   );
  // });
  // data.id===_id -->qty --> +1
  // const checkCart= data.map((el)=>{
  //   if(el.id===_id){
  //     return  el
  //   }
  //   return false
  // });
  // useEffect(() => {
  //   dispatch(getcartItem());
  // },[data])

  // console.log(checkCart);
  const toast = useToast({
    containerStyle: {
      bgColor: "red",
    },
  });

  return (
    <Flex
      p={[0, 0, 30, 30]}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        // h="370px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Box
          size="10px"
          position="absolute"
          top={3}
          right={3}
        >
          <BsHeart size={20} color="white" />
        </Box>
        <Image
          h="full"
          w="full"
          src={image}
          alt={title}
          roundedTop="lg"
        />

        <Box p="6">
          <Box h={"3rem"} align={"left"}>
            <Text
              as="b"
              fontSize={["10px", "10px", "15px", "15px"]}
            >
              {title}
            </Text>
          </Box>

          <HStack h={6}>
            <Badge
              align="left"
              variant="outline"
              colorScheme="red"
              p={1}
            >
              <BsTriangleFill />
            </Badge>
            <Text fontSize={["7px", "7px", "sm", "sm"]}>
              Non-veg
              {/* <span style={{fontStyle:"italic" }}> {desc ? `◉ [${desc.split("[").splice(-1)}`: null} </span> */}
            </Text>
          </HStack>
          <Box h={"1rem"} m={1} align={"left"}>
            <Text
              as="b"
              fontSize={["10px", "10px", "15px", "15px"]}
            >
              ₹{price}
            </Text>
          </Box>
          <Box
            h={["2rem", "2rem", "6rem", "6rem"]}
            m={1}
            mt={2}
            fontSize={["8px", "8px", "14px", "14px"]}
            fontWeight={"black"}
            align={"left"}
          >
            <Text>{desc}</Text>
          </Box>

          {
            count === 0 ? (
              <Button
                onClick={() => {
                  setCount(count + 1);
                  const el = {
                    id: _id,
                    image,
                    price,
                    cata,
                    title,
                    qty: count + 1,
                  };
                  dispatch(addToCart(el));
                  console.log(el);
                  // console.log(title,"added to cart");
                  //  console.log("added",title);
                  toast({
                    title: "Success",
                    description:
                      "Item Added to cart successfully !",
                    status: "success",
                    position: "top",
                    duration: 2000,
                    isClosable: true,
                  });
                }}
                variant="solid"
                colorScheme="red"
              >
                Add to Cart <FiShoppingCart />{" "}
              </Button>
            ) : (
              <Button variant="solid" colorScheme="green">
                Added to Cart <FiShoppingCart />{" "}
              </Button>
            )

            //   (<HStack alignContent={'center'}>

            //     <Button colorScheme={'red'} onClick={()=>{setCount(count-1)
            //    const el={
            //       id:_id,image,price,title,qty:count-1
            //   }
            //   dispatch(updateDec(el.id));
            // }}>-</Button>

            //     <Text >{count}</Text>

            //     <Button colorScheme={'red'} onClick={()=>{setCount(count+1)
            //    const el={
            //       id:_id,image,price,title,qty:count+1
            //   }
            //   dispatch(updateInc(el.id));
            // }}>+</Button>

            //   </HStack>)
          }
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
