import Navbar from "./commonuse/Navbar"
import Footer from "./commonuse/Footer"
import homewelcome from "../imgs/homewelcome.jpg"; 
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contextpro } from "../Context";

function Home() {

    const {cartItems } = useContext(Contextpro)

    return (
        
        <div>
            <Navbar cartItems={cartItems} />
            <div style={{ position: "relative" }}>
                <img src={homewelcome} alt="Home Welcome" style={{width:"100%"}} />
                <Link to="/product" style={{position:"absolute", right:"930px",top:"380px",}} className="button-style" >Shop Now</Link>
            </div>
            <Footer />
        </div>
    )
}
export default Home