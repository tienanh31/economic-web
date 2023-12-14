import Great_Product_Card from "../../components/Great_Product_Card"
import Product_Card from "../../components/Product_Card"

const Home = () => {
    // useEffect(() => {

    // productsRef.on('value', (snapshot) => {
    //     const data = snapshot.val();
      
    //     for (const product of data) {
    //       products.push({
    //         id: product.Id,
    //         name: product.Name,
    //         brand: product.Brand,
    //         price: product.Price,
    //       });
    //     }
    //   });
    // }, []);

    //   console.log(products);
//       const [data, setData] = useState('');

//   useEffect(() => {
//     const db = getDatabase();

//     const tasksRef = ref(db, `/Product/Laptop/${1}`);

//     get(tasksRef)
//       .then((snapshot) => {
//         setData(snapshot.val());
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);
//   console.log(data);
  return (
    <>
    <main className="main">
        <section className="home-slider style-2 position-relative mb-50">
            <div className="container">
                
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <div className="home-slide-cover">
                            <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                                <div className="single-hero-slider single-animation-wrap" style={{ backgroundImage: `url(public/imgs/page/home/lap.jpeg)`}}>
                                    <div className="slider-content">
                                        <h1 className="display-2 mb-40">
                                           Laptop<br />
                                            Big discount
                                        </h1>
                                        <a href="/shop" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-arrow hero-slider-1-arrow"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-xl-block">
                        <div className="banner-img style-3 animated animated" style={{ backgroundImage: `url(public/imgs/page/home/cpu.webp)`}}>
                            <div className="banner-text mt-50">
                                <h2 className="mb-50">
                                    CPU
                                </h2>
                                <a href="/shop" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img">
                            <img src="public/imgs/page/home/mouse.jpg" alt="" />
                            <div className="banner-text">
                                <h4>
                                   Mouse
                                </h4>
                                <a href="/shop" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img">
                            <img src="public/imgs/page/home/keyboard.jpeg" alt="" />
                            <div className="banner-text">
                                <h4>
                                   Keyboard
                                </h4>
                                <a href="/shop" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-md-none d-lg-flex">
                        <div className="banner-img mb-sm-0">
                            <img src="public/imgs/page/home/headphone.webp" alt="" />
                            <div className="banner-text">
                                <h4>Headphone</h4>
                                <a href="/shop" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="product-tabs section-padding position-relative">
            <div className="container">
                <div className="section-title style-2">
                    <h3>Popular Products</h3>
                    <ul className="nav nav-tabs links" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Laptop</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">CPU</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Mouse</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five" type="button" role="tab" aria-controls="tab-five" aria-selected="false">Keyboard</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six" type="button" role="tab" aria-controls="tab-six" aria-selected="false">Headphone</button>
                        </li>
                    </ul>
                </div>
                </div>
                </section>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div className="row product-grid-4">
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
                    
s                        </div>
                     </div>
                 </div>
            <section className="section-padding pb-5">
            <div className="container">
                <div className="section-title">
                    <h3 className="">Daily Best Sells</h3>
                    <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                        <li className="nav-item" role="presentation">
                        </li>
                        <li className="nav-item" role="presentation">
                        </li>
                        <li className="nav-item" role="presentation">
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-flex">
                        <div className="banner-img style-2" style={{ backgroundImage: `url(public/imgs/page/home/great_product.jpg)`}}   >
                            <div className="banner-text">
                                <h2 className="mb-100">Great Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
    <div className="tab-content" id="myTabContent-1">
      <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1">
        <div className="carausel-4-columns-cover arrow-center position-relative">
          <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-arrows"></div>
          <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
          <div className="slider-nav-thumbnails">
            <Great_Product_Card></Great_Product_Card>
            <Great_Product_Card></Great_Product_Card>
            <Great_Product_Card></Great_Product_Card>
            <Great_Product_Card></Great_Product_Card>
            <Great_Product_Card></Great_Product_Card>
            <Great_Product_Card></Great_Product_Card>
                                       </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    {/* <div className="tab-pane fade" id="tab-two-1" role="tabpanel" aria-labelledby="tab-two-1">
                                <div className="carausel-4-columns-cover arrow-center position-relative">
                                    <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-2-arrows"></div>
                                    <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-2">
                                    <div className="row">
                                    <Great_Product_Card></Great_Product_Card>
                                    <Great_Product_Card></Great_Product_Card>
                                    <Great_Product_Card></Great_Product_Card>
                                    <Great_Product_Card></Great_Product_Card>
                                    </div>
                                    </div>
                                         </div>
                                         </div> */}
                    </div>
            </div>
            </section>
 </main>
    </>
  )
}

export default Home