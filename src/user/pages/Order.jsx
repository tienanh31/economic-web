import Order_index from "../../components/Order_index"

const Order = () => {
    return (
        <>
<main className="main">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> My Account
                    <span></span> Order
                </div>
            </div>
        </div>
        <div className="container mb-80 mt-50">
            <div className="row">
                <div className="col-lg-8 mb-40">
                    <h1 className="heading-2 mb-10">Your Cart</h1>
                    <div className="d-flex justify-content-between">
                        <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                        <h6 className="text-body"><a href="#" className="text-muted"><i className="fi-rs-trash mr-5"></i>Clear Cart</a></h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="table-responsive shopping-summery">
                        <table className="table table-wishlist">
                            <thead>
                                <tr className="main-heading">
                                    <th className="custome-checkbox start pl-30">
                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value=""/>
                                        <label className="form-check-label" htmlFor="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colSpan="2">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col" className="end">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            <Order_index
                                default_Image="public/imgs/macbook.png"
                                Name="Macbook M1 2020"
                                Price="300"
                                cout_Product="2"
                            >
                            </Order_index>
                            <Order_index
                                default_Image="public/imgs/macbook.png"
                                Name="Macbook M1 2020"
                                Price="300"
                                cout_Product="2"
                            >
                            </Order_index>
                            <Order_index
                                default_Image="public/imgs/macbook.png"
                                Name="Macbook M1 2020"
                                Price="300"
                                cout_Product="2"
                            >
                            </Order_index>
                            <Order_index
                                default_Image="public/imgs/macbook.png"
                                Name="Macbook M1 2020"
                                Price="300"
                                cout_Product="2"
                            >
                            </Order_index>
                            <Order_index
                                default_Image="public/imgs/macbook.png"
                                Name="Macbook M1 2020"
                                Price="300"
                                cout_Product="2"
                            >
                            </Order_index>
                            </tbody>
                        </table>
                    </div>
                    <div className="divider-2 mb-30"></div>
                    <div className="cart-action d-flex justify-content-between">
                        <a href="/shop" className="btn "><i className="fi-rs-arrow-left mr-10"></i>Continue Shopping</a>
                    </div>
                    <div className="row mt-50">
                        <div className="col-lg-7">
                            <div className="calculate-shiping p-40 border-radius-15 border">
                                <h4 className="mb-10">Calculate Shipping</h4>
                                <p className="mb-30"><span className="font-lg text-muted">Shipping Fee:</span><strong className="text-brand">5%</strong></p>
                                <form className="field_form shipping_calculator">
                                    <div className="form-row row">
                                        <div className="form-group col-lg-6">
                                            <input required="required" placeholder="City" name="name" type="text"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input required="required" placeholder="District" name="name" type="text"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="p-40">
                                <h4 className="mb-10">Apply Coupon</h4>
                                <p className="mb-30"><span className="font-lg text-muted">Using A Coupon</span></p>
                                <form action="#">
                                    <div className="d-flex justify-content-between">
                                        <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter..."/>
                                        <button className="btn"><i className="fi-rs-label mr-10"></i>Apply</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="border p-md-4 cart-totals ml-30">
                        <div className="table-responsive">
                            <table className="table no-border">
                                <tbody>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Subtotal</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h4 className="text-brand text-end">$12000</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colSpan="2">
                                            <div className="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Shipping</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h5 className="text-heading text-end">Free</h5></td> </tr> <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Estimate for</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h5 className="text-heading text-end">Ho Chi Minh city</h5></td> </tr> <tr>
                                        <td scope="col" colSpan="2">
                                            <div className="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Total</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h4 className="text-brand text-end">$12000</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a href="#" className="btn mb-20 w-100">Proceed To CheckOut<i className="fi-rs-sign-out ml-15"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
        )
    }
    
    export default Order