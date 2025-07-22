import React, { useState } from "react";
import "../../scss/Services.scss";
import { servicesData } from "../../editable-stuff/config";
import { FaCloud, FaCogs, FaChartLine, FaNetworkWired, FaDatabase } from "react-icons/fa";

const iconMap = {
  cloud: <FaCloud />,
  devops: <FaCogs />,
  sre: <FaChartLine />,
  infra: <FaNetworkWired />,
  db: <FaDatabase />
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("cloud");

  const activeService = servicesData.find(s => s.imageKey === activeTab);

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">What I Do</h2>

      {/* Tabs */}
      <div className="tab-buttons">
        {servicesData.map(service => (
          <button
            key={service.imageKey}
            className={`tab-button ${activeTab === service.imageKey ? "active" : ""}`}
            onClick={() => setActiveTab(service.imageKey)}
          >
            {iconMap[service.imageKey]} {service.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="tab-content">
        <div className="service-card">
          <div className="service-image-wrapper">
            <img
              src={activeService.image} 
              alt={activeService.title}
              className="service-image"
            />
          </div>
          <p className="service-description">{activeService.description}</p>
          <ul className="service-details">
  {activeService.details.map((detail, i) => (
    <li key={i}>
      <span style={{ color: "#20549c", marginRight: "8px" }}>✔</span>
      {detail}
    </li>
  ))}
</ul>
        </div>
      </div>
    </section>
  );
};

export default Services;