import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNewLaunchData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function NewLaunch() {
    const launch = useSelector((store) => store.products.launch);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getNewLaunchData());
  },[])
  return (
    <div id="new_launch">
          <Heading align='left' mt="3rem">New Launch</Heading>
          <SimpleGrid  columns={{base:1,sm:1,md:2,lg:3}} spacing={2}> 
          {
            launch?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard title={el.title} _id={el._id} cata={el.cata} desc={el.desc} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default NewLaunch
