import React from 'react';
const Cart=(props)=>{
let total=0;
for(let i=0;i<props.cart.length;i++)
{
    let pr=props.cart[i];
    total=total+pr.price;
}
let shipping =0;
if(total>35)
shipping=0;
else if(total>15)
shipping=4.99;
if(total>0)
shipping=12.99;
const tax=((total+shipping)/10).toFixed(2);
 const price =(total+shipping).toFixed(2);
 const all=((total+shipping)+(total+shipping)/10).toFixed(2);

    return (
        <div>
            <h4>
                Order Summary
            </h4>
            <h5><small>Items Ordered : {props.cart.length}</small></h5>
            <h5> <small>Price : ${price}</small></h5>
            <h5><small>Tax : ${tax}</small></h5>
            <h5><small>Tax+Total : $ {all}</small></h5>
        </div>
    );
};
export default Cart;