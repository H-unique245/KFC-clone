import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStayHomeData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function StayHome() {
    const stayHome = useSelector((store) => store.products.stayHome);
  
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getStayHomeData());
    },7500)
    
  },[])
  return (
    <div id="stay_home_specials">
          <Heading align='left' mt="3rem">Stay Home Special</Heading>
          <SimpleGrid  columns={{base:1,sm:1,md:2,lg:3}} spacing={2}> 
          {
            stayHome?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard title={el.title} _id={el._id} cata={el.cata} desc={el.desc} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default StayHome
