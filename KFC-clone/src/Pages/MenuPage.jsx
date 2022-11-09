// import axios from 'axios';
import React, { useEffect } from 'react';
import {GrSearch} from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/Products/products.action';
import { Box, HStack, Input, InputGroup, InputLeftElement, Stack, Text, VStack } from "@chakra-ui/react"
import ProductCard from '../Components/ProductCard';
function MenuPage() {
  const products = useSelector((store) => store.products);
  
const dispatch = useDispatch();

console.log(products)

  useEffect(()=>{
    dispatch(getProducts());
  },[])
  return (
    <div>
      <HStack p={2}>
      <Box>
      <VStack>
        <Text>Chicken Buckets</Text>
        <Text>New Launch</Text>
        <Text>Biryani Buckets</Text>
        <Text>Box Meals</Text>
        <Text>Burgers</Text>
        <Text>Stay Home Specials</Text>
        <Text>Snacks</Text>
        <Text>Beverages</Text>
      </VStack>
      </Box>
      <Box>
        <Stack>
      <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<GrSearch color='gray.300' />}
    />
    <Input type='tel' placeholder='Search Our Menu' htmlSize={4} width='auto' />
  </InputGroup>
  </Stack>
  
   <ProductCard />
      </Box>
    
      This is meals page of KFC
      </HStack>
    </div>
  )
}

export default MenuPage
