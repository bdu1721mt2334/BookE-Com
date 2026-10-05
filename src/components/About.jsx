import Navbar from "./commonuse/Navbar"
import Footer from "./commonuse/Footer"
import { useContext } from "react"
import {Contextpro} from "../Context"
 
function About(  ) {
    const { cartItems } = useContext(Contextpro);
    return (
        <div className="about-container">
            <Navbar cartItems={cartItems} />
            <div className="about-content">
                <h1>About Our BookStore</h1>
                <p>
                    Welcome to <strong>The BookStore</strong> — your trusted destination
                    for discovering the best books online. We offer a wide range of
                    collections including fiction, non-fiction, educational, children’s
                    books, and rare editions.
                </p>

                <h2>What We Offer:</h2>
                <ul>
                    <li>📚 Latest arrivals every week</li>
                    <li>🎁 Exclusive member discounts</li>
                    <li>🚚 Free shipping on orders above ₹499</li>
                    <li>🕒 24/7 customer support</li>
                    <li>💳 Secure payment options</li>
                </ul>

                <h2>Special Offers:</h2>
                <ul>
                    <li>🔥 Get 10% off on your first purchase using code <strong>WELCOME10</strong></li>
                    <li>🎉 Flat 25% off on selected titles every weekend</li>
                    <li>📦 Buy 2 Get 1 Free – Fiction Bestseller Pack</li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}
export default About