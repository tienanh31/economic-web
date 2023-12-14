import { useState } from "react"

const Favorite_index = (props) => {
    const [className, setClassName] = useState(() => {
        if (props.Status === "In Stock") {
          return "stock-status in-stock mb-0";
        } else if (props.Status === "Out Stock") {
          return "stock-status out-stock mb-0";
        } else {
          return "";
        }
      }); 
    return (
        <tr className="pt-30">
        <td className="custome-checkbox pl-30">
            <input className="htmlForm-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
            <label className="htmlForm-check-label" htmlFor="exampleCheckbox1"></label>
        </td>
        <td className="image product-thumbnail pt-40"><img src={props.default_Image} alt="#" /></td>
        <td className="product-des product-name">
        <h6><a className="product-name mb-10" href="">{props.Name}</a></h6>
            <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: "90%"}}></div>
                </div>
                <span className="font-small ml-5 text-muted"> (4.0)</span>
            </div>
        </td>${1}
        <td className="price" data-title="Price">
            <h3 className="text-brand">${props.Price}</h3>
        </td>
        <td className="text-center detail-info" data-title="Stock">
            <span className={className}> {props.Status} </span>
        </td>
        <td className="text-right" data-title="Cart">
            <button className="btn btn-sm">Add to cart</button>
        </td>
        <td className="action text-center" data-title="Remove">
            <a  className="text-body"><i className="fi-rs-trash"></i></a>
        </td>
    </tr>
    )
  }
  
  export default Favorite_index