import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import "./Shop.css"

const Shop = () => {
    const [activities,setActivities] = useState([]);

    useEffect(()=>{
        fetch('active.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    const [time,setTime]=useState(0);
    const increaseTime=()=>setTime(time+60);

    return (
        <div className='shop-container'>

            <div className='activities-container'>
                {
                    activities.map(activity=><Activity
                    key={activity.id}
                    activity={activity}
                    increaseTime={increaseTime}
                    >
                    </Activity>)
                }

            </div>

            <div className='cart-container'>
                <Cart time={time}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;