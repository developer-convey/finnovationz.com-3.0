"use client";
import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

const Spinner = () => (
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
);
const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="position-fixed top-0 start-50 translate-middle-x mt-3"
          style={{ zIndex: 9999 }}
        >
          <div className="d-flex align-items-center gap-3 bg-success bg-opacity-90 text-white px-4 py-3 rounded shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="fw-medium">{message}</span>
            <button
              onClick={onClose}
              className="btn-close btn-close-white ms-2"
              style={{ fontSize: '0.8rem' }}
              aria-label="Close"
            ></button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Equityform = ({ show, handleClose, s3Url, setId, title = "Get In Touch" }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        dynamicResponses: {}
    });
    const [errors, setErrors] = useState({});
    const [questions, setQuestions] = useState([]);
    const [questionsLoading, setQuestionsLoading] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    // Toast handlers
    const showSuccessToast = (message) => {
      setToastMessage(message);
      setShowToast(true);
    };
  
    const hideToast = () => {
      setShowToast(false);
      setToastMessage('');
    };
  
    useEffect(() => {
        if (show) {
            const fetchQuestions = async () => {
                if (!setId) return;
                setQuestionsLoading(true);
                try {
                    const response = await fetch(`https://brockersbackend.finnovationz.com/api/form/get-questions?setId=${setId}`);
                    if (!response.ok) throw new Error('Failed to fetch questions.');

                    const data = await response.json();
                    const fetchedQuestions = data.questions || [];
                    setQuestions(fetchedQuestions);

                    // ✅ FIX: Correctly read the btnUrl from the nested questions array
                    if (fetchedQuestions.length > 0) {
                        const urlFromApi = fetchedQuestions[0].btnUrl || fetchedQuestions[0].buttonUrl; // Check for both keys
                        if (urlFromApi) {
                            setRedirectUrl(urlFromApi);
                        }
                    }

                } catch (error) {
                    console.error("Error fetching questions:", error);
                } finally {
                    setQuestionsLoading(false);
                }
            };
            fetchQuestions();
        } else {
            setFormData({ name: '', email: '', mobile: '', dynamicResponses: {} });
            setErrors({});
            setApiResponse(null);
            setQuestions([]);
            setRedirectUrl('');
            // Reset toast state when modal closes
            setShowToast(false);
            setToastMessage('');
        }
    }, [show, setId]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email.";
        if (!formData.mobile.trim()) newErrors.mobile = "Phone number is required.";
        else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Please enter a valid 10-digit number.";
        
        questions.forEach(q => {
            if (q && q.question && q.isRequired && !formData.dynamicResponses[q._id]) {
                newErrors[q._id] = `${q.question} is required.`;
            }
        });
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleDynamicChange = (questionId, value) => {
        setFormData(prev => ({
            ...prev,
            dynamicResponses: { ...prev.dynamicResponses, [questionId]: value }
        }));
        if (errors[questionId]) setErrors(prev => ({ ...prev, [questionId]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        setApiResponse(null);
        
        const payload = {
            setId,
            userInfo: { name: formData.name, email: formData.email, phoneNumber: formData.mobile },
            responses: formData.dynamicResponses,
        };

        try {
            const response = await fetch('https://brockersbackend.finnovationz.com/api/form/submit-responses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong.');
            }

            // This will now be visible because the redirect/close logic is fixed

            const activeSheet = questions.find(q => q.google_sheets_status && q.google_sheet_id);
            if (activeSheet) {
                const formattedResponses = Object.keys(formData.dynamicResponses).reduce((acc, qId) => {
                    const question = questions.find(q => q._id === qId);
                    if(question && question.question) { // Ensure question text exists
                        acc[question.question] = formData.dynamicResponses[qId];
                    }
                    return acc;
                }, {});
                
                // Fire and forget the Google Sheets log
                fetch("https://brockersbackend.finnovationz.com/api/form/log-event", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        sheetId: activeSheet.google_sheet_id, setId,
                        userInfo: payload.userInfo,
                        responses: formattedResponses,
                        timestamp: new Date().toISOString(),
                    }),
                }).catch(gsError => console.error("❌ Error sending data to Google Sheets:", gsError));
            }

            if (redirectUrl) {
              // If redirect URL exists, redirect after 2 seconds (no toast)
              setTimeout(() => {
                window.location.href = redirectUrl;
              }, 2000);
            } else  {
              // Show toast ONLY if there's no redirect AND no s3Url
              showSuccessToast("Thank you for your submission.");
            
              // Auto close modal after 3 seconds
              setTimeout(() => {
                handleClose();
              }, 3000);
            }

        } catch (error) {
            setApiResponse({ message: error.message, type: 'error' });
            setIsSubmitting(false); // ✅ Only stop submitting on error
        }
        // We don't use 'finally' so the button stays disabled during the 2-second redirect wait
    };

    return (
      <>
        <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={hideToast} 
      />
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center h5">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4">
                <p className="text-center text-muted mb-4" style={{ marginTop: '-8px' }}>
                    Enter your details to get the course brochure.
                </p>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name"><Form.Label>Full Name<span className="text-danger ms-1">*</span></Form.Label><Form.Control type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} /><Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback></Form.Group>
                    <Form.Group className="mb-3" controlId="email"><Form.Label>Email Address<span className="text-danger ms-1">*</span></Form.Label><Form.Control type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} /><Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback></Form.Group>
                    <Form.Group className="mb-4" controlId="mobile"><Form.Label>Phone Number<span className="text-danger ms-1">*</span></Form.Label><Form.Control type="tel" name="mobile" placeholder="Enter your 10-digit mobile number" value={formData.mobile} onChange={handleChange} isInvalid={!!errors.mobile} maxLength={10} /><Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback></Form.Group>
                    
                    {questionsLoading && <div className="text-center my-3"><Spinner /></div>}
                    {!questionsLoading && questions.map(q => {
                        if (!q || !q._id || !q.question) return null; // Filter out questions without text
                        return (
                            <Form.Group className="mb-3" controlId={q._id} key={q._id}>
                                <Form.Label>{q.question}{q.isRequired ? <span className="text-danger ms-1">*</span> : <span className="text-muted small ms-1">(Optional)</span>}</Form.Label>
                                {q.type === 'select' ? (
                                    <Form.Select name={q._id} value={formData.dynamicResponses[q._id] || ''} onChange={(e) => handleDynamicChange(q._id, e.target.value)} isInvalid={!!errors[q._id]}>
                                        <option value="">Select an option</option>
                                        {q.options?.map((opt, i) => (<option key={i} value={opt}>{opt}</option>))}
                                    </Form.Select>
                                ) : (
                                    <Form.Control type={q.type || 'text'} name={q._id} placeholder={`Enter ${q.question.toLowerCase()}`} value={formData.dynamicResponses[q._id] || ''} onChange={(e) => handleDynamicChange(q._id, e.target.value)} isInvalid={!!errors[q._id]}/>
                                )}
                                <Form.Control.Feedback type="invalid">{errors[q._id]}</Form.Control.Feedback>
                            </Form.Group>
                        )
                    })}
                    <Button type="submit" disabled={isSubmitting} className="w-100 d-flex align-items-center justify-content-center gap-2" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderColor: '#4f46e5', padding: '12px', fontSize: '1rem' }}>
                        {isSubmitting && <Spinner />}
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                    {apiResponse && (<div className={`mt-3 text-center p-2 rounded alert alert-danger`}>{apiResponse.message}</div>)}
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
};

export default Equityform;