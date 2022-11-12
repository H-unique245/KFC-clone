import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getChickenData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function ChikckenBucket() {
    // const products = useSelector((store) => store.products.products);
  const chicken = useSelector((store) => store.products.chicken);
   const dispatch = useDispatch();
  // console.log(products)
  console.log("chicken",chicken)
;
  // const data= products[0].Chicken_bucket;
  // console.log(data)

  useEffect(()=>{
    // dispatch(getProducts());
    dispatch(getChickenData())
  },[])
  return (
    <div id="chicken_buckets">
          <Heading align='left' mt="3rem">Chicken Buckets</Heading>
          <SimpleGrid  columns={3} spacing={2}> 
          {
            chicken?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard _id={el._id} title={el.title} veg={el.type} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}
// desc
// image
// price
// title
// type
// _id
export default ChikckenBucket
