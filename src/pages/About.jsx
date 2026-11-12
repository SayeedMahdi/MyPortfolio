import React from 'react';

export default function About() {
  return (
    <div className="main-wrap" id="about">
      <header className="section default-header about-header">
        <div className="container medium">
          <div className="row">
            <div className="flex-col once-in">
              <h1><span>Helping brands &amp; teams</span><span>build better products</span></h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section no-padding line-globe once-in">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <div className="digital-ball">
                <div className="overlay"></div>
                <div className="globe">
                  <div className="globe-wrap">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle-hor"></div>
                    <div className="circle-hor-middle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-image once-in">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <div className="arrow">
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>arrow-up-right</title>
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-1019.000000, -279.000000)" stroke="currentColor" strokeWidth="1.5">
                      <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                        <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                        <line x1="12" y1="0" x2="0" y2="12"></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <p>
                I help companies and teams turn ideas into scalable digital products through strong project leadership, modern full-stack development, and backend-focused engineering. With each project, I push technology to new horizons, always putting quality, performance, and delivery first.
              </p>
              <p>
                <span style={{ opacity: 0.5, display: 'block', paddingTop: '0.5em' }}>
                  Always exploring<span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span>
                </span>
              </p>
            </div>
            <div className="flex-col">
              <div className="single-about-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/about-portrait.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-services">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>I can help you with <span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <h5>01</h5>
              <div className="stripe"></div>
              <h4>Project Leadership</h4>
              <p>Driving product planning, team coordination, sprint execution, and delivery strategy to keep projects moving efficiently from idea to launch.</p>
            </div>
            <div className="flex-col">
              <h5>02</h5>
              <div className="stripe"></div>
              <h4>Backend &amp; Full-Stack Development</h4>
              <p>Designing scalable backend systems, APIs, database architecture, and full-stack product features with a strong focus on performance and maintainability.</p>
            </div>
            <div className="flex-col">
              <h5>03</h5>
              <div className="stripe"></div>
              <h4>Product Delivery</h4>
              <p>Turning business requirements into reliable digital products through clean architecture, practical execution, and strong technical ownership.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-awwwards">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="single-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/avatar.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="flex-col">
              <div className="awwwards-badge"></div>
              <h2>Education &amp;<br />Experience</h2>
              <p>I am Sayeed Mahdi Mousavi, a Project Manager and Full Stack Developer based in Herat, Afghanistan, with strong experience in backend development and delivering scalable digital products.</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <h5>Education</h5>
                  <h4>Bachelor of Science in Software Engineering</h4>
                  <p>Herat University · Graduated</p>
                  <p style={{ fontSize: '0.88em', opacity: 0.8, marginTop: '0.2em' }}>
                    Achieved top university ranking among all peers with an average score exceeding 91%.
                  </p>
                </div>

                <div className="credential-item">
                  <h5>Experience</h5>
                  <h4>Project Manager &amp; Backend Engineer</h4>
                  <p>Microcis (Aug 2023 — Dec 2024)</p>
                  <p style={{ fontSize: '0.88em', opacity: 0.8, marginTop: '0.2em' }}>
                    Managed timelines, technical specifications, and Agile workflows; engineered specialized Node.js backend services supporting real-time streaming and designed GraphQL API interfaces.
                  </p>
                </div>

                <div className="credential-item">
                  <h5>Experience</h5>
                  <h4>Co-Founder, Project Manager &amp; Lead Full-Stack Developer</h4>
                  <p>MarsCoders (Jan 2024 — Present)</p>
                  <p style={{ fontSize: '0.88em', opacity: 0.8, marginTop: '0.2em' }}>
                    Managing product lifecycles, sprint planning, client relations, and engineering full-stack microservices with Next.js, NestJS, TypeScript, and GraphQL.
                  </p>
                </div>

                <div className="credential-item">
                  <h5>Experience</h5>
                  <h4>Lead Developer &amp; Backend Engineer (Remote)</h4>
                  <p>Learn in Box (Jun 2023 — Present)</p>
                  <p style={{ fontSize: '0.88em', opacity: 0.8, marginTop: '0.2em' }}>
                    Directing backend development, scalable APIs, and database schemas using Node.js and NestJS.
                  </p>
                </div>

                <div className="credential-item">
                  <h5>Technical Stack</h5>
                  <div className="credential-tags">
                    <span>Project Management</span>
                    <span>Agile / Scrum</span>
                    <span>Next.js</span>
                    <span>NestJS</span>
                    <span>React &amp; React Native</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>GraphQL</span>
                    <span>REST APIs</span>
                    <span>Media Streaming</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>Supabase</span>
                  </div>
                </div>

                <div style={{ marginTop: '1.2em' }}>
                  <div className="btn btn-normal btn-dark">
                    <a
                      href="/assets/SayeedMahdiMousaviCV.pdf"
                      download="Sayeed Mahdi Mousavi CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-click magnetic"
                      data-strength="25"
                      data-strength-text="15"
                    >
                      <div className="btn-fill"></div>
                      <span className="btn-text">
                        <span className="btn-text-inner change">
                          Download Full CV (PDF)
                          <svg
                            width="14px"
                            height="14px"
                            viewBox="0 0 14 14"
                            fill="none"
                            style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline-block' }}
                          >
                            <path
                              d="M7 1v8.5M7 9.5l-3.5-3.5M7 9.5l3.5-3.5M1.5 12.5h11"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
