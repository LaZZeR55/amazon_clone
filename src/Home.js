import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
  return (
    <div className="home">
    <img 
    className="home__image"
    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
     alt="" 
     />

     {/* Product id, title, price, rating, image */}
     <div className="home__row">
     <Product 
     id="1"
     title ="iPad Air 4"
     price={55000}
     rating={5}
     image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-green-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000"
     />

     <Product 
     id="2"
     title ="Logitech G102 Light Sync Gaming Mouse with Customizable RGB Lighting, 6 Programmable Buttons, Gaming Grade Sensor, 8 k dpi Tracking,16.8mn Color, Light Weight (Black)"
     price={1299}
     rating={4}
     image="https://m.media-amazon.com/images/I/61UxfXTUyvL._SL1500_.jpg"
     />  
     </div>

     <div className="home__row">
     <Product 
     id="3"
     title ="iPhone SE"
     price={29999}
     rating={4}
     image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1586574260319"
     />

    <Product 
     id="4"
     title ="MSI GL62M 7REX-1448NL"
     price={72000}
     rating={5}
     image="https://www.notebookcheck.net/uploads/tx_nbc2/1394828-1_16.jpg"
     />

    <Product 
     id="5"
     title ="Xiaomi Mi Watch Revolve Active"
     price={12999}
     rating={5}
     image="https://i.gadgets360cdn.com/products/large/mi-watch-revolve-active-db-917x800-1624343594.jpg?downsize=*:420&output-quality=80"
     />  
     </div>

     <div className="home__row">
     <Product 
     id="6"
     title ="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
     price={108743.72}
     rating={5}
     image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
     />
     </div>
    {/* Product */}
    </div>
  )
}

export default Home