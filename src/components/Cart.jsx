import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../features/Items/itemsInCartSlice";
import { ItemPrice } from "./ItemPrice";
import {useNavigate} from "react-router-dom";
import { useState } from "react";


const Cart = () => {
  const items = useSelector((state) => state.itemsInCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialTotal = items.reduce((prev,curr) => (prev) + Number(curr.price),0);
  const [total, setTotal] = useState(initialTotal);
  // console.log(initialTotal);
  // console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} srcset="" />
            <p>{item.title}</p>
            <ItemPrice item={item} setTotal={setTotal}/>
            <div>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
      {items.length ? (
        <div>
          <p>Total: {total.toFixed(2)}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Thanks for your order");
              dispatch(resetCart());
              navigate("../shop");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        "Cart is Empty"
      )}
    </div>
  );
};

export default Cart;
