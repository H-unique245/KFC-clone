import { Box, Img, Spacer, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [isMobile] = useMediaQuery("(min-width: 768px)");
  return (
    <Box bgColor="#202124" w={"100%"}>
      <Spacer h={"180px"} />
      <Flex
        w={"90%"}
        h={"156px"}
        m="auto"
        // border={"1px solid red"}
        color={"white"}
        justifyContent={"space-evenly"}
        // flexWrap={"wrap"}
        direction={isMobile ? "row" : "column"}
      >
        <Box mr={"70px"}>
          <a href={"/"}>
            <Img
              src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
              alt="logo"
            />
          </a>
        </Box>
        <Box>
          <Text fontSize={"14px"} fontWeight={"bold"}>
            KFC Food
          </Text>

          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Menu
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Order Lookup
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Gift Card
            </Text>
          </NavLink>

          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Nutrition & Allergen
            </Text>
          </NavLink>
        </Box>
        <Box>
          <NavLink>
            <Text fontSize={"14px"} fontWeight={"bold"}>
              Support
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Get Help
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Contact Us
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              KFC Feedback
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Privacy Policy
            </Text>
          </NavLink>
        </Box>
        <Box>
          <NavLink>
            <Text fontSize={"14px"} fontWeight={"bold"}>
              Legal
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Terms and Conditions
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Privacy Policy
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Disclaimer
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Caution Notice
            </Text>
          </NavLink>
        </Box>
        <Box>
          <NavLink>
            <Text fontSize={"14px"} fontWeight={"bold"}>
              KFC India
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              About KFC
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              KFC Care
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Careers
            </Text>
          </NavLink>
          <NavLink>
            <Text fontSize={"14px"} pt={"5px"} pb={"5px"}>
              Our Golden Past
            </Text>
          </NavLink>
        </Box>

        <Box>
          <a target="_blank" rel="noreferrer" href="https://restaurants.kfc.co.in/">
            <Flex>
              <Text mt={"10px"}>
                <Icon
                  icon="carbon:location-filled"
                  color="red"
                  fontSize={"20px"}
                />
              </Text>
              <Text ml="5px" mt={"10px"} fontSize={"13px"} fontWeight={"bold"}>
                <u>Find a KFC</u>
              </Text>
            </Flex>
          </a>
        </Box>
        <Box>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.yum.kfc"
          >
            {" "}
            <Img
              src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
              alt="google_play"
            />
          </a>
        </Box>
        <Box>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://apps.apple.com/in/app/kfc-india/id915824379"
          >
            <Img
              src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
              alt="apple_store"
            />
          </a>
        </Box>
      </Flex>

      <Spacer h={"120px"} />
      <Flex justifyContent={"space-between"} w={"50%"} m="auto" ml={"550px"}>
        <Text fontSize={"12px"} color={"white"}>
          Copyright © KFC Corporation 2021 All Rights Reserved
        </Text>

        <Box>
          <Flex justifyContent={"space-around"}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/kfcindia_official/"
            >
              <Img
                src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"
                alt="instagram"
              />
            </a>
            <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/KFCIndia">
              <Img
                src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"
                alt="facebook"
              />
            </a>
            <a target={"_blank"} rel="noreferrer" href="https://twitter.com/KFC_India">
              <Img
                src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"
                alt="twiter"
              />
            </a>
          </Flex>
        </Box>
      </Flex>
      <Spacer h={"20px"} />
    </Box>
  );
}
