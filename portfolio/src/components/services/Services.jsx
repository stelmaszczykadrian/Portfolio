import React from "react";
import "./Services.css";
import {
    itConsultingServices,
    maintenanceAndSupportServices, servicesSectionSubtitle,
    servicesSectionTitle,
    webDevelopmentServices
} from "./Data";
import ServiceSection from "./ServiceSection";

export default function Services(){
    return (
        <>
            <section id="services">
                <h2 className="section__title">
                    {servicesSectionTitle}
                </h2>
                <span className="section__subtitle">
                {servicesSectionSubtitle}
            </span>
                <div className="container services__container">
                    <ServiceSection title="Web Application Development" services={webDevelopmentServices} />
                    <ServiceSection title="IT Consulting" services={itConsultingServices} />
                    <ServiceSection title="Maintenance and Support Services" services={maintenanceAndSupportServices} />
                </div>
            </section>
        </>
    );
};
