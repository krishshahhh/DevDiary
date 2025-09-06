import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Pages/header';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
     
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Header />
      </div>

      <button
        onClick={handleLoginRedirect}
        style={{
          marginTop: 30,
          padding: '10px 20px',
          fontSize: 16,
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: 6,
        }}
      >
        Login as Admin
      </button>
    </div>
  );
};

export default AdminPanel;
