const  Product_Card = (props) => {
    return (
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">

        <div className="product-cart-wrap mb-30">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="">
                                        <img className="default-img" src={props.default_Image} alt="" />
                                            <img className="hover-img" src={props.hover_Image} alt="" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Add To Wishlist" className="action-btn" href=""><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">{props.Status}</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="">{props.Type}</a>
                                    </div>
                                    <h2><a href="">{props.Name}</a></h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{width: "90%"}}></div>
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">By <a href="">{props.Brand}</a></span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>${props.Price}</span>
                                            <span className="old-price">${props.old_Price}</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href=""><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

   
        )
    }
    
    export default Product_Card