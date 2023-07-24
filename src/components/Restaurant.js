

import {IMG_CDN_URL} from '../utils/constants'

const CONSTANTS = IMG_CDN_URL
const Restaurant = (props) => {
    const {resData} = props
    const {cloudinaryImageId,name,cuisines,slaString,avgRating,costForTwoString} = resData.data
    return ( 
    <div className='res-card'>            
        <img className="restuarant-image" src={IMG_CDN_URL +cloudinaryImageId}></img>
        <div className='food-info'>
            <h3>{name}</h3>
            <h4>{slaString}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoString} </h4>
        </div>
    </div>
    )
}

export default Restaurant;