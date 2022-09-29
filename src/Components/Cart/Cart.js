import React, { useState } from 'react';
import "./Cart.css"

const Cart = ({time}) => {
      const [count,setCount]=useState(0);
      const increaseCountOne=()=>setCount(10);
      const increaseCountTwo=()=>setCount(20);
      const increseCountThree=()=>setCount(30);
      const increseCountFour=()=>setCount(40);
    


    return (
        <div>
            <div>
            <h4>Dipta Karmakar</h4>
            <p><small>Chittagong,Bangladesh</small></p>
            <p>Weight:70kg</p>
            <p>Height:5.6</p>
            <p>Age:20</p>
            </div>

            <div>
                <h5>Add a Break</h5>
                <div className='break-time'>
                    <button onClick={increaseCountOne}>10s</button>
                    <button onClick={increaseCountTwo}>20s</button>
                    <button onClick={increseCountThree}>30s</button>
                    <button onClick={increseCountFour}>40s</button>
                </div>
            </div>

            <div>
               <h5>Exercise Time:{time}</h5>
               <h5>Break Time:{count}</h5>
               
            </div>

            <div>
                <button>Activity Completed</button>
            </div>

        </div>
    );
};

export default Cart;