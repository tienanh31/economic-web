import Product_Cart from "../../components/Product_Cart"

const Header = () => {
   
  return (
    <>
    <header className="header-area header-style-1 header-height-2">
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo logo-width-1">
                        <a href="/"><img src="public/imgs/logo1.png" alt="logo" /></a>
                    </div>
                    <div className="header-right">
                        <div className="search-style-2">
                            <form action="#">
                            <input type="text" placeholder="Search for items..." />

                            </form>
                        </div>
                        <div className="header-action-right">
                            <div className="header-action-2">
                                <div className="search-location">
                                    <form action="#">
                                    </form>
                                </div>
                                <div className="header-action-icon-2">
                                    <a href="/favorite">
                                        <img className="svgInject" alt="Nest" src="./imgs/theme/icons/icon-heart.svg" />
                                        <span className="pro-count blue">6</span>
                                    </a>
                                    <a href="/favorite"><span className="lable">Favorites List</span></a>
                                </div>
                                <div className="header-action-icon-2">
                                    <a className="mini-cart-icon" href="/order">
                                        <img alt="Nest" src="./imgs/theme/icons/icon-cart.svg" />
                                        <span className="pro-count blue">2</span>
                                    </a>
                                    <a href="/order"><span className="lable">Cart</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <Product_Cart default_Image="public/imgs/macbook.png"
                                                          Name="Macbook M1 2020"
                                                          Price="500"
                                                          count_Product="2"
                                                          ></Product_Cart>
                                            <Product_Cart default_Image="public/imgs/dell.jpg"
                                                          Name="Dell XPS"
                                                          Price="500"
                                                          count_Product="2"
                                            ></Product_Cart>

                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                            <h4>Total <span>$1300.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <a href="/order" className="outline">View cart</a>
                                                <a href="/checkout">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-action-icon-2">
                                    <a href="/accout">
                                        <img className="svgInject" alt="Nest" src="./imgs/theme/icons/icon-user.svg" />
                                    </a>
                                    <a href="/accout"><span className="lable ml-0">Account</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                        <ul>
                                            <li>
                                                <a href="/accout"><i className="fi fi-rs-user mr-10"></i>My Account</a>
                                            </li>
                                            <li>
                                                <a href="/accout"><i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</a>
                                            </li>
                                            <li>
                                                <a href="/accout"><i className="fi fi-rs-label mr-10"></i>My Voucher</a>
                                            </li>
                                            <li>
                                            <a href=""><i className="fi fi-rs-heart mr-10"></i>My Favorites List</a>
                                            </li>
                                            <li>
                                                <a href="/accout"><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                                            </li>
                                            <li>
                                                <a href="/accout"><i className="fi fi-rs-sign-out mr-10"></i>Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    </header>
    
    
    </>
  )
}

export default Header