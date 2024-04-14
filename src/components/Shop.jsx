import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/Items/itemsInCartSlice";

const Shop = () => {
  // const [buttonText, setButtonText] = useState("Add to Cart");
  const items = useSelector((state) => state.allItems);
  const addedToCart = useSelector((state) => state.itemsInCart);
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  // console.log(items);
  // console.log(addedToCart);

  return (
    <div>
      <h1 className="text-center">All Items</h1>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-6 gap-x-3 ml-4">
      {items.map((item) => {
        return (
          <div className="flex flex-col gap-2" key={item.id}>
            <img className="h-40 w-32" src={item.image} alt={item.title} srcset="" />
            <p className="h-12 overflow-hidden hover:overflow-auto">{item.title}</p>
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
                {addedToCart.filter((cartItem) => cartItem.id == item.id).length
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Shop;
