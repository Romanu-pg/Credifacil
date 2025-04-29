import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/inputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {

   return (
      <div className="banner_bg_main_products">
         {/* Carrusel con react-bootstrap */}
         <div className="banner_section layout_padding flex items-center">
            <div className="container">
               <div className="row flex items-center">
                  <div className="col-sm-12 flex items-center">
                     <span className="banner_taital_products">Compra aquí tus bonos<br />y reduce tu huella de carbono</span>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Hero;