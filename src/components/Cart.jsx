import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/Items/itemsInCartSlice";
const Cart = () => {
  const items = useSelector((state) => state.itemsInCart);
  const dispatch = useDispatch();
  // console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} srcset="" />
            <p>{item.title}</p>
            <div>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
