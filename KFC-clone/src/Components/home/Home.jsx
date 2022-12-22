import "./home.css";
import React from 'react';
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import {Box, Hide,Heading,Grid, GridItem, Center, Image} from "@chakra-ui/react";
import Line from "../Line";
import { Carousels } from "../carousels/Carousels";
import { MenuCards } from "../menuCards/MenuCards";
import Offer from "../home_footer/Offer";
import Footer from "../home_footer/Footer";
import { Button } from '../main_button/Button';
import { useNavigate } from "react-router-dom";
import loading_gif from "./loading_gif.gif";


const browseCategoriesDataFromApi = () => {
  return fetch(`https://apicategories.vercel.app/browseCategories`).then((res) =>
    res.json()
  );
};

const Home = () => {

  const [index, setIndex] = useState(0);
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    
  const navigate= useNavigate()

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    useEffect(() => {
      getdatafromBrowseCategories();
    }, []);

    const getdatafromBrowseCategories = () => {
      setIsLoading(true);
      setIsError(false);
      browseCategoriesDataFromApi()
        .then((res) => {
          // setIsLoading(false)
          setCategoriesData(res);
        })
        .catch((err) => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    if (isLoading) {
      return (
        <Center>
          <Image z-index="10" src={loading_gif} />
        </Center>
      );
    }

  return (
    <>
      <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>

        <Button onClick={() => {
          navigate('/menu')
        }}>Start Order</Button>
      </div>

        {/* Carousel Begin */}
      <Box>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=988&fit=fill&fm=webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/Na9oR4t8WKmSjIuy5pg4U/2fef58b44c29bbb4341ed116bac84f44/KFC_Maggi__Banner__1440x396px__2_.jpg?w=988&fit=fill&fm=webp"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=988&fit=fill&fm=webp"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=988&fit=fill&fm=webp"
              alt="Forth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=988&fit=fill&fm=webp"
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Box>

      {/* Carousel End */}

      {/* <div className="slider">
        <Carousels
          img1={"./banner11.webp"}
          img2={"./banner2.webp"}
          img3={"./banner3.webp"}
          img4={"./banner4.webp"}
          img5={"./banner5.webp"}
        ></Carousels>
      </div> */}

    <Hide below="sm">
        <Box p="0 150px">
          <Box h="50px">
            <Line />
          </Box>
          <Box>
            {/* <VStack> */}
            <Heading fontWeight="bolder" as="h1" size="lg">
              WELCOME TO KFC!
            </Heading>
            {/* </VStack> */}
          </Box>
        </Box>
      </Hide>
      <Box p="5% 8% 0" mb="50px" mt="50px">
        <Heading as="h1" size="lg">
          BROWSE CATEGORIES
        </Heading>
      </Box>

      <Grid
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
        }}
        m="auto auto"
        // width="80%"
        p="0 10%"
        gap={5}
        rowGap={10}

       
        // width={{md:"80%"}}
      >
        {categoriesData?.map((item) => (
          <GridItem justifyContent="center" height="fit-content" m="auto auto" borderRadius="8px" key={item.id} w="90%" boxShadow="base">
            <NavLink to={`/menu`}>
            {/* <a href={`${item.cate}`}> */}
              <Image w="100%" borderRadius="8px 8px 0 0"  src={item.image} />
              <Heading m="15px auto" size="sm">
                {item.name}
              </Heading>
              {/* </a> */}
            </NavLink>
          </GridItem>
        ))}
      </Grid>

      <Box h="40px" ></Box>

      {/* <div className="userDiv">
        <img className="bandImg" src="./band.png" alt="" />
        <h1 className="welcome_text">
          WELCOME TO EAT MORE!
        </h1>
      </div> */}

      {/* <div className="home_menu">
        <h1 className="browse">BROWSE CATEGORIES</h1>
        <br />
        <div className="home_menu_item">
          <MenuCards img={"./hotdeals.jpg"} title={"HOT DEALS"} ></MenuCards>
          <MenuCards img={"./chickenbucket.jpg"} title={"CHICKEN BUCKETS"}></MenuCards>
          <MenuCards img={"./hotlauches.jpg"} title={"HOT LAUNCHES"}></MenuCards>
          <MenuCards img={"./boxmeal.jpg"} title={" BOX MEALS"}></MenuCards> 
        </div> 

        <div className="home_menu_item">
          <MenuCards img={"./burgers.jpg"} title={"BURGERS"}></MenuCards>
          <MenuCards img={"./biryanibucket.jpg"} title={"BIRIYANI BUCKETS"}></MenuCards>
          <MenuCards img={"./snack.jpg"} title={"SNACK"}></MenuCards>
          <MenuCards img={"./viewallmenu.svg"} title={"View All Menu"}></MenuCards>
        </div>

      </div> */}

      <Offer />
  
      
    </>
  )
}

export default Home