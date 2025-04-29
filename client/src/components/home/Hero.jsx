import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/inputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {

   return (
      <div className="banner_bg_main">
         <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div className="main">
                     <div className="input-group search-bar">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search this blog"
                        />
                        <div className="input-group-append">
                           <button
                              className="btn btn-secondary"
                              type="button"
                              style={{ backgroundColor: '#f26522', borderColor: '#f26522' }}>
                              <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Carrusel con react-bootstrap */}
         <div className="banner_section layout_padding">
            <div className="container">
               <Carousel>
                  <Carousel.Item>
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Comienza<br />tu compra favorita</h1>
                           <div className="buynow_bt"><a href="#">Comprar</a></div>
                        </div>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Comienza<br />tu compra favorita</h1>
                           <div className="buynow_bt"><a href="#">Comprar</a></div>
                        </div>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Comienza<br />tu compra favorita</h1>
                           <div className="buynow_bt"><a href="#">Comprar</a></div>
                        </div>
                     </div>
                  </Carousel.Item>
               </Carousel>
            </div>
         </div>
      </div>
   );
};

export default Hero;