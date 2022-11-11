import axios from 'axios';
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./products.actionTypes"


export const getProducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        // let res= await axios.get("https://orderserv-kfc-apac-olo-api.yum.com/dev/v1/catalogs/15895bb59f7b4bb588ee933f8cd5344a/KFCIndiaMenu-202-web-delivery");
        let res= await axios.get("http://localhost:8080/Chicken_bucket");
    // console.log(res.data.categories[0].categories);
    let data= res.data    // let data= res.data.categories[0].categories;
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})

    }
}