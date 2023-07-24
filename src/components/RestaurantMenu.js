import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {IMG_CDN_URL} from '../utils/constants'
import { useParams
 } from "react-router-dom";
const RestaurantMenu = () => {
    const [resInfo,setresInfo]= useState(null) ;  
    const {resId} = useParams();
    console.log(resId,'param')

    useEffect(()=>{
        fetchMenuData()
    },[])

   
    const fetchMenuData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0726295&lng=72.8844721&restaurantId='+resId)
        const jsonData = await data.json();
        console.log(jsonData)
        setresInfo(jsonData.data)
    }

    if(resInfo===null ) {
        return (<Shimmer/>)
    } 

    console.log(resInfo?.cards[0]?.card?.card?.info)
    const {name,costForTwoMessage,cuisines,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
    // const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    console.log(itemCards)
    return ( 
        <div className="res-menu-container">
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join()}</h3>
            <img  src={IMG_CDN_URL +cloudinaryImageId}></img>
            <div className="menu-list">
            {
            itemCards?.map((menuTypes,i) => (
                menuTypes?.card?.card?.itemCards?.length ? <div className="menu-type" key={i}>
                    <h3>{menuTypes?.card?.card?.title}</h3>
                    <div className="" >
                    {
                        menuTypes?.card?.card?.itemCards?.map(items => (
                            <div  key={items.card.info.id} className="menu-item-box">
                                <div className="width-70-percent">
                                    <p>{items.card.info.name} - Rs {items.card.info.price/100}</p>
                                    <p>{items.card.info.description} - <span>{items.card.info.itemAttribute.vegClassifier}</span></p>
                                </div>
                                <div className="width-30-percent">
                                   { items.card.info.imageId ? <img className="product-img" src={IMG_CDN_URL +items.card.info.imageId}></img>:<p className="not-available-text">N/A</p>}
                                </div>
                            </div>
                            
                        )) 
                    }
                    </div>
                </div>:''
               
                ))
            }
              
            </div>
        </div>
    )
}

export default RestaurantMenu;