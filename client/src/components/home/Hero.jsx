import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/inputs.css';
import { Carousel } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {

   return (
      <div className="banner_bg_main">
         
         {/* Carrusel con react-bootstrap */}
         <div className="banner_section layout_padding">
            <div className="container">
               <Carousel fade={true} interval={5000} pause={false}>
                  <Carousel.Item>
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Beneficios</h1>
                           <p className="banner_text">Disfruta de tasas preferenciales, acceso rápido y otros beneficios al solicitar nuestros servicios.</p>
                           <div className="buynow_bt"><a href="#">Comprar</a></div>
                        </div>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Promociones</h1>
                           <p className="banner_text">Aprovecha promociones exclusivas por tiempo limitado y bonificaciones al contratar.</p>
                           <div className="buynow_bt"><a href="#">Comprar</a></div>
                        </div>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Pasos para solicitar</h1>
                           <p className="banner_text">Solicita tu crédito en 3 simples pasos: selecciona el producto, completa el formulario y recibe tu aprobación.</p>
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