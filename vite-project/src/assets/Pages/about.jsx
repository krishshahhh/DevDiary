import React, { useEffect, useState } from 'react';
import Header from './header';

const About = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.body.className || 'light';
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      setTheme(document.body.className || 'light');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        ...styles.page,
        backgroundColor: isDark ? '#0d0d0d' : '#ffffff',
        color: isDark ? '#e2e2e2' : '#111',
      }}
    >
      <Header />
      <main style={styles.main}>
        <h3 style={styles.title}>Who am I?</h3>
        
        <p style={styles.terminalMsg}>
  I am a developer passionate about <b>Backend Engineering</b>, <b>DevOps</b>,{" "}
  <b>Blockchain</b>, and <b>Solana</b>. My focus lies in designing and 
  implementing scalable, high-performance systems that solve real-world 
  problems. <br /><br />
  With experience in building RESTful and GraphQL APIs, deploying cloud-native 
  applications, and working with distributed systems, I aim to bridge the gap 
  between robust backend infrastructures and modern Web3 solutions. <br /><br />
  I am also deeply interested in automation, CI/CD pipelines, and containerized 
  environments, as they play a vital role in accelerating development and 
  ensuring system reliability. Beyond traditional software, I am exploring 
  blockchain protocols and decentralized application development, particularly 
  within the Solana ecosystem.
</p>


        <h3 style={styles.title}>Core Skills</h3>
        <p style={styles.terminalMsg}>
          - Node.js, Express, MongoDB, PostgreSQL <br />
          - REST API & GraphQL <br />
          - Docker, Kubernetes, CI/CD <br />
          - Web3 & Blockchain fundamentals
        </p>

        <h3 style={styles.title}>Contact</h3>
        <p style={styles.terminalMsg}>
  {/* GitHub */}
  <a
    href="https://github.com/yourgithub"
    style={styles.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.6-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6-1.3 2.3-1.8.1-.7.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.96 10.96 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yourlinkedin"
    style={{ ...styles.link, marginLeft: '15px' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2 4.1 0 4.8 2.7 4.8 6.2V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 3.9V24h-4V8z"/>
    </svg>
  </a>

  {/* Gmail */}
  <a
    href="mailto:yourmail@gmail.com"
    style={{ ...styles.link, marginLeft: '15px' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.5l-8 5-8-5V6l8 5 8-5v2.5z"/>
    </svg>
  </a>
</p>

      </main>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "900px",
    margin: "40px auto",
    fontFamily: '"Fira Code", "Courier New", monospace',
    padding: "0 20px",
  },
  main: {
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  terminalMsg: {
    marginLeft: "20px",
    fontSize: "14px",
    opacity: 0.9,
    lineHeight: "1.6",
  },
  link: {
    color: "#00ccff",
    textDecoration: "none",
    marginRight: "10px",
  },
};

export default About;
