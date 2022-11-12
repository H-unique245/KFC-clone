import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBeverageData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function Beverages() {
    const beverage = useSelector((store) => store.products.beverage);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBeverageData());
  },[])
  return (
    <div id="beverages">
          <Heading align='left' mt="3rem">Beverages</Heading>
          <SimpleGrid  columns={3} spacing={2}> 
          {
            beverage?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard title={el.title} veg={el.type} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default Beverages
