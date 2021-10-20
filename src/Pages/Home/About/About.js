

import React from "react";
import "./About.css";
import aboutImg from "../../../assets/about.png";
import aboutDoctor from "../../../assets/about-doctor.jpg"
const About = () => {
    return (
        <div className="row about container my-5 mx-auto">
            

            <div className="col-md-12 col-lg-6 my-4 ps-5 col-12  about-right ">
                <img className="" src={aboutImg} alt="" />
            </div>
            <div className="col-md-12 col-lg-6 p-5 col-12 about-left">
                
                <h1 className="about-title">Welcome to Denta Dental Care</h1>
                <h3 className="about-sub-title my-4">
                    Detal Care For Everyone Who Needs!
                </h3>
                <p>
                    Our Dental Clinic is dedicated to providing the most up to date general, orthodontic and family dentistry.<br />
                    Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.
                </p>
                <div className="row d-flex mt-5">
                    <div className="col-md-6 ">
                        <img className="img-fluid" src={aboutDoctor} alt="" />
                    </div>
                    <div className="col-md-6  about-doctor mt-2">
                        <h5>
                            Dr. James William


                        </h5>
                        <span>Chief Medical Officer</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;