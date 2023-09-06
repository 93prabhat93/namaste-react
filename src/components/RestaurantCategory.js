import { useState } from "react";
import {IMG_CDN_URL} from '../utils/constants'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategory = ({data,openMenuType,setOpenMenuType}) => {
    const menuTypes = data
    const dispatch = useDispatch()
    // openMenuType = setOpenMenuType
    // const [openMenuType,setOpenMenuType]= useState(''); 
    const changeViewToggle = () => {
       setOpenMenuType()
    }

    const handleAddToCart = (item) =>{
        dispatch(addItem(item))
    }
    
   
    return (
        <div className="menu-type" >
                    <h3>{menuTypes?.card?.card?.title} <span className="font-size-12px">({menuTypes?.card?.card?.itemCards?.length}) </span> <span className="view float-right font-size-12px"
                     onClick={changeViewToggle} >{openMenuType===menuTypes?.card?.card?.title ? 'Close':'View'}</span></h3>
                    <div className="" >
                    {  openMenuType === menuTypes?.card?.card?.title ?
                        menuTypes?.card?.card?.itemCards?.map(items => (
                           
                            <div  key={items.card.info.id} className="menu-item-box">
                                <div className="width-70-percent">
                                    <p className="menu-item-name bold">{items.card.info.name} - Rs {items.card.info.price/100 || items.card.info.defaultPrice/100}</p>
                                    <p>{items.card.info.description} - <span>{items.card.info.itemAttribute.vegClassifier}</span></p>
                                </div>
                                <div className="width-30-percent">
                                   { items.card.info.imageId ? <img className="product-img" src={IMG_CDN_URL +items.card.info.imageId}></img>:<p className="not-available-text">N/A</p>}
                                   <button onClick={()=>handleAddToCart(items)} className="add-button">Add +</button>
                                </div>
                            </div>
                            
                        )) :''
                    }
                    </div>
                </div>
    )
}

export default RestaurantCategory