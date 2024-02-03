import './Navbar.css'

function Navbar(){
    return (
        <nav className = "navbar">
            <div id = "navbar-right">
                <img className = "pageicon" src="https://i.imgur.com/PPhHEgp.png" alt="pageicon"/>
                <h1>RMAF SOFTWARE</h1>
            </div>
            <div id = "navbar-left">
                <img className = "menuicon" src="https://i.imgur.com/pVXm76B.png" alt="menuicon" onClick="displayMenu()"/>
            </div>
        </nav>
    );
}

export default Navbar;