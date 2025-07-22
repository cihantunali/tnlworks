import React from "react";
import "../../scss/Services.scss";
import { servicesData } from "../../editable-stuff/config";
import ServiceCloud from "../../assets/img/service-cloud.png";
import ServiceDevops from "../../assets/img/service-devops.png";
import ServiceSre from "../../assets/img/sre.png";
import ServiceInfra from "../../assets/img/infra.png";
import ServiceDb from "../../assets/img/db.png";




const Services = () => {
  const serviceImages = {
    cloud: ServiceCloud,
    devops: ServiceDevops,
    sre: ServiceSre,
    infra: ServiceInfra,
    db: ServiceDb,
  };
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">What I Do</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-wrapper">
              <img
                src={serviceImages[service.imageKey]}
                alt={service.title}
                className="service-image"
              />
            </div>
            
            <div className="service-title">{service.title}</div>
            
            <div className="service-check-list">
            {service.details.map((detail, i) => (
            <div className="check-item" key={i}>
            <span className="check-icon">✓</span>
            <span className="check-text">{detail}</span>
            </div>
  ))}
</div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;