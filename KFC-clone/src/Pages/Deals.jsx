import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Deals = () => {
  const navigate = useNavigate();
  return (
    <Box mt={2}>
      <Flex
        w={"full"}
        h={"50vh"}
        justifyContent="center"
        backgroundImage={"url(offer_deals_banner.svg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Stack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Heading
            color={"white"}
            align="center"
            fontWeight={700}
            lineHeight={1.2}
            textTransform={"uppercase"}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            DEALS & OFFERS
          </Heading>
        </Stack>
      </Flex>

      <Box m={5} p={5}>
        <Heading align="left" textTransform={"uppercase"}>
          {" "}
          offers for you{" "}
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="40px" mt={10}>
          <VStack h={"xl"} borderRadius={"lg"} boxShadow="base">
            <Flex
              w={"100%"}
              h={"100%"}
              alignItems="center"
              justifyContent="center"
              backgroundImage={
                "url(https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg)"
              }
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            >
              <VStack spacing={10}>
                <Heading
                  color={"white"}
                  align="center"
                  w={{ base: "50%", md: "70%" }}
                  fontWeight={700}
                  lineHeight={1.2}
                  textTransform={"uppercase"}
                  fontSize={useBreakpointValue({
                    base: "md",
                    md: "2xl",
                    lg: "3xl",
                  })}
                >
                  SELECT A KFC TO SEE LOCAL OFFERS
                </Heading>
                <Button
                  variant={"outline"}
                  mt={5}
                  color={"white"}
                  p={4}
                  borderRadius="3xl"
                >
                  Find a KFC
                </Button>
              </VStack>
            </Flex>
          </VStack>
          <VStack h={"xxl"} borderRadius={"lg"} boxShadow="base">
            <Box>
              <Image
                h="50vh"
                w="100%"
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg"
                alt="chicken_zinger"
              />
            </Box>
            <Heading color="red">1 Pc free Chicken</Heading>
            <Text
              w={{ base: "60%", md: "50%", lg: "90%" }}
              h="30%"
              overflow={"hidden"}
              mb={3}
              fontSize={{ base: "sm", md: "md", lg: "xl" }}
              align="center"
            >
              1 Pc free Chicken Zinger on a cart value of 499 or above on first
              order. Only for registerd users
            </Text>
            <HStack spacing={20}>
              {/* <Text fontSize={"xl"} textDecoration="underline">
                View Details
              </Text> */}
              <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                View All
              </Button>
              <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                Redeem
              </Button>
            </HStack>
          </VStack>

          <VStack h={"xxl"} borderRadius={"lg"} boxShadow="base">
            <Image
              h="50vh"
              w="100%"
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg"
              alt="veg_zinger"
            />
            <Heading color="red">1 Pc free Veg Zinger</Heading>
            <Text
              w={{ base: "60%", md: "50%", lg: "90%" }}
              h="30%"
              overflow={"hidden"}
              mb={3}
              fontSize={{ base: "sm", md: "md", lg: "xl" }}
              align="center"
            >
              1 Pc free Veg Zinger on a cart value of 499 or above on first
              order. Only for registerd users
            </Text>
            <HStack spacing={20}>
            <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                View All
              </Button>
              <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                Redeem
              </Button>
            </HStack>
          </VStack>

          <VStack h={"xxl"} borderRadius={"lg"} boxShadow="base">
            <Box>
              <Image
                h="50vh"
                w="100%"
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg"
                alt="add_piece"
              />
            </Box>
            <Heading color="red">1 Pc free Chicken</Heading>
            <Text
              w={{ base: "60%", md: "50%", lg: "90%" }}
              h="30%"
              overflow={"hidden"}
              mb={3}
              fontSize={{ base: "sm", md: "md", lg: "xl" }}
              align="center"
            >
              Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs
              499 or more. Applicable dor 2nd and 3rd order.
            </Text>
            <HStack spacing={20}>
            <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                View All
              </Button>
              <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                Redeem
              </Button>
            </HStack>
          </VStack>

          <VStack h={"xxl"} borderRadius={"lg"} boxShadow="base">
            <Box>
              <Image
                h="50vh"
                w="100%"
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg"
                alt="big_save"
              />
            </Box>
            <Heading color="red">Upto Rs 100 off</Heading>
            <Text
              w={{ base: "60%", md: "50%", lg: "90%" }}
              h="30%"
              overflow={"hidden"}
              mb={3}
              fontSize={{ base: "sm", md: "md", lg: "xl" }}
              align="center"
            >
              Upto Rs 100 off on min cart value of Rs 599 or more . Applicable
              on 4th order onwards.
            </Text>
            <HStack spacing={20}>
            <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                View All
              </Button>
              <Button
                onClick={() => {
                  navigate("/menu");
                }}
                borderRadius={20}
              >
                Redeem
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Deals;
