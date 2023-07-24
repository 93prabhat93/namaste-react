import Restaurant from './Restaurant';
import Shimmer from './Shimmer';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Body = () => {
    const [resListData,setResListData] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchtext,setSearchText] = useState('')

    useEffect(()=>{
        fetchData();
    },[] )

     const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0726295&lng=72.8844721&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        console.log(json)
        setResListData(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredResList(json?.data?.cards[2]?.data?.data?.cards)
    }

   
return resListData.length === 0 ? <Shimmer/>: (
        <div className='body'>
            <div className='action-box'>
                <div className='search-bar-container'>
                    <input className='search-field' value={searchtext} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} placeholder="search restuarants"></input>
                    <button className='search-btn' onClick={()=>{
                        const filteredRes = resListData.filter((res)=> res.data.name.toLowerCase().includes(searchtext.toLowerCase()) )
                        setFilteredResList(filteredRes)
                    }}>Search</button>
                </div>
                <div className='top-rated-filter'>
                    <button className='top-rated-button' onClick={()=>{
                        
                        const filteredList = resListData.filter((res)=> +res.data.avgRating > 4);
                        setFilteredResList(filteredList)
                        console.log(resListData)
                    }}>
                        Show Top Rated Restuarants
                    </button>
                </div>
            </div>
            <div className='res-container'>
            {
                filteredResList.map(restaurant => (
                <Link  key={restaurant.data.id} to={'restaurant/'+restaurant.data.id}> <Restaurant resData={restaurant}/></Link>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;