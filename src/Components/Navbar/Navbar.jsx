import './Navbar.css'

const Navbar =()=>{
    return(
        <nav className="navbar">
            <div className="navbar-logo">Product Details</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/Products">Products</a></li>
            </ul>
            <button className="navbar-button">Sign In</button>
        </nav>
    );
}
export default Navbar;