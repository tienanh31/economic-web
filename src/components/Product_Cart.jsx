const Product_Cart = (props) => {
    return (
      <>
      <li>
                                                <div className="shopping-cart-img">
                                                    <a href=""><img alt="" src={props.default_Image} /></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                <h4><a href="">{props.Name}</a></h4>
                                                    <h4><span>{props.count_Product} × </span>${props.Price}</h4>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
        </li>
      
      </>
    )
  }
  
  export default Product_Cart