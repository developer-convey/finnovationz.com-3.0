import React, { useState } from 'react';

export default function ExitIntentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone });
    alert('Thank you!');
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white', padding: '2rem', borderRadius: '8px',
          width: '90%', maxWidth: '500px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="mb-3">Before You Go...</h3>
        <p className="text-muted mb-4">Please provide your details so we can get in touch.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exit-name" className="form-label">Name</label>
            <input type="text" className="form-control" id="exit-name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="exit-email" className="form-label">Email</label>
            <input type="email" className="form-control" id="exit-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="exit-phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="exit-phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}