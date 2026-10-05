import Navbar from "./commonuse/Navbar"
import Footer from "./commonuse/Footer"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firbase";
import { Contextpro } from "../Context";


function Signup() {

    const { cartItems } = useContext(Contextpro)

    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [conPass, setConPass] = useState("")
    const [err, setErr] = useState("")

    function redirctingFunc(e) {
        if (pass !== conPass) {
            setErr('Passwords do not match');
            e.preventDefault();
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, user, pass).then((res) => {
                console.log(res)
                
            }).catch(() => {
                console.log("failed")
                setErr('failed to Sign Up');
            })

            console.log("userRegisterd", { user, pass })
            navigate("/")


        }
    }


    return (
        <div  >
            <Navbar cartItems={cartItems} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", }}>
                <form style={{ width: "75%", padding: "25px", backgroundColor: "white", border: "1px solid", borderRadius: "5px" }}>
                    <h4 style={{ fontSize: "25px", color: "#0536bc" }}>Signup</h4>
                    <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                        <label style={{ display: "block", color: "black", fontSize: "17px" }}>Email:</label>
                        <input onChange={(e) => setUser(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="email" />
                    </div>

                    <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                        <label style={{ display: "block", color: "gray", fontSize: "17px" }}>Password: </label>
                        <input onChange={(e) => setPass(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="password" />
                    </div>
                    <div style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                        <label style={{ display: "block", color: "gray", fontSize: "17px" }}>Re-Password: </label>
                        <input onChange={(e) => setConPass(e.target.value)} style={{ marginTop: "5px", padding: "5px", width: "100%", border: "1px solid gray", borderRadius: "5px", }} type="password" />
                    </div>
                    <div>
                        <p style={{ color: "red", cursor: "pointer" }} >{err}</p>
                        <button onClick={redirctingFunc} className="button-style2">SignUp</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Signup