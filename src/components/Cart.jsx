import React, { useState, useEffect, useContext } from "react";
import Navbar from "./commonuse/Navbar"
import Footer from "./commonuse/Footer"
import { useNavigate } from "react-router-dom";
import auth from "../config/firbase";
import axios from "axios";
import { Contextpro } from "../Context";

function Cart() {

    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(Contextpro)
    
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [add, setAdd] = useState("")
    const [num, setNum] = useState("")
    const [log, setLog] = useState(false)
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                setLog(true)
                console.log("UserLogin")
            } else {
                setLog(false)
                console.log("UserLogout")
            }
        })

        return unsubscribe
    }, [])

    
    const handleconfirmOrder = async (event) => {
        event.preventDefault();
        const bookTitles = cartItems.map((item) => item.title);

        if(!name || !add || !num){
            alert("Fill all fields");
            return;
        }

        const data = {
            name: name,
            address: add,
            mobile: num,
            books: bookTitles
        };

        try {
            const response = await axios.post("http://localhost:5000/confirm-order", data);
            console.log(response.data)
            alert("Order Confirmed!");
            clearCart();
        } catch (e) {
            console.log(e)
             alert("Failed to confirm order");
        }
        
        
};

return (
    <div>
        <Navbar />

        <h2 style={{ fontSize: "30px", color: "red", textAlign: "center" }}>Your Cart</h2>
        {cartItems.length === 0 ? (
            <button onClick={()=> navigate("/product") } className="button-style">Add Items</button>
            
        ) : (

            <div>
                {cartItems.map((item, index) => (
                    <div key={index} style={{ border: "1px solid green", padding: 10, marginBottom: 10, display: "flex", gap: "20px", width: "70%", marginLeft: "14%" }}>
                        <img src={item.img} alt={item.title} width="200" />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => decreaseQuantity(item)}>-</button>
                            <button onClick={() => increaseQuantity(item)}>+</button><br /><br />
                            <button onClick={() => removeFromCart(item)} className="button-style2">Remove Item</button>
                        </div>
                    </div>
                ))}

                {
                    log ? <div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", }}>
                            <form onSubmit={handleconfirmOrder} style={{ width: "75%", padding: "15px", backgroundColor: "white", border: "1px solid", borderRadius: "5px" }}>
                                <h4 style={{ fontSize: "25px", color: "#0536bc" }}>Address Details</h4>
                                <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                                    <label style={{ display: "block", color: "black", fontSize: "17px" }}>Name:</label>
                                    <input onChange={(e)=>setName(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="text" />
                                </div>


                                <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                                    <label style={{ display: "block", color: "gray", fontSize: "17px" }}>Address: </label>
                                    <input onChange={(e)=> setAdd(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="text" />
                                </div>
                                <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                                    <label style={{ display: "block", color: "gray", fontSize: "17px" }} > Mobile No:</label>
                                    <input onChange={(e)=> setNum(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="tel" placeholder="Enter 10-digit number" />
                                </div>
                                <div>
                                    <button type="submit" className="button-style">Confirm Order</button>
                                </div>
                            </form>
                        </div>
                    </div> : <button style={{ marginLeft: "638px" }} onClick={() => navigate("/")} className="button-style">LogIn After Order</button>


                }



            </div>
        )}
        <Footer />

    </div>
);
}

export default Cart;
