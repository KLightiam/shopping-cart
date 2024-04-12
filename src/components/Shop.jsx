import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/Items/itemsInCartSlice";

const Shop = () => {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const items = useSelector((state) => state.allItems);
  const addedToCart = useSelector((state) => state.itemsInCart);
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  console.log(items);
  console.log(addedToCart);

  return (
    <div>
      <h1>All Items</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} srcset="" />
            <p>{item.title}</p>
            <div>
              <p>Price: Ghs {item.price}</p>
              <button
                onClick={(e) => {
                  e.preventDefault;
                  if (e.target.textContent == "Remove from Cart") {
                    dispatch(removeFromCart(item));
                    e.target.textContent = "Add to Cart";
                  } else {
                    dispatch(addToCart(item));
                    e.target.textContent = "Remove from Cart";
                  }
                }}
              >
                {(addedToCart.filter((cartItem) => cartItem.id == item.id).length)?"Remove from Cart":"Add to Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
