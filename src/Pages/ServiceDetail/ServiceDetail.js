import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetail.css";
const ServiceDetail = () => {
  // import needed things
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const serviceDetail = details.find((detail) => detail.id === serviceId);

  return (
    // service detail
    <div className="detail-container ">
      {/* header part of service detail */}
      <div className="detail-title my-5">
        {serviceDetail?.name}
        <h4 className="detail-sub-title my-4 ">
          Magical & Inspirational lessons for people seeking help.
        </h4>
      </div>
      <div className="row d-flex align-items-center justify-content-center container mx-auto text-center">
        <h2 className="top-title mb-4">{serviceDetail?.title1}</h2>

        <h5>{serviceDetail?.title1Des}</h5>
        <hr className="hr" />
      </div>
      {/* top part  */}
      <div className="row top-part g-4 detail container py-5 mx-auto">
        <div className="col-md-6 col-12 pe-4">
          <h3 className="top-title my-4">{serviceDetail?.title2}</h3>
          <h5 className="top-sub-title">{serviceDetail?.title2Des}</h5>
        </div>

        <div className="col-md-6 col-12 detail-left">
          <img className="img-fluid " src={serviceDetail?.image} alt="" />
        </div>
        <hr className="hr mt-5" />
      </div>
      
    </div>
  );
};

export default ServiceDetail;