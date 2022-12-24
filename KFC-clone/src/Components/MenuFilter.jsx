
import { Box, List, Link,ListItem, VStack, Heading, Image, Show } from '@chakra-ui/react'
import React from 'react'
// import {Link as LinkItem} from "react-scroll"
function MenuFilter() {
  return (
    <Box align="left" ml={2} >
      <Box m={0}>
        <Image
          h={8}
          src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
          alt="menu_list"
        />
      </Box>
      
      <VStack align="left" fontSize={{ base: "sm", md: "lg" }}>
        <Heading fontSize={["15px","18px","25px","30px"]} > Menu</Heading>
        <List
          align="left"
          fontSize={["10px","10px","15px","15px"]}
          spacing={{ base: 2, md: 4 }}
        >
          <ListItem>
            <Link href="#chicken_buckets">Chicken Buckets</Link>
          </ListItem>
          <ListItem>
            <Link href="#new_launch">New Launch </Link>
          </ListItem>
          <ListItem>
            <Link href="#biryani_buckets"> Biryani Buckets</Link>
          </ListItem>
          <ListItem>
            <Link href="#box_meals">Box Meals</Link>
            {/* <LinkItem to="stack_meals" spy={true} smooth={true}>
          Box Meals
          </LinkItem> */}
          </ListItem>
          <ListItem>
            <Link href="#burgers">Burgers</Link>
          </ListItem>
          <ListItem>
            <Link href="#stay_home_specials">Stay Home Specials</Link>
          </ListItem>
          <ListItem>
            <Link href="#snack">Snacks</Link>
          </ListItem>
          <ListItem>
            <Link href="#beverages">Beverages</Link>
          </ListItem>
        </List>
        </VStack>
     
      
    </Box>
  );
}

export default MenuFilter
// Box Meals
// Burgers
// Stay Home Specials
// Snacks
// Beverages