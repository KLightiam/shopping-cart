import { useState } from "react";




export const ItemPrice = ({item,setTotal})=>{
    // const [price,setPrice] = useState(item.price);
    const [quantity, setQuantity] = useState(1);
    return(
        <div>
            <div>
               <button onClick={(e)=>{
                if(quantity > 1){
                    // console.log(e.target);
                    setQuantity((prev) => prev - 1);
                    setTotal((prev)=>prev - item.price);
                    // setPrice(item.price * quantity);
                }
               }}>-</button>
               <p>{quantity}</p>
               <button onClick={(e)=>{
                setQuantity((prev) => prev + 1);
                setTotal((prev)=>prev + item.price);
                // setPrice(item.price * quantity);
               }}>+</button> 
            </div>
            <p>Price: {item.price * quantity}</p>
        </div>
    )
}