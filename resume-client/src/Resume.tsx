import React from 'react';
import './App.css';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Ian Armstrong</h1>
        <p>Software Engineer II</p>
      </header>
      <section className="section">
        <h2>Work Experience</h2>
        <div className="entry">
          <h3>Software Engineer at Charter Communications</h3>
          <p>May 2023 - Present | Charlotte, NC</p>
          <h4>Bridgeworks (Lead Engineer Python, React JS)</h4>
          <ul>
            <li>Led the development of a synchronization tool (Jira/Octane) central to change management, enabling clear task tracking and status visibility for all engineering and testing stakeholders.</li>
            <li>Developed and implemented robust CI/CD pipelines using GitLab and PowerShell automation to manage immutable deployment packages, ensuring clear versioning and satisfying all pre-release dependency readiness requirements.</li>
            <li>Worked closely with the tools team to refine requirements and drive high software quality</li>
            <li>Created a reactive and understandable user interface to facilitate tool cutover</li>
            <li>Engaged in collaborative cross team development of functionalities within the project</li>
            <li>Implemented a GRPC engine in python for scalability and performance</li>
            <li>Ensured efficiency in API usage to reduce impact on the target systems</li>
            <li>Contributed to offshore team growth by participating in the hiring and selection process for new engineering talent, and subsequently onboarding and mentoring a new resource for rapid and successful project integration.</li>
          </ul>
          <h4>STARS (Lead Engineer Python)</h4>
          <ul>
            <li>A cross team API layer to hold shared functionality between my team and a partner team. This allowed for deduplication of functionality and functionality for testing and lab teams within the company.</li>
            <li>Created and implemented pipelines for CI/CD</li>
            <li>Implemented a HashiCorp Vault based authentication using LDAP and AppRole methods</li>
            <li>Created API endpoints for discovering client devices in the lab</li>
            <li>Engaged in collaborative cross team development of functionalities within the project</li>
            <li>Stood up a Rancher Kubernetes environment for application hosting and pipelines using GitLab agents</li>
            <li>Championed and documented project development standards, incorporating input from stakeholders to implement process refinements that streamlined development workflows and improved multi-team alignment.</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Test Automation Intern at Charter Communications</h3>
          <p>June 2022 - May 2023 | Charlotte, NC</p>
          <ul>
            <li>Create test scripts based on test plans with guidance from senior automation engineers.</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h2>Education</h2>
        <div className="entry">
          <h3>University of North Carolina at Charlotte</h3>
          <p>May 2019 - May 2023 | Charlotte, NC</p>
          <p><strong>B.S Computer Science</strong><br />Concentration in Software System and Networks</p>
        </div>
      </section>
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>DevOps</li>
          <li>Buying Servers on Ebay to do my bidding (capex)</li>
          <li>Telling Jeff Bezos to setup servers to do my bidding (opex)</li>
          {/* <li>{"Grabbing IPs >:)"}</li> */}
          {/* <li>Your cooridinates are TODO: server stuff</li> */}
        </ul>
      </section>
      <section>
        <h2>TODO for this website</h2>
        <ol>
            <li><s>Migrate from AWS App Runner to ECS for future improvements</s> &check;Use Google app runner</li>
            <li>&check; Automatically waste money by automating deployments</li>
            <li>Create a markdown editor and use Google's postgres to dip my toes in</li>
            <li>Create a markdown editor and use Google's document database to see what the nosql fuss is about</li>
            <li>Display private projects securely idealy have a cloudlfare human check, spin up a container, allow a user to expirence the awesome software</li>
            <li>create todo app</li>
        </ol>
      </section>
    </div>
  );
};

export default Resume;
