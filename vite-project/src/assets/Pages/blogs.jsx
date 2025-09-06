import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const { date } = useParams(); // get blog date from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // fetch blog by date instead of id
    axios.get(`http://localhost:5000/api/blogs?date=${date}`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err));
  }, [date]);

  if (!blog) return <p>Loading blog...</p>;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>{blog.title}</h2>
        <p style={styles.date}>
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>
      <p style={styles.content}>{blog.content}</p>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: '800px',
    margin: '40px auto',
    fontFamily: '"Fira Code", "Courier New", monospace',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#42484eff',
    fontWeight: 'bold',
    margin: 0,
  },
  date: {
    fontSize: '12px',
    opacity: 0.7,
    color: 'gray',
    margin: 0,
  },
  content: {
    fontSize: '16px',
    lineHeight: 1.6,
  },
};

export default Blog;
