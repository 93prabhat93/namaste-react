import { useSelector } from "react-redux"
import {IMG_CDN_URL} from '../utils/constants'
import { addItem, clearCart } from "../utils/cartSlice"
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    const removeItemFromCart = (index) =>{
        dispatch(removeItem(index))
    }
    const addItemToCart = (items) =>{
        dispatch(addItem(items))
    }
    return (
        <div className="cart-page">
            <div className="action-box">
                <h1>Cart</h1>
                <button onClick={handleClearCart} className="clear-cart">Clear cart</button>
            </div>
            
            {
                 cartItems.map((items,index) => (
                           
                    <div  key={items.card.info.id+index} className="menu-item-box">
                        <div className="width-70-percent">
                            <p className="menu-item-name bold">{items.card.info.name} - Rs {items.card.info.price/100 || items.card.info.defaultPrice/100}</p>
                            <p>{items.card.info.description} - <span>{items.card.info.itemAttribute.vegClassifier}</span></p>
                        </div>
                        <div className="width-30-percent">
                           { items.card.info.imageId ? <img className="product-img" src={IMG_CDN_URL +items.card.info.imageId}></img>:<p className="not-available-text">N/A</p>}
                           <div className="action-box margin-zero">
                                <button onClick={()=>addItemToCart(items)} className="cart-add-remove">Add</button>
                                <button onClick={()=>removeItemFromCart(index)} className="cart-add-remove">Remove</button>
                           </div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
       
    )
}

export default Cart;