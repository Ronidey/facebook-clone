import React from 'react';

function ProfilePlaceholder() {
  return (
    <div
      className='ProfilePlaceholder fade-in-out'
      style={{ background: '#fff', paddingBottom: '1rem' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            height: '40vh',
            backgroundColor: '#f7f7f7',
            borderRadius: '10px'
          }}
        ></div>
        <div
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: '#eee',
            transform: 'translateY(-70%)',
            margin: '0 auto'
          }}
        ></div>
        <div
          style={{
            width: '200px',
            height: '20px',
            backgroundColor: '#eee',
            margin: '-70px auto 0',
            borderRadius: '10px'
          }}
        ></div>

        <div
          style={{
            width: '250px',
            height: '15px',
            backgroundColor: '#eee',
            margin: '1rem auto 0',
            borderRadius: '10px'
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProfilePlaceholder;
