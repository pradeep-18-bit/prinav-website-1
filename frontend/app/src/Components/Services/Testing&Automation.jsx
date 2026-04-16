import React from "react";
import { Link } from "react-router-dom";
import "./Testing&Automation.css";

import {
  FaCloud,
  FaCogs,
  FaProjectDiagram,
  FaRocket,
  FaCode,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaSyncAlt,
  FaTools,
} from "react-icons/fa";

const technologies = [
  "Selenium",
  "Cypress",
  "Playwright",
  "Postman",
  "JMeter",
  "JUnit",
  "Azure DevOps",
  "TestNG",
];

const Testing = () => {
  return (
    <div className="testing-page">
      <div className="testing-hero-new">
        <div className="testing-hero-left">
          <span className="testing-badge">Technology Service</span>

          <h1>
            Testing <br /> &amp; Automation Services
          </h1>

          <p>
            Ensure software quality with automation frameworks, continuous testing,
            and performance validation aligned to modern enterprise delivery.
          </p>

          <div className="testing-breadcrumb">
            <Link to="/">Home</Link> &gt; Testing-Automation
          </div>
        </div>

        <div className="testing-hero-right">
          <img src="/images/team-work.jpg" alt="Testing and automation team collaboration" />
        </div>
      </div>

      <section className="testing-section">
        <div className="testing-container">

          <h2>Service Overview</h2>
        </div>
      </section>

      <section className="testing-section testing-section-muted">
        <div className="testing-grid">
          <div className="testing-card">
            <h3>Key Capabilities</h3>

            <div className="testing-feature">
              <FaProjectDiagram className="testing-icon teal" />
              <span>UI, API, and regression test automation</span>
            </div>

            <div className="testing-feature">
              <FaCloud className="testing-icon teal" />
              <span>Continuous testing in CI/CD pipelines</span>
            </div>

            <div className="testing-feature">
              <FaCode className="testing-icon teal" />
              <span>API validation and contract testing</span>
            </div>

            <div className="testing-feature">
              <FaCogs className="testing-icon teal" />
              <span>Performance, load, and reliability testing</span>
            </div>

            <div className="testing-feature">
              <FaRocket className="testing-icon teal" />
              <span>Test reporting and release readiness support</span>
            </div>
          </div>

          <div className="testing-card">
            <h3>Business Benefits</h3>

            <div className="testing-feature">
              <FaChartLine className="testing-icon teal" />
              <span>Better release confidence</span>
            </div>

            <div className="testing-feature">
              <FaClock className="testing-icon teal" />
              <span>Faster feedback cycles</span>
            </div>

            <div className="testing-feature testing-feature-active">
              <FaShieldAlt className="testing-icon teal" />
              <span>Higher product reliability</span>
            </div>

            <div className="testing-feature">
              <FaSyncAlt className="testing-icon teal" />
              <span>Lower regression risk</span>
            </div>

            <div className="testing-feature">
              <FaTools className="testing-icon teal" />
              <span>Repeatable quality processes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testing-section">
        <div className="testing-container">
          <h2>Platforms and technologies we use in delivery.</h2>

          <p className="testing-subtext">
            Technology choices are aligned to business context, integration
            needs, security requirements, and long-term maintainability.
          </p>

          <div className="testing-tech-grid">
            {technologies.map((tech) => (
              <div key={tech} className="testing-tech-card">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testing;
