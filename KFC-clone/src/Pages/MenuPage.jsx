// import axios from 'axios';
import React, { useEffect } from 'react';
import {GrSearch} from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/Products/products.action';
import { Box, Container, Heading, HStack, Input, InputGroup, InputLeftElement, Stack, StackDivider } from "@chakra-ui/react"
import ProductCard from '../Components/ProductCard';
import MenuFilter from '../Components/MenuFilter';
function MenuPage() {
  const products = useSelector((store) => store.products);
  
const dispatch = useDispatch();
console.log(products)

  useEffect(()=>{
    dispatch(getProducts());
  },[])
  return (
      <HStack spacing={4} p={2} >
        <Box w="30%" m={8}  border="2px solid">
        <MenuFilter />
        </Box>
      <Box w="90%" h={'35rem'}  overflowY={'scroll'}>
      <Stack p={4} borderBottom="2px">
      <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<GrSearch color='gray.300' />}
    />
    <Input type='text' placeholder='Search Our Menu' fontSize={'sm'} htmlSize={3} width='15rem' />
  </InputGroup>
  </Stack>
    <Stack bgColor="blackAlpha" border={'1px sloid red'}>
  <div id="new_launch" style={{ height: 500 }}  >
          <Heading align='left' mt="3rem">New Launch</Heading>
   <ProductCard />
        </div>
        <div id="chicken_buckets" style={{ height: 500 }}>
          <Heading align='left' mt="3rem">Chiken Buckets</Heading>

   <ProductCard />
        </div>
        <div id="biryani_buckets" style={{ height: 500 }} >
        <Heading align='left' mt="3rem">Biryani Buckets</Heading>

   <ProductCard />
        </div>
        <div id="box_meals" style={{ height: 500 }}>
        <Heading align='left' mt="3rem">Box Meals</Heading>
   <ProductCard />
        </div>
  
   {/* <ProductCard /> */}
   <ProductCard />
   </Stack>
      </Box>
      </HStack>
  )
}

export default MenuPage
