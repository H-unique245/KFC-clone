// import axios from 'axios';
import React, { useEffect } from 'react';
import {GrSearch} from 'react-icons/gr';
import { useDispatch, } from 'react-redux';
import { getProducts } from '../Redux/Products/products.action';
import { Box,  HStack, Input, InputGroup, InputLeftElement,Stack } from "@chakra-ui/react"
// import ProductCard from '../Components/ProductCard';
import MenuFilter from '../Components/MenuFilter';
import ChikckenBucket from '../Components/menuCards/ChikckenBucket';
import NewLaunch from '../Components/menuCards/NewLaunch';
import BiryaniBuckets from '../Components/menuCards/BiryaniBuckets';
import BoxMeals from '../Components/menuCards/BoxMeals';
import Burgers from '../Components/menuCards/Burgers';
import StayHome from '../Components/menuCards/StayHome';
import Snacks from '../Components/menuCards/Snacks';
import Beverages from '../Components/menuCards/Beverages';
function MenuPage() {
  // const products = useSelector((store) => store.products.products);
  
  const dispatch = useDispatch();
  // console.log(products)
  // const data= products[0].Chicken_bucket;
  // console.log(data)

  useEffect(()=>{
    dispatch(getProducts());
  },[])
  return (
      <HStack  p={2} >
        <Box w="30%" pl={10} mb={15} pb={20} >
        <MenuFilter />
        </Box>
      <Box w="90%" h={'35rem'}  overflowY={'scroll'}>
      <Stack p={4} borderBottom="2px" bgColor="blackAlpha.200">
      <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<GrSearch color='gray.300' />}
    />
    <Input type='text' placeholder='Search Our Menu' fontSize={'sm'} htmlSize={3} width='15rem' />
  </InputGroup>
  </Stack>
    <Stack bgColor="blackAlpha.200">

        <ChikckenBucket />
        <NewLaunch />
        <BiryaniBuckets />
        <BoxMeals />
        <Burgers />
        <StayHome />
        <Snacks />
        <Beverages />
  
   </Stack>
      </Box>
      </HStack>
  )
}

export default MenuPage
