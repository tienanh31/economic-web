const  Great_Product_Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
        <div className="product-cart-wrap">
                                      <div className="product-img-action-wrap">
                                          <div className="product-img product-img-zoom">
                                              <a href="">
                                              <img className="default-img" src={props.default_Image} alt="" />
                                            <img className="hover-img" src={props.hover_Image} alt="" />
                                              </a>
                                          </div>
                                          <div className="product-action-1">
                                              <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye"></i></a>
                                              <a aria-label="Add To Wishlist" className="action-btn small hover-up" href=""><i className="fi-rs-heart"></i></a>
                                          </div>
                                          <div className="product-badges product-badges-position product-badges-mrg">
                                              <span className="new">{props.Status}</span>
                                          </div>
                                      </div>
                                      <div className="product-content-wrap">
                                          <div className="product-category">
                                              <a href="">{props.Type}</a>
                                          </div>
                                          <h2><a href="">{props.Name}</a></h2>
                                          <div className="product-rate d-inline-block">
                                              <div className="product-rating" style={{width: "80%"}}></div>
                                          </div>
                                          <div className="product-price mt-10">
                                              <span>${props.Price} </span>   
                                              <span className="old-price">${props.old_Price}</span>
                                          </div>
                                              <a href="" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                      </div>
                                  </div>
                                                </div>
   
        )
    }
    
    export default Great_Product_Card