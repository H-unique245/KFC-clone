import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBoxMealData } from '../../Redux/Products/products.action';
import ProductCard from '../ProductCard';

function BoxMeals() {
    const boxMeal = useSelector((store) => store.products.boxMeal);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBoxMealData());
  },[])
  return (
    <div id="box_meals">
          <Heading align='left' mt="3rem">Box Meals</Heading>
          <SimpleGrid  columns={3} spacing={2}> 
          {
            boxMeal?.map((el)=>{
                return   <Box key={el._id} maxHeight= '200vh'>
              <ProductCard title={el.title} cata={el.cata} _id={el._id} desc={el.desc} price={el.price} image={el.image} />
             </Box>
            })
        }
        </SimpleGrid>

        </div>
  )
}

export default BoxMeals
