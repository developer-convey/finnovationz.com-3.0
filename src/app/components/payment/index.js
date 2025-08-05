"use client";

import { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft, Lock, Shield } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom styles for elements not covered by Bootstrap
const CustomStyles = () => (
  <style>{`
    body {
      background-color: #f9fafb;
    }
    .decorative-line {
      width: 48px;
      height: 4px;
      background-color: #0d6efd;
    }
    .feature-bullet {
      width: 8px;
      height: 8px;
      background-color: #0d6efd;
      border-radius: 50%;
      margin-top: 8px;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .payment-icon {
      width: 32px;
      height: 24px;
      color: white;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
    }
    .confetti {
      position: absolute;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      animation-name: bounce;
      animation-timing-function: linear;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-100vh); }
    }
    .spinner-border {
       width: 4rem;
       height: 4rem;
       border-width: .35em;
    }
  `}</style>
);


export default function PaymentPage() {
  const [currentStep, setCurrentStep] = useState('form');
  const [isProcessing, setIsProcessing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  // Course data
  const courseData = {
    title: 'Monsoon Sale Fundamental 2.O',
    subtitle: 'The Complete Course On Fundamental Analysis 3.0',
    description: 'The Complete Course on Fundamental Analysis 3.0',
    price: 1,
    features: [
      'Art Of Value Investing',
      'How To Read Numbers',
      'How To Sell Stock At Right Time',
      'Critical Management Analysis',
      'Product Analysis',
      'Finding the Best Company In The New Sectors'
    ],
    contact: {
      email: 'support@finnovationz.com',
      phone: '8484888968'
    }
  };

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!userDetails.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!userDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!userDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(userDetails.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setCurrentStep('processing');
    setIsProcessing(true);
    
    try {
      // Simulate API call to create order
      await new Promise(resolve => setTimeout(resolve, 2000));

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_key',
        amount: courseData.price * 100,
        currency: 'INR',
        name: 'Ikashi Fintech Private Limited',
        description: courseData.description,
        prefill: {
          name: userDetails.firstName,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        theme: {
          color: '#0d6efd',
        },
        handler: function (response) {
          setIsProcessing(false);
          setCurrentStep('success');
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            setCurrentStep('form');
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      setIsProcessing(false);
      setCurrentStep('form');
      console.error('Payment error:', error);
    }
  };

  // Success Animation Component
  const SuccessAnimation = () => (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex align-items-center justify-content-center" style={{zIndex: 1050}}>
      {/* Confetti Animation */}
      <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden" style={{pointerEvents: 'none'}}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1'][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="text-center" style={{zIndex: 10, maxWidth: '500px', padding: '1.5rem'}}>
        <div className="mx-auto mb-4 bg-success-subtle rounded-circle d-flex align-items-center justify-content-center" style={{width: '96px', height: '96px'}}>
          <CheckCircle className="text-success" style={{width: '48px', height: '48px'}} />
        </div>
        <h1 className="h2 fw-bold text-dark mb-3">Payment Successful!</h1>
        <p className="fs-5 text-secondary mb-4">Thank you for your purchase. You will receive a confirmation email shortly.</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="btn btn-success btn-lg px-4 py-2"
        >
          Continue
        </button>
      </div>
    </div>
  );

  // Payment Processing Screen
  const PaymentProcessing = () => (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex align-items-center justify-content-center" style={{zIndex: 1040}}>
      <div className="text-center">
        <div className="spinner-border text-primary mx-auto mb-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h2 className="h4 fw-semibold text-dark mb-2">Secure Payment</h2>
        <p className="text-secondary d-flex align-items-center justify-content-center">
          <Lock style={{width: '16px', height: '16px', marginRight: '8px'}} />
          Processing your payment securely...
        </p>
      </div>
    </div>
  );

  if (currentStep === 'success') {
    return <SuccessAnimation />;
  }

  if (currentStep === 'processing' && isProcessing) {
    return <PaymentProcessing />;
  }

  return (
    <>
      <CustomStyles />
      <div className="min-vh-100">
        {/* Header */}
        <div className="bg-white border-bottom px-3 py-3">
          <div className="container-xl d-flex align-items-center">
            <button
              onClick={() => window.history.back()}
              className="btn btn-link text-secondary text-decoration-none d-flex align-items-center p-0 me-3"
            >
              <ArrowLeft style={{width: '16px', height: '16px', marginRight: '8px'}} />
              Back
            </button>
            <h1 className="h5 fw-semibold text-dark m-0">Ikashi Fintech Private Limited</h1>
          </div>
        </div>

        <div className="container-xl px-3 py-5">
          <div className="row g-5">
            {/* Left Side - Course Details */}
            <div className="col-lg-6 d-flex flex-column gap-4">
              <div>
                <h2 className="h3 fw-bold text-primary mb-2" style={{color: '#1e3a8a !important'}}>{courseData.title}</h2>
                <div className="decorative-line mb-3"></div>
                <h3 className="h5 fw-semibold text-primary mb-4" style={{color: '#1e40af !important'}}>{courseData.subtitle}</h3>
              </div>

              <div>
                <p className="text-secondary fw-medium mb-3">{courseData.description}</p>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  {courseData.features.map((feature, index) => (
                    <li key={index} className="d-flex align-items-start">
                      <div className="feature-bullet"></div>
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-primary cursor-pointer text-decoration-underline mb-4">Show More</p>
              </div>

              <div className="border-top pt-4">
                <h4 className="fw-semibold text-dark mb-3">Contact Us:</h4>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center text-secondary">
                    <span className="me-3">📧</span>
                    <span>{courseData.contact.email}</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary">
                    <span className="me-3">📞</span>
                    <span>{courseData.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Payment Details */}
            <div className="col-lg-6">
              <div className="bg-white shadow-lg border rounded-3">
                <div className="p-4 p-md-5">
                  <h3 className="h5 fw-semibold text-dark mb-2">Payment Details</h3>
                  <div className="decorative-line mb-4"></div>

                  <div className="d-flex flex-column gap-4">
                    <div>
                      <label htmlFor="firstName" className="form-label small fw-medium">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={userDetails.firstName}
                        onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
                        className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : ''}`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>

                    <div>
                      <label htmlFor="email" className="form-label small fw-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                        className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="form-label small fw-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                        className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    <div className="border-top pt-4">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="small fw-medium text-secondary">Amount</span>
                        <span className="h4 fw-bold text-dark m-0">₹{courseData.price.toLocaleString()}</span>
                      </div>

                      {/* Payment Method Icons */}
                      <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                        <div className="payment-icon" style={{backgroundColor: '#fd7e14'}}>UPI</div>
                        <div className="payment-icon" style={{backgroundColor: '#0d6efd'}}>VISA</div>
                        <div className="payment-icon" style={{backgroundColor: '#dc3545'}}>MC</div>
                        <div className="payment-icon" style={{backgroundColor: '#0dcaf0'}}>RP</div>
                        <div className="payment-icon" style={{backgroundColor: '#198754'}}>NB</div>
                      </div>

                      <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="btn btn-primary btn-lg w-100 py-3 fw-semibold"
                      >
                        Pay ₹{courseData.price.toLocaleString()}
                      </button>

                      <div className="d-flex align-items-center justify-content-center mt-3 small text-secondary">
                        <Shield style={{width: '12px', height: '12px', marginRight: '4px'}} />
                        Secured by Razorpay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
