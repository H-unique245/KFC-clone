import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChickenRollData } from "../../Redux/Products/products.action";
import ProductCard from "../ProductCard";

function BiryaniBuckets() {
  const chicken_roll = useSelector((store) => store.products.chicken_roll);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getChickenRollData());
    }, 4000);
  }, []);
  return (
    <div id="biryani_buckets">
      <Heading align="left" mt="3rem">
        Chicken Roll
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
        {chicken_roll?.map((el) => {
          return (
            <Box key={el.title} maxHeight="200vh">
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

export default BiryaniBuckets;
