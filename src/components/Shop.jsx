import { useState, useEffect } from "react";
import {useDispatch} from "react-redux"
import { addToCart } from "../features/Items/itemsInCartSlice";

const fetchUrl = "https://fakestoreapi.com/products";

const Shop = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      let fetchSite = await fetch(fetchUrl);
      let data = await fetchSite.json();
      setItems(data);
    })();
  }, []);
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
                  dispatch(addToCart(item));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
