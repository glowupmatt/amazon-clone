import React from "react";
import Header from "./Header";
import "./CheckOut.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "./CheckOutProduct";

function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <Header />

      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout-title">Your shopping Basket</h2>
          </div>
          <div className="in-basket-container">
            {basket.map((item) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
