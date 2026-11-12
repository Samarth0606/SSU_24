import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ApiCalling() {

    const [allRestaurantArr,setAllRestaurantArr] = useState([]);

    useEffect(()=>{
        async function calling(){
            const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            let resp = await axios.get(API)
            console.log(resp.data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurantArr(resp.data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling();
    },[])

  return allRestaurantArr

}

export default ApiCalling