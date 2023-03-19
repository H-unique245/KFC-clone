import axios from 'axios';
import { GET_PRODUCTS_BEVERAGE, GET_PRODUCTS_BOXMEAL, GET_PRODUCTS_BURGER, GET_PRODUCTS_CHICKEN, GET_PRODUCTS_CHICKENROLL, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_NEWLAUNCH, GET_PRODUCTS_SNACKS, GET_PRODUCTS_STAYHOME
    // , GET_PRODUCTS_SUCCESS
 } from "./products.actionTypes"

export const getChickenData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=chicken"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_CHICKEN,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getNewLaunchData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=launch"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_NEWLAUNCH,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getChickenRollData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=rolls"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_CHICKENROLL,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getBoxMealData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=boxmeals"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_BOXMEAL,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getBurgerData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=burger"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_BURGER,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getStayHomeData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=stayhome"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_STAYHOME,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getSnackData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=snacks"
        );
    let data= res.data  
    dispatch({type:GET_PRODUCTS_SNACKS,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
export const getBeverageData=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get(
          "https://pleasant-newt-twill.cyclic.app/products?type=beverages"
        );

    let data= res.data  
    dispatch({type:GET_PRODUCTS_BEVERAGE,payload:data});    
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}
