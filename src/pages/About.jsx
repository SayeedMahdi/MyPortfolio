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
              <h2>Education &amp;<br />Background</h2>
              <p>I am Sayeed Mahdi Mousavi, a Project Manager and Full Stack Developer based in Herat, Afghanistan, with strong experience in backend development and delivering scalable digital products.</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <h5>Degree</h5>
                  <h4>B.Tech in Computer Science</h4>
                  <p>Global Group of Institutes, Amritsar (2023 — 2027)</p>
                </div>
                <div className="credential-item">
                  <h5>Foundation</h5>
                  <h4>Intermediate, PCM</h4>
                  <p>Gopeshwar College, Hathua (2021 — 2023)</p>
                </div>
                <div className="credential-item">
                  <h5>Core Competencies</h5>
                  <div className="credential-tags">
                    <span>Project Management</span>
                    <span>Backend Development</span>
                    <span>Full Stack</span>
                    <span>API Design</span>
                    <span>Database Systems</span>
                    <span>Node.js</span>
                    <span>React</span>
                    <span>System Architecture</span>
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
