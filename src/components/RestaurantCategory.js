import { useState } from "react";
import {IMG_CDN_URL} from '../utils/constants'

const RestaurantCategory = (props) => {
    const menuTypes = props.data
    const [openMenuType,setOpenMenuType]= useState('');

    const changeViewToggle = (val) => {
        if(val===openMenuType){
            setOpenMenuType('')
        } else {
            setOpenMenuType(val)
        }
        
    }
    
   
    return (
        <div className="menu-type" >
                    <h3>{menuTypes?.card?.card?.title} <span className="font-size-12px">({menuTypes?.card?.card?.itemCards?.length}) {openMenuType}</span> <span className="view float-right font-size-12px"
                     onClick={() => changeViewToggle(menuTypes?.card?.card?.title)} >{openMenuType===menuTypes?.card?.card?.title ? 'Close':'View'}</span></h3>
                    <div className="" >
                    {  openMenuType === menuTypes?.card?.card?.title ?
                        menuTypes?.card?.card?.itemCards?.map(items => (
                           
                            <div  key={items.card.info.id} className="menu-item-box">
                                <div className="width-70-percent">
                                    <p className="menu-item-name bold">{items.card.info.name} - Rs {items.card.info.price/100}</p>
                                    <p>{items.card.info.description} - <span>{items.card.info.itemAttribute.vegClassifier}</span></p>
                                </div>
                                <div className="width-30-percent">
                                   { items.card.info.imageId ? <img className="product-img" src={IMG_CDN_URL +items.card.info.imageId}></img>:<p className="not-available-text">N/A</p>}
                                   <button className="add-button">Add +</button>
                                </div>
                            </div>
                            
                        )) :''
                    }
                    </div>
                </div>
    )
}

export default RestaurantCategory