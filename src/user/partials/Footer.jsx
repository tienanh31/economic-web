const Footer = () => {
    return (
    <footer className="main">
        <section className="newsletter mb-15 wow animate__animated animate__fadeIn" style={{ backgroundImage: `url(public//imgs/banner.jpg)`}}>    
        <div className="container">
            <div className="row" >
                <div className="col-lg-12">
                    <div className="position-relative newsletter-inner" >
                    <div className="newsletter-content" >
                            <h2 className="mb-20">
                            Receive instant notifications when  <br />
                            new products are available
                            </h2>

                            <form className="form-subcriber d-flex">
                                <input type="email" placeholder="Your emaill address" />
                                <button className="btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="featured section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                        <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay="0">
                            <div className="banner-icon">
                                <img src="public//imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">Best prices & offers</h3>
                                <p>Order $500 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div className="banner-icon">
                                <img src="public//imgs/theme/icons/icon-2.svg" alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">Free delivery</h3>
                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <div className="banner-icon">
                                <img src="public//imgs/theme/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">Great daily deal</h3>
                                <p>When you sign up</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <div className="banner-icon">
                                <img src="public//imgs/theme/icons/icon-4.svg" alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">Wide assortment</h3>
                                <p>Mega Discounts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <div className="banner-icon">
                                <img src="public//imgs/theme/icons/icon-5.svg" alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">Easy returns</h3>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                        <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <div className="banner-icon">
                                <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">Safe delivery</h3>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-padding footer-mid">
    <div className="container pt-15 pb-20">
    <div className="row">
        <div className="col">
            <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                <div className="logo mb-15">
                    <p className="font-lg text-heading">Awesome grocery store website template</p>
                </div>
                <ul className="contact-infor">
                    <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>UIT, Thu Duc, Ho Chi Minh city</span></li>
                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>1900-0000</span></li>
                    <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="" /><strong>Email:</strong><span><a  className="__cf_email__" data-cfemail="dcafbdb0b99c92b9afa8f2bfb3b1">test@gmail.edu.vn</a></span></li>
                    <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt="" /><strong>Hours:</strong><span>8:00 - 18:00, Mon - Sat</span></li>
                </ul>
            </div>
        </div>
        <div className="footer-link-widget col">
            <h4 className="widget-title " >Company </h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            </div>
            <div className="footer-link-widget col">
            <h4 className="widget-title">Account</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
                <li><a href="#">Sign In</a></li>
                <li><a href="#">View Cart</a></li>
                <li><a href="#">My Favorite List</a></li>
                <li><a href="#">Track My Order</a></li>
                <li><a href="#">Shipping Details</a></li>
            </ul>
        </div>
        <div className="footer-link-widget widget-install-app col">
            <h4 className="widget-title">Install App</h4>
            <p className="">From App Store or Google Play</p>
            <div className="download-app">
                <a href="#" className="hover-up mb-sm-2 mb-lg-0"><img className="active" src="public//imgs/theme/app-store.jpg" alt="" /></a>
                <a href="#" className="hover-up mb-sm-2"><img src="public//imgs/theme/google-play.jpg" alt="" /></a>
            </div>
            <p className="mb-20">Secured Payment Gateways</p>
            <img className="" src="public//imgs/theme/payment-method.png" alt="" />

            </div>
        </div>
    </div>
</section>
<div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
            <div className="row align-items-center">
                <div className="col-12 mb-30">
                    <div className="footer-bottom"></div>
                </div>
                <div className="col-xl-4 xcol-lg-6 text-center d-none d-xl-block">
                    <div className="hotline d-lg-inline-flex">
                        <img src="public//imgs/theme/icons/phone-call.svg" alt="hotline" />
                        <p>1900 - 00000<span>24/7 Support Center</span></p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                    <div className="mobile-social-icon">
                        <h6>Follow Us</h6>
                        <a href="#"><img src="public//imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                        <a href="#"><img src="public//imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                        <a href="#"><img src="public//imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                        <a href="#"><img src="public//imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                        <a href="#"><img src="public//imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
    
    export default Footer