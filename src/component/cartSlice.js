import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import {toast} from "react-toastify"

const initialState={
cartItems: [],
cartTotalQuentity:0,
cartTotalAmount:0,

};

const cartSlice = createSlice ({
    name :"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const ItemTndex=state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(ItemTndex>=0){
                state.cartItems[ItemTndex].cartTotalQuentity+=1;
                toast.info("increase product quentity",{
                    position:"bottom-left"
                }) 
     
            }else{
                const tempproduct={...action.payload , cartTotalQuentity:1}
                state.cartItems.push(tempproduct)
                toast.success(`added ${action.payload.category} to shopping cart`,{
                    position:"bottom-left"
                }) 
            }
            
           
            // localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        

        increase(state,action){
            const ItemTndex=state.cartItems.findIndex((item)=>item.id === action.payload.id);
            state.cartItems[ItemTndex].cartTotalQuentity+=1;
        },
        decrease(state,action){
            const ItemTndex=state.cartItems.findIndex((item)=>item.id === action.payload.id); 
           if (state.cartItems[ItemTndex].cartTotalQuentity > 0){state.cartItems[ItemTndex].cartTotalQuentity-=1 } 
              
        },
        Removecart(state,action){
            state.cartItems=(state.cartItems?.filter((item)=>item.id !== action.payload));
        },
        
      

    }
})
export const {addToCart,increase,decrease,Removecart}=cartSlice.actions;

export default cartSlice.reducer;



















// localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :