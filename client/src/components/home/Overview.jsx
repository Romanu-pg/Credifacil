import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Tshirt from '../../assets/images/banner-bg.png';


const Overview = () => {
    return (
        // <!-- fashion section start -->
        <div className="fashion_section">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
                <Carousel
                    prevIcon={<span className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-left"></i>
                    </span>}
                    nextIcon={<span className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </span>}
                >
                    <Carousel.Item>
                        <div className="container">
                            <h1 className="fashion_taital">Más destacados</h1>
                            <div className="fashion_section_2">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/reinforest.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Amazon Rainforest Project</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 1.8</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/solar panels.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Solar Power Initiative</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 2.5</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/energy.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Wind Energy Farm</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 3.2</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <h1 className="fashion_taital">Más destacados</h1>
                            <div className="fashion_section_2">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/reforestation.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Reforestation Initiative</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 2.0</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Mas información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/hydroelectric.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Hydroelectric Power Project</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 2.8</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/Geothermal.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Geothermal Energy Plant</h4>
                                                <p className="price_text">Precio <span style={{ color: '#262626' }}>$ 4.0</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <h1 className="fashion_taital">Más destacados</h1>
                            <div className="fashion_section_2">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/Turbine.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Wind Turbine Installation</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 3.5</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 content_box_main">
                                        <div className="box_main">
                                            <div className="image_wrapper">
                                                <div className="tshirt_img"><img className="imagen_proyecto" src={"/uploads/products/bioenergy.jpg"} /></div>
                                            </div>
                                            <div className="tag_info">
                                                <h4 className="shirt_text">Bioenergy Conversion Project</h4>
                                                <p className="price_text">Precio  <span style={{ color: '#262626' }}>$ 2.6</span></p>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Comprar</a></div>
                                                    <div className="seemore_bt"><a href="#">Más información</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        // <!-- Más destacados -->
    );
};


export default Overview;