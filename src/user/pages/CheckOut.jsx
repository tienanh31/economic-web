import CheckOut_index from "../../components/CheckOut_index"

const CheckOut = () => {
    return (
        <>
<main className="main">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> My Account
                    <span></span> Checkout
                </div>
            </div>
        </div>
        <div className="container mb-80 mt-50">
            <div className="row">
                <div className="col-lg-8 mb-40">
                    <h1 className="heading-2 mb-10">Checkout</h1>
                    <div className="d-flex justify-content-between">
                        <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="row mb-50">
                        <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                            <div className="panel-collapse collapse login_form" id="loginform">
                                <div className="panel-body">
                                    <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="Username Or Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" placeholder="Password"/>
                                        </div>
                                        <div className="login_footer form-group">
                                            <div className="chek-form">
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="remember" value=""/>
                                                    <label className="form-check-label" htmlFor="remember"><span>Remember me</span></label>
                                                </div>
                                            </div>
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-md" name="login">Log in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="mb-30">Billing Details</h4>
                        <form method="post">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input type="text" required="" name="fname" placeholder="First name *"/>
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="text" required="" name="lname" placeholder="Last name *"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input type="text" name="billing_address" required="" placeholder="Address *"/>
                                </div>
                            </div>
                            <div className="row shipping_calculator">
                                <div className="form-group col-lg-6">
                                    <div className="custom_select">
                                    <input required="" type="text" name="city" placeholder="City / Town *"/>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input required="" type="text" name="zipcode" placeholder="Distrist*"/>
                                </div>
                                <div className="form-group col-lg-6">
                                    <input required="" type="text" name="phone" placeholder="Phone *"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input required="" type="text" name="cname" placeholder="Company Name"/>
                                </div>
                                <div className="form-group col-lg-6">
                                    <input required="" type="text" name="email" placeholder="Email address *"/>
                                </div>
                            </div>
                            <div className="form-group mb-30">
                                <textarea rows="5" placeholder="Additional information"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                </div>
                            </div>
                            <div id="collapsePassword" className="form-group create-account collapse in">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input required="" type="password" placeholder="Password" name="password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="ship_detail">
                                <div className="form-group">
                                    <div className="chek-form">
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="differentaddress"/>
                                            <label className="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" htmlFor="differentaddress"><span>Ship to a different address?</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseAddress" className="different_address collapse in">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" required="" name="fname" placeholder="First name *"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" required="" name="lname" placeholder="Last name *"/>
                                        </div>
                                    </div>
                                    <div className="row shipping_calculator">
                                        <div className="form-group col-lg-6">
                                            <input required="" type="text" name="cname" placeholder="Company Name"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                        <input type="text" name="billing_address" required="" placeholder="Address *"/>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="billing_address" required="" placeholder="City/Town* "/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input required="" type="text" name="state" placeholder="District *"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input required="" type="text" name="city" placeholder="Phone *"/>
                                        </div>
                                        <div className="form-group mb-30">
                                <textarea rows="5" placeholder="Additional information"></textarea>
                            </div>
                                    </div>
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="border p-40 cart-totals ml-30 mb-50">
                        <div className="d-flex align-items-end justify-content-between mb-30">
                            <h4>Your Order</h4>
                            <h6 className="text-muted">Subtotal</h6>
                        </div>
                        <div className="divider-2 mb-30"></div>
                        <div className="table-responsive order_table checkout">
                            <table className="table no-border">
                                <tbody>
                                <CheckOut_index 
                                    default_Image="public/imgs/macbook.png"
                                    Name="Macbook M1 2020"
                                    count_Product="2"
                                    total_Price="600"
                                ></CheckOut_index>
  <CheckOut_index 
                                    default_Image="public/imgs/macbook.png"
                                    Name="Macbook M1 2020"
                                    count_Product="2"
                                    total_Price="600"
                                ></CheckOut_index>
  <CheckOut_index 
                                    default_Image="public/imgs/macbook.png"
                                    Name="Macbook M1 2020"
                                    count_Product="2"
                                    total_Price="600"
                                ></CheckOut_index>                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="payment ml-30">
                        <h4 className="mb-30">Payment</h4>
                        <div className="payment_option">
                        <div className="custome-radio">
    <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios4" defaultChecked />
    <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-bs-target="#checkPayment" aria-controls="checkPayment">
      Cash on delivery
    </label>
  </div>
  <div className="custome-radio">
    <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios5" />
    <label className="form-check-label" htmlFor="exampleRadios5" data-bs-toggle="collapse" data-bs-target="#paypal" aria-controls="paypal">
      Online Gateway
    </label>
  </div>
                            <div className="payment_option">
 
</div>
                        </div>
                        <div className="payment-logo d-flex">
                            <img className="mr-15" src="public/imgs/theme/icons/payment-paypal.svg" alt=""/>
                            <img className="mr-15" src="public/imgs/theme/icons/payment-visa.svg" alt=""/>
                            <img className="mr-15" src="public/imgs/theme/icons/payment-master.svg" alt=""/>
                            <img src="public/imgs/theme/icons/payment-zapper.svg" alt=""/>
                        </div>
                        <a href="#" className="btn btn-fill-out btn-block mt-30"><i className="fi-rs-sign-out ml-15"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
        )
    }
    
    export default CheckOut