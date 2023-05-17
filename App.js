import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="logo-container">
                <img src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}





const App = () => {
    return (
        <div className="app">
            <Navbar />
        </div>
    )
}

// export default App


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);



