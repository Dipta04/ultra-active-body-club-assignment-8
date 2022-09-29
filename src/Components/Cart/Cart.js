import React from 'react';
import "./Cart.css"

const Cart = () => {
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
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>

            <div>
               <h5>Exercise Time</h5>
               <input type=""/>
               <h5>Break Time</h5>
               <input type="" />
            </div>

            <div>
                <button>Activity Completed</button>
            </div>

        </div>
    );
};

export default Cart;