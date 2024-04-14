import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../features/Items/itemsInCartSlice";
import { ItemPrice } from "./ItemPrice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const items = useSelector((state) => state.itemsInCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialTotal = items.reduce(
    (prev, curr) => prev + Number(curr.price),
    0
  );
  const [total, setTotal] = useState(initialTotal);
  // console.log(initialTotal);
  // console.log(items);
  return (
    <div className="h-vh relative">
      <div className="mt-5 grid md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 mb-20">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                srcset=""
                className="h-56"
              />
              <p className="h-12 overflow-hidden hover:overflow-auto text-center">
                {item.title}
              </p>
              <ItemPrice item={item} setTotal={setTotal} />
              <div>
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {items.length ? (
        <div className="flex-col flex text-center fixed bottom-0 left-1/2 ">
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
        <h1 className="text-red-600 text-center animate-bounce">Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
