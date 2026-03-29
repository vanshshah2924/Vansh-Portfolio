// ServiceSection.tsx

"use client";
import "./services.css";
import ServiceCardS from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="services-section">
      
      {/* HEADER */}
      <div className="services-header">
        
        {/* LEFT */}
        <div className="services-title">
          <h2>
            My <span>Services</span>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="services-description">
          <p>
            I provide modern web development and design solutions that help businesses build a strong and impactful online presence.
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="services-divider"></div>

      {/* CARDS (we’ll build next) */}
      <ServiceCardS />

    </section>
  );
};

export default ServiceSection;