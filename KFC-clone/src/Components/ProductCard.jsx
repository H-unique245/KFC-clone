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
import { addToCart } from "../Redux/cartRedux/cart.actions";

function ProductCard({id,title,veg,price,image}) {
  const {data}= useSelector((store)=>store.cart);

  console.log("cart",data)
  const dispatch = useDispatch();
  return (
    <Flex p={30} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        h="370px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Box size="10px" position="absolute" top={3} right={3}>
          <BsHeart size={20} color="white" />
        </Box>
        <Image
          src={image}
          alt={`trial`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box align={"left"}>
            <Text as="b">{title}</Text>
          </Box>

          <HStack>
            <Badge align="left" variant="outline" colorScheme="red" p={1}>
              <BsTriangleFill />
            </Badge>
            <Text fontSize={"sm"}>{veg}</Text>
          </HStack>
          <Box align={"left"}>
            <Text as="b">₹{price}</Text>
          </Box>
          <Button
            onClick={() => {
              dispatch(
                addToCart({id,image,title})
              );
             console.log("added",title);
            }}
            variant="solid"
            colorScheme="red"
            position={'absolute'}
            bottom={6} right={12}
          >
            Add to Cart <FiShoppingCart />{" "}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
