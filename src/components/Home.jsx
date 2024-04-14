import { Link } from "react-router-dom";


const Home = () => {
    return(
        <div className="items-center justify-center gap-y-8 flex flex-col h-lvh text-orange-600 bg-slate-950">
            <h1>Welcome To The Imaginary Shop</h1>
            <Link to="shop"><button>Go To Shop</button></Link>
        </div>
    )

}

export default Home;