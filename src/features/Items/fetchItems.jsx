import axios from "axios";
import { useEffect, useState } from "react";

const fetchUrl = "https://fakestoreapi.com/products";

const [items, setItems] = useState([]);

useEffect(() => {
  async function fetchData() {
    let fetchSite = await axios.get(fetchUrl);
    let data = await fetchSite.json();
    setItems(data);
  }
}, []);

// console.log(items);
export default items;
