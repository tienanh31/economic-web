const Comment_index = (props) => {
    return (
<div className="single-comment justify-content-between d-flex mb-30">
<div className="user justify-content-between d-flex">
    <div className="thumb text-center">
        <img src={props.Avatar} alt="" />
        <a href="#" className="font-heading text-brand">{props.Name}</a>
    </div>
    <div className="desc">
        <div className="d-flex justify-content-between mb-10">
            <div className="d-flex align-items-center">
                <span className="font-xs text-muted">{props.Time} </span>
            </div>
            <div className="product-rate d-inline-block">
                <div className="product-rating" style={{width: "100%"}}></div>
            </div>
        </div>
        <p className="mb-10">{props.Content} <a href="#" className="reply">Reply</a></p>
    </div>
</div>
</div>
 )
}

  export default Comment_index