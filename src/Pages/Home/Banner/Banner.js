import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
// banner section
    <div className="banner ">
      <div className="row container mx-auto">
      <div className="col-md-12 col-lg-6"></div>
        <div className="col-md-12 col-lg-6 banner-left fw-bold text-uppercase text-center text-white">
         
          <h1 className="mt-5 mb-4 fw-bolder">
          Get the smile you've always wanted —
          </h1>
          <h6 className="text-secondary me-5 pe-3">
          full range of cosmetic dentistry treatment!
          </h6>
          <div className="row mt-5">
            <span>
             
              <button className="banner-btn1 mb-1">BOOK SESSION</button>
              <button className=" ms-3 banner-btn2">ABOUT US</button>
            </span>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
