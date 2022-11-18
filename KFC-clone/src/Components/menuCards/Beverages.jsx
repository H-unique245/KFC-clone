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
          <Heading align='left' mt="3rem" fontSize={["10px","18px","25px","30px"]} >Beverages</Heading>
          <SimpleGrid  columns={{base:1,sm:1,md:2,lg:3}} spacing={2}> 
          {
            beverage?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard _id={el._id} desc={el.desc} cata={el.cata} title={el.title} veg={el.type} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default Beverages
