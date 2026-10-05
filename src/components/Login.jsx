import Navbar from "./commonuse/Navbar"
import Footer from "./commonuse/Footer"
import { useNavigate } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firbase";
import { Contextpro } from "../Context";

function Login( ) {

    const {cartItems} = useContext(Contextpro)
    
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [err, setErr] = useState("")

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                navigate("/home")
            }
        })
    }, [])


    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, user, pass).then((res) => {
            navigate('/home');
        }).catch(() => {
            setErr("Login failed SingUp Properly")
        })


    };

    return (
        <div  >
            <Navbar cartItems={cartItems} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
                <form onSubmit={handleLogin} style={{ width: "75%", padding: "10px", backgroundColor: "white", border: "1px solid", borderRadius: "5px" }}>
                    <h4 style={{ fontSize: "25px", color: "#0536bc" }}>Login</h4>
                    <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "15px" }}>
                        <label style={{ display: "block", color: "gray", fontSize: "17px" }}>Email:</label>
                        <input onChange={(e)=>setUser(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="email" />
                    </div>
                    <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "15px" }}>
                        <label style={{ display: "block", color: "gray", fontSize: "17px" }}>Password: </label>
                        <input onChange={(e)=>setPass(e.target.value) } style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="password" />
                    </div>
                    <div>
                        <p style={{ color: "red", cursor: "pointer" }} >{err}</p>
                        <p style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")}>New user? Register here</p>
                        <button type="submit" className="button-style">Login</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Login