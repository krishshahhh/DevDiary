import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FIXED_EMAIL = 'Krish@gmail.com';
const FIXED_PASSWORD = 'Krish';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
      localStorage.setItem('token', 'fake-jwt-token'); 
      setLoading(false);
      navigate('/admin'); 
    } else {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Login</h1>

      {error && <div style={{ color: 'red', marginBottom: 20 }}>{error}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={styles.input}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={styles.input}
          disabled={loading}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: '"Fira Code", "Courier New", monospace',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: '30px',
    color: '#222',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontFamily: '"Fira Code", "Courier New", monospace',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: '"Fira Code", "Courier New", monospace',
  },
};

export default Login;
