import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <div>
            {/* top left right advertisement */}
           <div className="header-image">  
            <img className="left-image" src="/assets/reklam1.png" alt="Left Advertisement" />
            <img src="/assets/reklam.png" alt="Main Advertisement" />
            <img className="right-image" src="/assets/reklam1.png" alt="Right Advertisement" />
</div>

            <div className="container">
            
               {/* number lang currency */}
                <div className="contact">
                    <img className="phone-icon" src="/assets/phone icon.png" alt="" />
                    <span>+994 50 597 80 32</span>
                </div>
                
                <div className="options">
                    <div className="dropdown">
                        <select>
                            <option>En</option>
                            <option>Ru</option>
                            <option>Az</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <select>
                            <option>AZN</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Header section */}
            <div className="header">
                <div className="logo">
                    <img src="./assets/logo.png" alt="Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <span className="search-icon"><i className="fa fa-search"></i></span>
                </div>
                <div className="icons">
                    <img style={{ width: '80px' }} src="./assets/signin.png" alt="Sign in" />
                    <img src="./assets/heart.png" alt="Favorites" />
                    <img src="./assets/store.png" alt="Cart" />
                </div>
            </div>
            
            {/* Navbar section */}
            <nav className="navbar">
                <ul>
                    <li className="dropdown-item">
                        <a href="/">Food</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Legumes</a>
                                <a href="/">Liquid oil</a>
                                <a href="/">Ketchup, Mayonnaise, Sauce</a>
                                <a href="/">Sugar, Salt, Spices, Harg</a>
                                <a href="/">Pasta</a>
                                <a href="/">Soup, Bouillon</a>
                            </div>
                            <div className="column">
                                <a href="/">Soup, Bouillon</a>
                                <a href="/">Tomato Paste, Canned, Pickled Sauce</a>
                                <a href="/">Prepared foods</a>
                                <a href="/">Flour and Bakery Products</a>
                                <a href="/">Cake ingredients</a>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown-item">
                        <a href="/">Breakfast</a>
                        <div className="dropdown-content">
                        <div className="column">
                                <a href="/">Olives, Dates</a>
                                <a href="/">Cheese</a>
                                <a href="/">Honey, Jam</a>
                                <a href="/">Yogurt</a>
                                <a href="/">Egg</a>
                            </div>
                            <div className="column">
                                <a href="/">Butter</a>
                                <a href="/">Corn Flakes, Oats</a>
                                <a href="/">Cream, Cream, Sauce</a>
                                <a href="/">Cream Chocolate, Spread</a>
                                <a href="/">Tahini, Molasses, Halva</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Snack</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Biscuits, Chocolate</a>
                                <a href="/">Chips</a>
                                <a href="/">Confectionery, Pismaniye</a>
                                <a href="/">Bar, Coverings</a>
                                <a href="/">Nuts</a>
                            </div>
                            <div className="column">
                                <a href="/">Snack</a>
                                <a href="/">Cracker</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Meat, Fish, Chicken</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Processed Meat</a>
                                <a href="/">White Meat</a>
                                <a href="/">Red Meat</a>
                            </div>
                            
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Drinks</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Fizzy Drinks</a>
                                <a href="/">Tea Coffee</a>
                                <a href="/">Water</a>
                                <a href="/">Still Drinks</a>
                            </div>
                            <div className="column">
                                <a href="/">Powdered Drinks</a>
                                <a href="/">Milk</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Personal Care</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Shower, Bath</a>
                                <a href="/">Hair Care</a>
                                <a href="/">Health Products</a>
                                <a href="/">Dental Care</a>
                                <a href="/">Hand, Body Care</a>
                                
                            </div>
                            <div className="column">
                                <a href="/">Shave Products</a>
                                <a href="/">Perfume, Deodarant</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">General Cleaning</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Washing</a>
                                <a href="/">House Cleaning</a>
                                <a href="/">Washing Up</a>
                            </div>
                            
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Home Life</a>
                        <div className="dropdown-content">
                            <div className="column">
                                <a href="/">Kitchen Helpers</a>
                                <a href="/">Paper Products</a>
                                <a href="/">Glass Ware</a>
                                <a href="/">Home Textiles</a>
                                <a href="/">Electronic</a>
                            </div>
                            
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Herbal Products</a>
                        
                    </li>
                    <li className="dropdown-item">
                        <a href="/">Campaigns</a>
                        
                    </li>
                </ul>
            </nav>
            {/* grid advertisement system */}
            <div className="angry-grid">
                <div id="item-0">&nbsp;</div>
                <div id="item-1">&nbsp;</div>
                <div id="item-2">&nbsp;</div>
            </div>
            {/* bottom advertisement */}
            <div className="under-image">
                <img className="u-image" src="/assets/yellow.png" alt="Left Advertisement" />
            </div>
        </div>
    );
}

export default Header;
