import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {IMG_CDN_URL} from '../utils/constants'
import { useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
   
    if(resInfo===null ) {
        return (<Shimmer/>)
    } 

    const {name,avgRating,totalRatingsString,city,costForTwoMessage,locality,cuisines,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    return ( 
        <div className="res-menu-container">
            <h1>{name} </h1>
            <h5>{locality},{city}</h5>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join()} (<span>{avgRating? avgRating+' stars':''}</span> - <span className="font-size-12px">{totalRatingsString}</span>)</h3>
            <img className="restaurant-hero-image" src={IMG_CDN_URL +cloudinaryImageId}></img>
            <div className="menu-list">
            {
            itemCards?.map((menuTypes,i) => (
                menuTypes?.card?.card?.itemCards?.length ? <RestaurantCategory data={menuTypes} key={menuTypes?.card?.card?.title}/> :''
               
                ))
            }
              
            </div>
        </div>
    )
}

export default RestaurantMenu;