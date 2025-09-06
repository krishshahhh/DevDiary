import React, { useEffect, useState } from 'react';
import Header from '../Pages/header';

const HomePage = () => {
  const [theme, setTheme] = useState(document.body.className || 'light');
  const [openBlog, setOpenBlog] = useState(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className || 'light');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  // ✅ Only declare blogs once
  const blogs = [
    {
      date: "2025-09-01",
      title: "Why Devs Love Node.js",
      summary: `Node.js is a runtime environment that allows you to run JavaScript outside the browser, mainly on servers.
It is built on Google Chrome’s V8 engine, which makes it fast and efficient.

Unlike traditional server technologies, Node.js uses a non-blocking, event-driven model, meaning it can handle thousands of requests at once without slowing down. This makes it perfect for real-time apps like chat apps, streaming, or APIs.

Developers love it because:

- One language (JavaScript) works for both frontend & backend.
- It has a huge library of packages (npm) to build anything quickly.
- It’s lightweight, scalable, and widely used by companies like Netflix, PayPal, and LinkedIn.

In short: Node.js = Fast, scalable, JavaScript-powered backend. 🚀`,
    },
    {date:"2025-09-06",
      title: "The Power of Web Protocols",
      summary: `The internet works because of some important rules called protocols. Two of the most common ones are HTTP and HTTPS.

HTTP (HyperText Transfer Protocol) is how your browser talks to a website. When you type a link, your browser sends a request and the server sends back the page. It’s simple and fast, but the problem is that data travels in plain text. This means hackers can see it if they intercept the connection.

To solve this, we use HTTPS (HyperText Transfer Protocol Secure). It works just like HTTP but adds encryption. This makes your data private and safe. Even if someone tries to spy, they will only see scrambled text. That’s why banks, e-commerce sites, and almost every modern website use HTTPS today.

Another useful protocol is FTP (File Transfer Protocol). This one is made for moving files between computers, like uploading a file to a server. It works well, but it’s not secure unless we use its safer version, SFTP.

In short:

HTTP = basic, but not safe.

HTTPS = safe and trusted.

FTP/SFTP = for moving files.`
    }
  ];

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
        {blogs.map((blog, index) => (
          <div key={index} style={styles.terminalLine}>
            {/* Blog header row */}
            <div
              style={styles.blogHeader}
              onClick={() =>
                setOpenBlog(openBlog === index ? null : index)
              }
            >
              <h3
                style={{
                  ...styles.blogTitle,
                  color: isDark ? '#00ccff' : '#007BFF',
                }}
              >
                {blog.title}
              </h3>
              <span
                style={{
                  ...styles.blogDate,
                  color: isDark ? '#aaa' : '#666',
                }}
              >
                {blog.date}
              </span>
            </div>

            {/* Blog summary toggle */}
            {openBlog === index && (
              <p style={styles.terminalMsg}>› {blog.summary}</p>
            )}
          </div>
        ))}
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
  terminalLine: {
    lineHeight: "1.6",
  },
  blogHeader: {
    display: "flex",
    justifyContent: "space-between", // ✅ Title left, date right
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "5px",
  },
  blogTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0,
  },
  blogDate: {
    fontSize: "12px",
    opacity: 0.8,
  },
  terminalMsg: {
    marginLeft: "20px",
    fontSize: "14px",
    opacity: 0.9,
    whiteSpace: "pre-line", // ✅ keeps new lines & bullets
  },
};

export default HomePage;
