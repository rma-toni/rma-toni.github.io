import React from 'react';
import './Navbar.css'

function Navbar(){
    const [searchValue , setSearchValue] = React.useState('');

    console.log('El usuria busco: '+searchValue);

    return (
        <nav className = "navbar">
            <div id = "navbar-right">
                <img className = "pageicon" src="https://dsm04pap002files.storage.live.com/y4mCq80On62RuNfswHUVILvxC1yjrbMw8dSDK4DBS76DWwyBHViGaWx5fY7ZlKtGy5AapCn6KdXTCO9YWOyBbCKogrspyHAAd4YQR2ft3mtErMRZ0L6kdIuQIamzSBTfGTVV4lKSb27m_g4ZY7eP2XvYI1_HvxE-SjoWwSHodXCDnyvGOeFBun-p3xuUKW6L4LT8PQLlgRSqn1gNMMKzE1xgKoWk0jtDl4Guixzar-_L4U?encodeFailures=1&width=895&height=895" alt="pageicon"/>
            </div>
            <div id = "navbar-center">
                <input
                    placeholder="Search"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
            </div>
            <div id = "navbar-left">
                <img className = "menuicon" src="https://dsm04pap002files.storage.live.com/y4mC1wowYi-IvKcx5cVJmsmtJAmW4igCVyq5AqKtW0U0IuInfuhTAtUp3Uh8mMNduHJO4VDhp_YFptes5cPriquinhKpvPC_Qhbs-qwcjW8pipdWHVu-Q9QM__V4EFonBNS69HDZbKgs5MyXVMc8C3iZZhAqBRWZIOF-hvR7avSmlSpqKypSUZOwt7AeyvpeWm50NDarqacFmy-iNT2bVU399w54w2bXBjxW3DQyKR1-Qs?encodeFailures=1&width=895&height=895" alt="menuicon" onClick={() => window.alert('We are working on this!')}/>
            </div>
        </nav>
    );
}

export default Navbar;