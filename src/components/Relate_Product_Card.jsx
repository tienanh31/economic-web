const  Relate_Product_Card = (props) => {
    return (
        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap hover-up">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <a href="" tabIndex="0">
                        <img className="default-img" src={props.default_Image} alt="" />
                                            <img className="hover-img" src={props.hover_Image} alt="" />
                        </a>
                    </div>
                    <div className="product-action-1">
                        <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                        <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="" tabIndex="0"><i className="fi-rs-heart"></i></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">{props.Status}</span>
                    </div>
                </div>
                <div className="product-content-wrap">
                    <h2><a href="" tabIndex="0">{props.Name}</a></h2>
                    <div className="rating-result" title="90%">
                        <span> </span>
                    </div>
                    <div className="product-price">
                        <span>${props.Price} </span>
                        <span className="old-price">${props.old_Price}</span>
                    </div>
                </div>
            </div>
   </div>
   
   
        )
    }
    
    export default Relate_Product_Card