
import { Box, List, Link,ListItem, Text, VStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import {Link as LinkItem} from "react-scroll"
function MenuFilter() {
  return (
    <Box align='left' ml={2} >
    <Box m={0}>
        <Image h={8} src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg' alt="menu_list" />
    </Box>
      <VStack align='left'>
        <Heading>KFC Menu</Heading>
      <List align="left" spacing={2}>
        <ListItem>
          <LinkItem activeClass="active" to="chicken_buckets" spy={true} smooth={true}>
          Chicken Buckets
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem  to="new_launch" spy={true} smooth={true}>
          New Launch
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem  to="biryani_buckets" spy={true} smooth={true}>
          Biryani Buckets
          </LinkItem>
        </ListItem>
        <ListItem>
            <Link href="#box_meals" >Box Meals</Link>
          {/* <LinkItem to="stack_meals" spy={true} smooth={true}>
          Box Meals
          </LinkItem> */}
        </ListItem>
        <ListItem>
            <Link href="#burgers" >Burgers</Link>
        </ListItem>
        <ListItem>
            <Link href="#stay_home_specials" >Stay Home Specials</Link>
        </ListItem>
        <ListItem>
            <Link href="#snack" >Snacks</Link>
        </ListItem>
        <ListItem>
            <Link href="#beverages" >Beverages</Link>
        </ListItem>
      </List>
   </VStack>
    </Box>
  )
}

export default MenuFilter
// Box Meals
// Burgers
// Stay Home Specials
// Snacks
// Beverages