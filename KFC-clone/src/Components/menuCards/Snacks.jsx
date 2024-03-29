import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getSnackData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function Snacks() {
    const snacks = useSelector((store) => store.products.snacks);
  
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getSnackData());
    },8500)
    
  },[])
  return (
    <div id="snack">
          <Heading align='left' mt="3rem">Snacks</Heading>
          <SimpleGrid columns={{base:1,sm:1,md:2,lg:3}} spacing={2}> 
          {
            snacks?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard title={el.title} _id={el._id} cata={el.cata} desc={el.desc} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default Snacks
