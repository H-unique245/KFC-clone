import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBurgerData } from '../../Redux/Products/products.action';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard';

function Burgers() {
    const burger = useSelector((store) => store.products.burger);
  
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getBurgerData()); 
    },6500)
   
  },[])
  return (
    <div id="burgers">
      <Heading
        align="left"
        mt="3rem"
        fontSize={["10px", "18px", "25px", "30px"]}
      >
        Burgers{" "}
      </Heading>
      <Center>{burger.length === 0 ? <Loading /> : ""}</Center>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
        {burger?.map((el) => {
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

export default Burgers
