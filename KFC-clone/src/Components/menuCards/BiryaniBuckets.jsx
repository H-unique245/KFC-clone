import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function BiryaniBuckets() {
    const products = useSelector((store) => store.products.products);
  
  const dispatch = useDispatch();
  // console.log(products)
  // const data= products[0].Chicken_bucket;
  // console.log(data)

  useEffect(()=>{
    dispatch(getProducts());
  },[])
  return (
    <div id="biryani_buckets">
          <Heading align='left' mt="3rem">Biryani Buckets</Heading>
          <SimpleGrid  columns={3} spacing={2}> 
          {
            products?.map((el)=>{
                return   <Box key={el.title} maxHeight= '200vh'>
              <ProductCard title={el.title} veg={el.veg} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default BiryaniBuckets
