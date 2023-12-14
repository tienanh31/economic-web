const CheckOut_index = (props) => {
    return (
        <tr>
        <td className="image product-thumbnail"><img src={props.default_Image} alt="#"/></td>
        <td>
            <h6 className="w-160 mb-5">
                <a  className="text-heading">{props.Name}</a>
                </h6>
                
            <div className="product-rate-cover">
            </div>
        </td>
        <td>
            <h6 className="text-muted pl-20 pr-20">x {props.count_Product}</h6>
        </td>
        <td>
            <h4 className="text-brand">${props.total_Price}</h4>
        </td>
        </tr>
    )
  }
  
  export default CheckOut_index