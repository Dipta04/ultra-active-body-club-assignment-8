import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import "./Shop.css"

const Shop = () => {
    const [activities,setActivities] = useState([]);

    useEffect(()=>{
        fetch('active.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    return (
        <div className='shop-container'>

            <div className='activities-container'>
                {
                    activities.map(activity=><Activity
                    key={activity.id}
                    activity={activity}
                    >
                    </Activity>)
                }

            </div>

            <div className='cart-container'>

            </div>
            
        </div>
    );
};

export default Shop;