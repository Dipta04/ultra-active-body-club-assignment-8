import React from 'react';
import "./Activity.css"

const Activity = ({activity}) => {
 const {name,image,Time}=activity;

    return (
        <div >
            <div className='activity-container'>
            <img src={image} alt="" />
            <div className='info'>
              <h3>{name}</h3>
              <h3>Time:{Time}s</h3>
            </div>
            <div>
                <button className='btn-cart'>Add to list</button>
            </div>
            </div>
            
            
        </div>

        


    );
};

export default Activity;