import  { useEffect, useState } from "react";
const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const [navbarStyle, setNavbarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newNavbarStyle = scrollTop > 0 ? { position: "fixed", top: 0, width: "100%", zIndex: 1000 } : {};
      setNavbarStyle(newNavbarStyle);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header  className="header-area header-style-1 header-height-2 " style={navbarStyle}>
    
    <div  className="header-bottom header-bottom-bg-color sticky-bar">
            <div  className="container">
                <div  className="header-wrap header-space-between position-relative">
                        <div  className="main-categori-wrap d-none d-lg-block">
                        <div  className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" > </a>
                               </li>
                               <li>
                                        <a  className="active" href="/">Home </a>
                                </li>
                                 
                                    <li>
                                        <a href="/shop">Shop <i  className="fi-rs-angle-down"></i></a>
                                        <ul  className="sub-menu">
                                            <li><a href="">Laptop</a></li>
                                            <li><a href="">CPU</a></li>
                                            <li><a href="">Mouse</a></li>
                                            <li><a href="">Keyboard</a></li>
                                            <li><a href="">Headphone</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/about_us">About</a>
                                    </li>
                                    <li>
                                        <a  onClick={scrollToBottom} >Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div  className="hotline d-none d-lg-flex">
                        <img src="public/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                        <p>1900-0000<span>24/7 Support Center</span></p>
                    </div>
                    <div  className="header-action-icon-2 d-block d-lg-none">
                        <div  className="burger-icon burger-icon-white">
                            <span  className="burger-icon-top"></span>
                            <span  className="burger-icon-mid"></span>
                            <span  className="burger-icon-bottom"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    
    </>
  )
}

export default Navbar