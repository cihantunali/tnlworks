import React from "react";
import "../../scss/whytnlworks.scss";


const WhyTNLWorks = () => {
  return (
    <section className="why-tnlworks" id="why-tnlworks">
      <h2>Why TNLWorks</h2>
      <p className="subtitle">Transparent, Experienced, and Focused on Your Growth</p>
      <ul>
        <li>
          <div className="circle-number">1</div>
          <div className="text-content">
            <h4>20+ Years of Experience</h4>
            <p>Proven expertise in cloud infrastructure, DevOps, and scalable system architecture across multiple industries.</p>
          </div>
        </li>
        <li>
          <div className="circle-number">2</div>
          <div className="text-content">
            <h4>End-to-End Ownership</h4>
            <p>I manage projects from start to finish — from design to deployment, so you stay focused on your core business.</p>
          </div>
        </li>
        <li>
          <div className="circle-number">3</div>
          <div className="text-content">
            <h4>Tailored Solutions</h4>
            <p>Every solution is built with your unique needs in mind. No copy-paste — just what fits best for you.</p>
          </div>
        </li>
        <li>
          <div className="circle-number">4</div>
          <div className="text-content">
            <h4>Proactive Collaboration</h4>
            <p>I don’t wait for problems to arise. I engage early, communicate clearly, and act fast.</p>
          </div>
        </li>
        <li>
          <div className="circle-number">5</div>
          <div className="text-content">
            <h4>Multi-sector Experience</h4>
            <p>Delivered successful projects in software, e-commerce, energy, and fintech — adapting best practices across sectors.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WhyTNLWorks;