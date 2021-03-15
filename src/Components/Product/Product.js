import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product=(props)=>{
    const {name,img,seller,price,stock}=props.pd;
    return(
        <div className="product">
            <div className="product-img">
            
           <img src={img} alt=""/>
            </div>
            <div >
              <h4 className="product-title">{name}</h4>
              <br/>
              <p>by {seller}</p>
              <br/>
              <p>${price}</p>
              <br/>
              <p>only {stock} left in stock - order soon</p>
              <br/>
              <button onClick={()=>props.cart(props.pd)} className="button"><FontAwesomeIcon icon={faShoppingCart} /> <small>Add To Cart</small></button>
              
            </div>

        </div>
    );
};
export default Product;
