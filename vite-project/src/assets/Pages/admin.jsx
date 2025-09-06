import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Pages/header';

const API_BASE = 'http://localhost:5000'; 

const AdminPanel = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    fetch(`${API_BASE}/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.status === 401) {
          setError('Unauthorized - please login.');
          setLoading(false);
          throw new Error('Unauthorized');
        }
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        if (!error) setError('Failed to fetch posts.');
        setLoading(false);
        console.error(err);
      });
  }, [token, error]);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!token) {
      setError('You must be logged in to upload posts.');
      return;
    }

    const newPost = { title, content };

    fetch(`${API_BASE}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    })
      .then(res => {
        if (res.status === 401) {
          setError('Unauthorized - please login.');
          throw new Error('Unauthorized');
        }
        if (!res.ok) {
          throw new Error('Failed to upload post');
        }
        return res.json();
      })
      .then(data => {
        setPosts([data, ...posts]);
        setTitle('');
        setContent('');
      })
      .catch(err => {
        console.error(err);
        setError('Failed to upload post');
      });
  };

  // Redirect to login page
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  // TODO: implement handleDelete if you want

  return (
    <div style={styles.container}>
      <Header />
      <h1 style={styles.title}>Admin Panel</h1>

      {!token ? (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p>You must be logged in to access the admin panel.</p>
          <button onClick={handleLoginRedirect} style={styles.loginButton}>
            Login
          </button>
        </div>
      ) : error ? (
        <div style={{ color: 'red', marginBottom: 20 }}>{error}</div>
      ) : loading ? (
        <p>Loading posts...</p>
      ) : (
        <>
          <form onSubmit={handleUpload} style={styles.form}>
            <h2 style={styles.sectionTitle}>Upload New Post</h2>

            <input
              type="text"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={styles.input}
            />

            <textarea
              placeholder="Post Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              required
              style={styles.textarea}
            />

            <button type="submit" style={styles.uploadButton}>Upload</button>
          </form>

          <div style={styles.postList}>
            <h2 style={styles.sectionTitle}>All Posts</h2>

            {posts.length === 0 ? (
              <p style={styles.noPosts}>No posts available.</p>
            ) : (
              posts.map(post => (
                <div key={post.id} style={styles.postCard}>
                  <div>
                    <h3 style={styles.postTitle}>{post.title}</h3>
                    <p style={styles.postContent}>{post.content}</p>
                  </div>
            
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    color: '#222222',
    fontFamily: '"Fira Code", "Courier New", monospace',
    minHeight: '100vh',
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#111',
  },
  loginButton: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: '"Fira Code", "Courier New", monospace',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#111',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontFamily: '"Fira Code", "Courier New", monospace',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontFamily: '"Fira Code", "Courier New", monospace',
    resize: 'vertical',
  },
  uploadButton: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: '"Fira Code", "Courier New", monospace',
  },
  postList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  postCard: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTitle: {
    margin: 0,
    fontSize: '18px',
    color: '#333',
  },
  postContent: {
    marginTop: '8px',
    fontSize: '14px',
    color: '#555',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: '"Fira Code", "Courier New", monospace',
  },
  noPosts: {
    fontStyle: 'italic',
    color: '#777',
  },
};

export default AdminPanel;
