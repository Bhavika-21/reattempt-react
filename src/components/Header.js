import { useState } from "react";

const Header = () => {


    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="main-container">
            <div className="logo-container">
                <h4 className="logo">Food&Fun🍱</h4>
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>home</li>
                    <li>about</li>
                    <li>explore</li>
                    <li>cart</li>

                    <button onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("login");
                    }}>{btnNameReact}</button>
                </ul>

            </div>

        </div>
    )
}

export default Header;