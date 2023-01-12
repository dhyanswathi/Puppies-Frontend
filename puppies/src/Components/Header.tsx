import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <section>
            <Link to="/" className="nav-left">Home</Link>
            {/* <Link to="/About" className="nav-left">About</Link> */}
        </section>
    )
}

export default Header;