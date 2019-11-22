import React from 'react';
import items from '../items.json'
class Cart extends React.Component {
  
    render() {
            return (
                <div>
                    {items.map((itemdetail, index) => {
                        return <h1>{itemdetail.name}<br /> {itemdetail.price}</h1>
                    })}
                </div>
            )
        }
    
}

export default Cart;