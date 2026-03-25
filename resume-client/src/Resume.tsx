import React from 'react';
import './App.css';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Ian Armstrong</h1>
        <p>Software Engineer</p>
      </header>
      <section className="section">
        <h2>Experience</h2>
        <div className="entry">
          <h3>Software Engineer at Spectrum</h3>
          <p>2023 - Present</p>
          <ul>
            <li>Created a tool to move data between Jira and ALM Octane!</li>
            <li>Inventory management of 3000+ lab devices (If Spectrum was cool like that I'd have a live tracker)</li>
          </ul>
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
          <li>Telling Daddy Bezos to setup servers to do my bidding(opex)</li>
          <li>{"Grabbing IPs >:)"}</li>
          <li>Your cooridinates are TODO: server stuff</li>
        </ul>
      </section>
      <section>
        <h2>TODO for this website</h2>
        <ol>
            <li>Migrate from AWS App Runner to ECS for future improvements</li>
            <li>automatically waste money by automating deployments</li>
            <li>Display private projects securely idealy have a cloudlfare human check, spin up a container, allow a user to expirence the awesome software</li>
            <li>create todo app</li>
            <li>learn VIM to become a real software engineer</li>
            <li>gaslighting</li>
        </ol>
      </section>
    </div>
  );
};

export default Resume;
