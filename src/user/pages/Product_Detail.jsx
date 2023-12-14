import Comment_index from "../../components/Comment_index"
import Relate_Product_Card from "../../components/Relate_Product_Card"
const Product_Detail = () => {
    return (
        <>

<div className="single-product">
    <header className="header-area header-style-1 header-height-2">
    </header>
    <main className="main">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> <a href="/shop">Shop</a> <span></span> Laptop<span></span> Macbook M1 2020
                </div>
            </div>
        </div>
        <div className="container mb-30">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <div className="product-detail accordion-detail">
                        <div className="row mb-50 mt-30">
                            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div className="detail-gallery">
                                    <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                    <div className="product-image-slider">
                                        <figure className="border-radius-10">
                                            <img src="public/imgs/macbook.png" alt="product image" />
                                        </figure>
                                        <figure className="border-radius-10">
                                            <img src="public/imgs/dell.jpg" alt="product image" />
                                        </figure>
                                        <figure className="border-radius-10">
                                        <img src="public/imgs/macbook.png" alt="product image" />
                                        </figure>
                                        <figure className="border-radius-10">
                                        <img src="public/imgs/dell.jpg" alt="product image" />
                                        </figure>
                                        <figure className="border-radius-10">
                                        <img src="public/imgs/macbook.png" alt="product image" />
                                        </figure>
                                        <figure className="border-radius-10">
                                        <img src="public/imgs/dell.jpg" alt="product image" />
                                        </figure>
                                        <figure className="border-radius-10">
                                        <img src="public/imgs/macbook.png" alt="product image" />
                                        </figure>
                                    </div>
                                    <div className="slider-nav-thumbnails">
                                        <div><img src="public/imgs/macbook.png" alt="product image" /></div>
                                        <div><img src="public/imgs/dell.jpg" alt="product image" /></div>
                                        <div><img src="public/imgs/macbook.png" alt="product image" /></div>
                                        <div><img src="public/imgs/dell.jpg" alt="product image" /></div>
                                        <div><img src="public/imgs/macbook.png" alt="product image" /></div>
                                        <div><img src="public/imgs/dell.jpg" alt="product image" /></div>
                                        <div><img src="public/imgs/macbook.png" alt="product image" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="detail-info pr-30 pl-30">
                                    <span className="stock-status out-stock"> Sale Off </span>
                                    <h2 className="title-detail">Macbook M1 2020</h2>
                                    <div className="product-detail-rating">
                                        <div className="product-rate-cover text-end">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating"  ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                        </div>
                                    </div>
                                    <div className="clearfix product-price-cover">
                                        <div className="product-price primary-color float-left">
                                            <span className="current-price text-brand">$500</span>
                                            <span>
                                                <span className="save-price font-md color3 ml-15">30% Off</span>
                                                <span className="old-price font-md ml-15">$300</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="short-desc mb-30">
                                        <p className="font-lg">The MacBook Air with the M1 chip is an impressively compact, fast, and versatile laptop with a fanless, silent design and stunning Retina display. With a sophisticated design and all-day battery life, this MacBook Air can operate at impressive speeds yet effortlessly.</p>
                                    </div>
                                    <div className="attr-detail attr-size mb-30">
                                        <strong className="mr-30">Color: </strong>
                                        <ul className="list-filter size-filter font-small">
                                            <li><a href="#">Black</a></li>
                                            <li className="active"><a href="#">Gray</a></li>
                                            <li><a href="#">White</a></li>
                                            <li><a href="#">Blue</a></li>
                                        </ul>
                                    </div>
                                    <div className="detail-extralink mb-50">
                                        <div className="detail-qty border radius">
                                            <a href="#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                            <input type="text" name="quantity" className="qty-val" defaultValue="1" min="1"/>
                                            <a href="#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                        </div>
                                        <div className="product-extra-link2">
                                            <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button>
                                            <a aria-label="Add To Wishlist" className="action-btn hover-up" href=""><i className="fi-rs-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="font-xs">
                                        <ul className="mr-50 float-start">
                                            <li className="mb-5">Type: <span className="text-brand">Laptop</span></li>
                                            <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2020</span></li>
                                            <li>LW: <span className="text-brand">1 years</span></li>
                                        </ul>
                                        <ul className="float-start">
                                            <li className="mb-5">Tags: <a href="#" rel="tag">Laptop</a>, <a href="#" rel="tag">Apple</a></li>
                                            <li>Stock:<span className="in-stock text-brand ml-5">10 Products In Stock</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="tab-style3">
                                <ul className="nav nav-tabs text-uppercase">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info">Additional info</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">Reviews (3)</a>
                                    </li>
                                </ul>
                                <div className="tab-content shop_info_tab entry-main-content">
                                    <div className="tab-pane fade show active" id="Description">
                                        <div className="">
                                            <p>The MacBook Air with the M1 chip is an impressively compact, fast, and versatile laptop with a fanless, silent design and stunning Retina display. With a sophisticated design and all-day battery life, this MacBook Air can operate at impressive speeds yet effortlessly.</p>
                                            <hr className="wp-block-separator is-style-dots" />
                                            <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                                            <h4 className="mt-30">Warnings</h4>
                                            <ul className="product-more-infor mt-30">
                                                <p>Keep at cool temperature...</p>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Additional-info">
                                        <table className="font-md">
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>Brand</th>
                                                    <td>
                                                        <p>Apple</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Guarantee</th>
                                                    <td>
                                                        <p>12 months</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-w-wheels">
                                                    <th>Series laptop</th>
                                                    <td>
                                                        <p>Macbook Air</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Name</th>
                                                    <td>
                                                        <p>Macbook Air 2020</p>
                                                    </td>
                                                </tr>
                                                <tr className="frame">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Gray, Blue, White, Black</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-wo-wheels">
                                                    <th>Screen</th>
                                                    <td>
                                                        <p>13.3 ( 2560 x 1600 ) | Retina HD webcam</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-capacity">
                                                    <th>CPU</th>
                                                    <td>
                                                        <p>Apple M1 ( 8-Core CPU / 7-Core GPU )</p>
                                                    </td>
                                                </tr>
                                                <tr className="width">
                                                    <th>RAM capacity</th>
                                                    <td>
                                                        <p>8GB</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>SSD capacity</th>
                                                    <td>
                                                        <p>256GB SSD</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>Connector</th>
                                                    <td>
                                                        <p>2 x Thunderbolt 3 , 1 x 3.5 mm , 1 x SDXC Card Slot</p>
                                                    </td>
                                                </tr>
                                                <tr className="seat-back-height">
                                                    <th>Operating system</th>
                                                    <td>
                                                        <p>macOS</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Battery capacity</th>
                                                    <td>
                                                        <p>50 Wh</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="Reviews">
                                        <div className="comments-area">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <h4 className="mb-30">Customer questions & answers</h4>
                                                    <div className="comment-list">
                                                       <Comment_index
                                                       Avatar="public/imgs/UIT.svg"
                                                       Name="Hoang Hy"
                                                       Time="2023/12/19 16:40"
                                                       Content="Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test"
                                                       >

                                                       </Comment_index>
                                                       <Comment_index  Avatar="public/imgs/UIT.svg"
                                                       Name="Hoang Hy"
                                                       Time="2023/12/19 16:40"
                                                       Content="Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test"
                                                       
                                                       >

                                                       </Comment_index>

                                                       <Comment_index  Avatar="public/imgs/UIT.svg"
                                                       Name="Hoang Hy"
                                                       Time="2023/12/19 16:40"
                                                       Content="Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test"
                                                       >
                                                        
                                                       </Comment_index>

                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <h4 className="mb-30">Customer reviews</h4>
                                                    <div className="d-flex mb-30">
                                                        <div className="product-rate d-inline-block mr-15">
                                                            <div className="product-rating" style={{width: "90%"}}></div>
                                                        </div>
                                                        <h6>4.8 out of 5</h6>
                                                    </div>
                                                    <div className="progress">
                                                        <span>5 star</span>
                                                        <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                    </div>
                                                    <div className="progress">
                                                        <span>4 star</span>
                                                        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                    </div>
                                                    <div className="progress">
                                                        <span>3 star</span>
                                                        <div className="progress-bar" role="progressbar" style={{width: "45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                                    </div>
                                                    <div className="progress">
                                                        <span>2 star</span>
                                                        <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                                    </div>
                                                    <div className="progress mb-30">
                                                        <span>1 star</span>
                                                        <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                                    </div>
                                                    <a href="#" className="font-xs text-muted">How are ratings calculated?</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h4 className="mb-15">Add a review</h4>
                                            <div className="product-rate d-inline-block mb-30"></div>
                                            <div className="row">
                                                <div className="col-lg-8 col-md-12">
                                                    <form className="form-contact comment_form" action="#" id="commentForm">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="button button-contactForm">Submit Review</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-60">
                            <div className="col-12">
                                <h2 className="section-title style-1 mb-30">Related products</h2>
                            </div>
                            <div className="col-12">
                            <div className="row related-products">
                            <Relate_Product_Card
                                default_Image="public/imgs/macbook.png"
                                hover_Image="public/imgs/dell.jpg"
                                Status="Hot"
                                Name="Macbook M1 2020"
                                Price="300"
                                old_Price="500"
                                >

                            </Relate_Product_Card>
                            <Relate_Product_Card
                                default_Image="public/imgs/macbook.png"
                                hover_Image="public/imgs/dell.jpg"
                                Status="Hot"
                                Name="Macbook M1 2020"
                                Price="300"
                                old_Price="500"
                                >

                            </Relate_Product_Card>
                            <Relate_Product_Card
                                default_Image="public/imgs/macbook.png"
                                hover_Image="public/imgs/dell.jpg"
                                Status="Hot"
                                Name="Macbook M1 2020"
                                Price="300"
                                old_Price="500"
                                >

                            </Relate_Product_Card>
                            <Relate_Product_Card
                                default_Image="public/imgs/macbook.png"
                                hover_Image="public/imgs/dell.jpg"
                                Status="Hot"
                                Name="Macbook M1 2020"
                                Price="300"
                                old_Price="500"
                                >

                            </Relate_Product_Card>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer className="main">
    </footer>
</div>


</>
        )
    }
    
    export default Product_Detail