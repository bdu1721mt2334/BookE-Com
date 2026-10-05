import { useEffect, useState } from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import auth from "../../config/firbase";
import { signOut } from "firebase/auth";

function Navbar({ cartItems = [ ] }) {
  const navigate = useNavigate()
  const [log, setLog] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLog(true)
        console.log("UserLogin")
      } else {
        setLog(false)
        console.log("UserLogout")
      }
    })
  }, [])

  function LogOut() {
    signOut(auth)
  }

  return (


    <div style={{ padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>


      <h2 style={{ fontSize: "30px", color: "#0536bc" }}>The BookStore</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link style={{ listStyleType: "none", padding: "5px", color: "black", textDecoration: "none", fontSize: "18px", border: "2px solid #0536bc", borderRadius: "7px" }} className="hove" to={"/home"}>Home</Link>
        <Link style={{ listStyleType: "none", padding: "5px", color: "black", textDecoration: "none", fontSize: "18px", border: "2px solid #0536bc", borderRadius: "7px" }} className="hove" to={"/product"} >Product</Link>
        <Link style={{ listStyleType: "none", padding: "5px", color: "black", textDecoration: "none", fontSize: "18px", border: "2px solid #0536bc", borderRadius: "7px" }} className="hove" to={"/about"}>About</Link>
        <Link style={{ listStyleType: "none", padding: "5px", color: "black", textDecoration: "none", fontSize: "18px", border: "2px solid #0536bc", borderRadius: "7px" }} className="hove" to={"/cart"}>
          {cartItems.length > 0 && (<div className="Noti-div">
            <p className="Noti-main">🔔</p>
          </div>)} Cart </Link>


        {
          log ? <button className="button-style" onClick={LogOut}>Logout</button> : <button onClick={() => navigate("/")} className="button-style">Login</button>
        }


      </div>

    </div>
  )
}

export default Navbar