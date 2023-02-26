import { Box, Center, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getChickenData } from '../../Redux/Products/products.action';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard';

function ChikckenBucket() {
    // const products = useSelector((store) => store.products.products);
  const { chicken, loading } = useSelector((store) => store.products);
 
   const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
        dispatch(getChickenData())
    },1000)
  
  },[])

 
  return (
    <div id="chicken_buckets">
      <Heading
        align="left"
        mt="3rem"
        fontSize={["10px", "18px", "25px", "30px"]}
      >
        Chicken Buckets
      </Heading>
      <Center>{chicken.length === 0 ? <Loading /> : ""}</Center>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
        {chicken?.map((el) => {
          return (
            <Box key={el._id} maxHeight="200vh">
              <ProductCard
                _id={el._id}
                title={el.title}
                cata={el.cata}
                desc={el.desc}
                veg={el.type}
                price={el.price}
                image={el.image}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
export default ChikckenBucket
