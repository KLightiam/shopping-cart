import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
            <h1>Welcome To The Imaginary Shop</h1>
            <Link to="shop"><button>Go To Shop</button></Link>
        </>
    )

}

export default Home;