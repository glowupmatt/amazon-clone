import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-container">
          <img
            className="home-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <div className="home-row">
            <Product
              id="5473892"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
            />
            <Product
              id="5432452"
              title="ZACME Commercial Stand Mixer 7.4QT 800W with Aluminum cast body and NSF Certified, Mixers"
              price={289.99}
              image="https://m.media-amazon.com/images/I/61tuY3nonfL._AC_SX425_.jpg"
              rating={4}
            />
          </div>
          <div className="home-row">
            <Product
              id="23445930"
              title="Samsung CF390 24' 16:9 Curved LCD FHD 1920x1080 Curved Desktop"
              price={189.99}
              image="https://m.media-amazon.com/images/I/51vXuwpF-QL._AC_SY450_.jpg"
              rating={3}
            />
            <Product
              id="1943263"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              rating={5}
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              rating={4}
            />
          </div>
          <div className="home-row">
            <Product
              id="3254354345"
              title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor,"
              price={1199.99}
              image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX679_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
