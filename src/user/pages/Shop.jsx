import New_Product from "../../components/New_Product";
import Product_Card from "../../components/Product_Card"
import  { useState } from "react";

const Shop = () => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState(50);
      
        const handleDropdownToggle = () => {
          setIsDropdownOpen(!isDropdownOpen);
        };
      
        const handleOptionSelect = (option) => {
          setSelectedOption(option);
          setIsDropdownOpen(false);
        };
        
    return (
        <>
<main className="main">
<div className="breadcrumb">
                    <a href="" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> <a >Shop</a> 
                </div>
<div className="page-header mt-30 mb-50">
            <div className="container">
            </div>
        </div>
<div className="container mb-30">
            <div className="row flex-row-reverse">
                <div className="col-lg-4-5">
                    <div className="shop-product-fillter">
                        <div className="totall-product">
                            <p>We found <strong className="text-brand">5</strong> products for you!</p>
                        </div>
                        <div className="sort-by-product-area">
                        <div className="sort-by-cover mr-10">
      <div className="sort-by-product-wrap">
        <div className="sort-by">
          <span>
            <i className="fi-rs-apps"></i>Show:
          </span>
        </div>
        <div className="sort-by-dropdown-wrap">
          <span onClick={handleDropdownToggle}>
            {selectedOption} <i className="fi-rs-angle-small-down"></i>
          </span>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="sort-by-dropdown">
          <ul>
            <li>
              <a
                className={selectedOption === 50 ? "active" : ""}
                href="#"
                onClick={() => handleOptionSelect(50)}
              >
                50
              </a>
            </li>
            <li>
              <a
                className={selectedOption === 100 ? "active" : ""}
                href="#"
                onClick={() => handleOptionSelect(100)}
              >
                100
              </a>
            </li>
            <li>
              <a
                className={selectedOption === 150 ? "active" : ""}
                href="#"
                onClick={() => handleOptionSelect(150)}
              >
                150
              </a>
            </li>
            <li>
              <a
                className={selectedOption === 200 ? "active" : ""}
                href="#"
                onClick={() => handleOptionSelect(200)}
              >
                200
              </a>
            </li>
            <li>
              <a
                className={selectedOption === "All" ? "active" : ""}
                href="#"
                onClick={() => handleOptionSelect("All")}
              >
                All
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
                            <div className="sort-by-cover">
                                <div className="sort-by-product-wrap">
                                    <div className="sort-by">
                                        <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                                    </div>
                                    <div className="sort-by-dropdown-wrap">
                                        <span> Featurđssed <i className="fi-rs-angle-small-down"></i></span>
                                    </div>
                                </div>
                                <div className="sort-by-dropdown">
                                    <ul>
                                        <li><a className="active" href="#">Featured</a></li>
                                        <li><a href="#">Price: Low to High</a></li>
                                        <li><a href="#">Price: High to Low</a></li>
                                        <li><a href="#">Release Date</a></li>
                                        <li><a href="#">Avg. Rating</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row product-grid">
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>
                    <Product_Card
                    default_Image="public/imgs/macbook.png" 
                    hover_Image="public/imgs/dell.jpg" 
                    Status="Hot"
                    Type="Laptop"
                    Name="Macbook M1 2020"
                    Brand="Apple"
                    Price="300"
                    old_Price="500"
                    >
                    </Product_Card>                        
                    </div>
                    <div className="pagination-area mt-20 mb-20">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-start">
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fi-rs-arrow-small-left"></i></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fi-rs-arrow-small-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                  
                </div>
                <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                    <div className="sidebar-widget widget-category-2 mb-30">
                        <h5 className="section-title style-1 mb-30">Category</h5>
                        <ul>
                            <li>
                                <a href=" "> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Laptop</a><span className="count">30</span>
                            </li>
                            <li>
                                <a href=" "> <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Mouse</a><span className="count">35</span>
                            </li>
                            <li>
                                <a href=" "> <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Keyboard </a><span className="count">42</span>
                            </li>
                            <li>
                                <a href=" "> <img src="assets/imgs/theme/icons/category-4.svg" alt="" />HeadPhone</a><span className="count">68</span>
                            </li>
                            <li>
                                <a href=" "> <img src="assets/imgs/theme/icons/category-5.svg" alt="" />CPU</a><span className="count">87</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-widget price_range range mb-30">
                        <h5 className="section-title style-1 mb-30">Fill by price</h5>
                        <div className="price-filter">
                            <div className="price-filter-inner">
                                <div id="slider-range" className="mb-20"></div>
                                <div className="d-flex justify-content-between">
                                    <div className="caption">From: <strong id="slider-range-value1" className="text-brand"></strong></div>
                                    <div className="caption">To: <strong id="slider-range-value2" className="text-brand"></strong></div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group">
                            <div className="list-group-item mb-10 mt-10">
                                <label className="fw-900">Color</label>
                                <div className="custome-checkbox">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                    <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Red (56)</span></label>
                                    <br />
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                                    <label className="form-check-label" htmlFor="exampleCheckbox2"><span>Green (78)</span></label>
                                    <br />
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                                    <label className="form-check-label" htmlFor="exampleCheckbox3"><span>Blue (54)</span></label>
                                </div>
                            </div>
                        </div>
                        <a href=" " className="btn btn-sm btn-default"><i className="fi-rs-filter mr-5"></i> Fillter</a>
                    </div>
                    <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                        <h5 className="section-title style-1 mb-30">New products</h5>
                        <New_Product
                        default_Image="public/imgs/macbook.png"
                        Name="Macbook M1 2020"
                        Price="500"
                        ></New_Product>
                        <New_Product
                        default_Image="public/imgs/macbook.png"
                        Name="Macbook M1 2020"
                        Price="500"
                        ></New_Product>
                        <New_Product
                        default_Image="public/imgs/macbook.png"
                        Name="Macbook M1 2020"
                        Price="500"
                        ></New_Product>
                        
                    </div>
                    <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                        <img src="assets/imgs/banner/banner-11.png" alt="" />
                        <div className="banner-text">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
        )
    }
    
    export default Shop