import Restaurant, { withPromotedLabel } from './Restaurant';
import Shimmer from './Shimmer';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Body = () => {
    const [resListData,setResListData] = useState([]);
    const [showTopRatedRestaurantsText,setShowTopRatedRestaurantsText] = useState('Top restaurants');
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchtext,setSearchText] = useState('')
    const RestaurantWithPromotedLabel = withPromotedLabel(Restaurant)

    useEffect(()=>{
        fetchData();
    },[] )

     const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0726295&lng=72.8844721&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        console.log(json)
        console.log(resList)
        if(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResListData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } else {
            setResListData(resList?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredResList(resList?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        
    }

   
return (!resListData || resListData.length === 0 )? <Shimmer/>: (
        <div className='body'>
            <div className='action-box'>
                <div className='search-bar-container'>
                    <input className='search-field' onKeyUp={(e)=>{
                        if(e.target.value.length > 2) {
                            const filteredRes =  resListData.filter((res)=> res.info.name.toLowerCase().includes(e.target.value.toLowerCase()) || res.info.cuisines.join(',').toLowerCase().includes(e.target.value.toLowerCase()))
                            setFilteredResList(filteredRes)
                        } else if(e.target.value.length < 1) {
                            setFilteredResList(resListData)
                        }
                    }} 
                    value={searchtext} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} placeholder="search restuarants"></input>
                    <button className='search-btn' onClick={()=>{
                        const filteredRes = resListData.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                        setFilteredResList(filteredRes)
                    }}>Search</button>
                </div>
                <div className='top-rated-filter'>
                    <button className='top-rated-button' onClick={()=>{
                        if(showTopRatedRestaurantsText == 'Top restaurants'){
                            const filteredList = resListData.filter((res)=> +res.info.avgRating > 4);
                            setFilteredResList(filteredList)
                        } else {
                            setFilteredResList(resListData)
                        }
                        showTopRatedRestaurantsText === 'Top restaurants' ? setShowTopRatedRestaurantsText('Show all'):setShowTopRatedRestaurantsText('Top restaurants');

                    }}>
                        {showTopRatedRestaurantsText }
                    </button>
                </div>
            </div>
            <div className='res-container'>
            {
                filteredResList.map(restaurant => (
                <Link  key={restaurant.info.id} to={'restaurant/'+restaurant.info.id}> 
                {restaurant.info.name.toLowerCase().includes('burger') || restaurant.info.name.toLowerCase().includes('pizza')?<RestaurantWithPromotedLabel resData={restaurant}/>: <Restaurant resData={restaurant}/>}</Link>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;