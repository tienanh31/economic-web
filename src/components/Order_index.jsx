const Order_index = (props) => {
    return ( 
    <tr className="pt-30">
    <td className="custome-checkbox pl-30">
        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
        <label className="form-check-label" htmlFor="exampleCheckbox1"></label>
    </td>
    <td className="image product-thumbnail pt-40"><img src={props.default_Image} alt="#"/></td>
    <td className="product-des product-name">
        <h6 className="mb-5"><a className="product-name mb-10 text-heading" >{props.Name}</a></h6>
        <div className="product-rate-cover">
        </div>
    </td>
    <td className="price" data-title="Price">
        <h4 className="text-body">${props.Price} </h4>
    </td>
    <td className="text-center detail-info" data-title="Stock">
        <div className="detail-extralink mr-15">
            <div className="detail-qty border radius">
                <a  className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                <span className="qty-val">{props.cout_Product}</span>
                <a  className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
            </div>
        </div>
    </td>
    <td className="price" data-title="Price">
        <h4 className="text-brand">${props.Price*props.cout_Product} </h4>
    </td>
    <td className="action text-center" data-title="Remove"><a href="#" className="text-body"><i className="fi-rs-trash"></i></a></td>
</tr>
     
    )
  }
  
  export default Order_index