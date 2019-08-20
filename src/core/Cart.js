import React, {useState, useEffect} from 'react';
import Layout from './Layout'
import {getCart} from './cartHelpers';
import Card from './Card';
import {Link} from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, [items]);

  const showItems = items => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr/>
        {items.map((product, i) => (
          <Card 
            key={i} 
            product={product} 
            showAddToCartButton={false} 
            cartUpdate={true}
            showRemoveProductButton={true}
          />
        ))}
      </div>
    );
  }

  const  noItemMessage = () => (
    <h2>Your cart is empty. <br/><Link to="/shop">Continue shopping</Link></h2>
  )

  return (
    <Layout title="Shopping Cart" description="A live demonstration of Stoneburner Software - Add, remove, checkout or continue shopping." className="container-fluid">

      <div className="row">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemMessage()}
        </div>
        <div className="col-6">
          <h2>Show checkout/shipping opitons</h2>
        </div>
      </div>      
      
    </Layout>
  )
}

export default Cart;