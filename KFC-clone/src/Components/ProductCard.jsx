import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { BsHeart, BsTriangleFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getcartItem, updateInc, updateQty } from "../Redux/cartRedux/cart.actions";

function ProductCard({_id,title,veg,price,image}) {
  // const {data}= useSelector((store)=>store.cart);
  const cart = useSelector((state) => {

    // console.log(state.cart.data);

    return (
      state.cart.data.find((item) => item.id === _id) || { qty: 0 }
    );
  });
  // data.id===_id -->qty --> +1
  // console.log("cart",data)
  const dispatch = useDispatch();
  return (
    <Flex
      p={30}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        h="370px"
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
        <Image src={image} alt={`trial`} roundedTop="lg" />

        <Box p="6">
          <Box align={"left"}>
            <Text as="b">{title}</Text>
          </Box>

          <HStack>
            <Badge
              align="left"
              variant="outline"
              colorScheme="red"
              p={1}
            >
              <BsTriangleFill />
            </Badge>
            <Text fontSize={"sm"}>{veg}</Text>
          </HStack>
          <Box align={"left"}>
            <Text as="b">₹{price}</Text>
          </Box>

          {
            cart.qty === 0 ? (<Button
              onClick={() => {
                dispatch(
                  
                  addToCart({
                    _id,
                    image,
                    title,
                    price,
                  })
                  );
                  dispatch(getcartItem());
                  console.log(title,"added to cart");
              //  console.log("added",title);
              }}
              variant="solid"
              colorScheme="red"
              position={'absolute'}
              bottom={6} right={12}
            >
              Add to Cart <FiShoppingCart />{" "}
            </Button>) : (<div>

              <button data-cy="product-increment-cart-item-count-button" onClick={ console.log("Increament") }>+</button>
    
              <h4 data-cy="product-count">{cart.qty}</h4>
    
              <button data-cy="product-decrement-cart-item-count-button" onClick={() =>console.log("Decreament")}>-</button>
              
              <button data-cy="product-remove-cart-item-button" onClick={() => console.log("remove")} >Remove Item</button>
            </div>)
          }
          
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
