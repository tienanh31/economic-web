import Favorite_index from "../../components/Favorite_index"

const Favorite_List = () => {
    return (
        <>
         <main className="main">
        <div className="page-header breadcrumb-ywrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> My acouut <span></span> Favorite list
                </div>
            </div>
        </div>
        <div className="container mb-30 mt-50">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <div className="mb-50">
                        <h1 className="heading-2 mb-10">Your Favorite</h1>
                        <h6 className="text-body">There are <span className="text-brand">5</span> products in this list</h6>
                    </div>
                    <div className="table-responsive shopping-summery">
                        <table className="table table-wishlist">
                            <thead>
                                <tr className="main-heading">
                                    <th className="custome-checkbox start pl-30">
                                        <input className="htmlForm-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                                        <label className="htmlForm-check-label" htmlFor="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colSpan="2">  Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock Status</th>
                                    <th scope="col">Action</th>
                                    <th scope="col" className="end">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            <Favorite_index
                                default_Image="public/imgs/macbook.png"
                                Name="Macbook M1 2020"
                                Price="300"
                                Status="Out Stock"
                            ></Favorite_index>
                            <Favorite_index
                            default_Image="public/imgs/macbook.png"
                            Name="Macbook M1 2020"
                            Price="300"
                            Status="In Stock"
                        ></Favorite_index>
                        <Favorite_index
                        default_Image="public/imgs/macbook.png"
                        Name="Macbook M1 2020"
                        Price="300"
                        Status="Out Stock"
                    ></Favorite_index>
                        <Favorite_index
                    default_Image="public/imgs/macbook.png"
                    Name="Macbook M1 2020"
                    Price="300"
                    Status="In Stock"
                ></Favorite_index>
                           

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
    )
}

export default Favorite_List