import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBoxMealData } from '../../Redux/Products/products.action';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard';

function BoxMeals() {
    const boxMeal = useSelector((store) => store.products.boxMeal);
  
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getBoxMealData());
    },5500)
    
  },[])
  return (
    <div id="box_meals">
      <Heading
        align="left"
        mt="3rem"
        fontSize={["10px", "18px", "25px", "30px"]}
      >
        Box Meals
      </Heading>
      <Center>{boxMeal.length === 0 ? <Loading /> : ""}</Center>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
        {boxMeal?.map((el) => {
          return (
            <Box key={el._id} maxHeight="200vh">
              <ProductCard
                title={el.title}
                cata={el.cata}
                _id={el._id}
                desc={el.desc}
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

export default BoxMeals
