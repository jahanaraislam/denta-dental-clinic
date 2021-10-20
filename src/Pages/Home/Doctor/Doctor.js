import React from "react";
import "./Doctor.css";
import doctor1 from "../../../assets/doctor-1.jpg";
import doctor2 from "../../../assets/doctor-2.jpg";
import doctor3 from "../../../assets/doctor-3.jpg";
import doctor4 from "../../../assets/doctor-4.jpg";
// doctors section
const Doctor = () => {
    return (
        <div className="doctors-container">
            <div className="row my-5 container mx-auto">
                <h2 className="title">
                    Our Doctors
                    <hr className="hr" />
                </h2>

                <div className="row my-5  container mx-auto">
                    {/* doctor 1 */}
                    <div className="text-center doctor col-lg-3 col-md-6">
                        <img className="img-fluid m-4" src={doctor1} alt="" />
                        <h5 className="title">Dr. Jeison Smith </h5>
                        <p className="sub-title">Founder & Senior consultant</p>
                       
                    </div>
                    {/* doctor-2 */}
                    <div className="text-center doctor col-lg-3 col-md-6">
                        <img className="img-fluid m-4" src={doctor2} alt="" />
                        <h5 className="title">Dr.Simona Willams</h5>
                        <p className="sub-title">Dentist-Orthodontist</p>
                       
                    </div>
                    {/* doctor -3 */}
                    <div className="text-center doctor col-lg-3 col-md-6">
                        <img className="img-fluid m-4" src={doctor3} alt="" />
                        <h5 className="title">Dr. Sheila Coredero</h5>
                        <p className="sub-title">
                            Dentist, Oral surgeon</p>
                       
                    </div>
                    {/* doctor-4 */}
                    <div className="text-center doctor col-lg-3 col-md-6">
                        <img className="img-fluid m-4" src={doctor4} alt="" />
                        <h5 className="title">Dr. Alex </h5>
                        <p className="sub-title">Coredero",
                            Dental Therapist</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;