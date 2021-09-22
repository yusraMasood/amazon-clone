import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-PLCC-unloggedin-header.png"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {/*Checkout Product */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
