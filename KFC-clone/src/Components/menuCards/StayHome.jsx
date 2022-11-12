import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStayHomeData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function StayHome() {
    const stayHome = useSelector((store) => store.products.stayHome);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getStayHomeData());
  },[])
  return (
    <div id="stay_home_specials">
          <Heading align='left' mt="3rem">Stay Home Special</Heading>
          <SimpleGrid  columns={3} spacing={2}> 
          {
            stayHome?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard title={el.title} veg={el.type} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default StayHome
