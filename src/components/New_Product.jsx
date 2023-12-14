const  New_Product = (props) => {
    return (
        <div className="single-post clearfix">
        <div className="image">
            <img src={props.default_Image} alt="#" />
        </div>
        <div className="content pt-10">
            <h5><a href="">{props.Name}</a></h5>
            <p className="price mb-0 mt-5">${props.Price}</p>
            <div className="product-rate">
                <div className="product-rating" style={{width: "90%"}}></div>
            </div>
        </div>
    </div>
   
        )
    }
    
    export default New_Product