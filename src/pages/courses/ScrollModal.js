'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [questionsError, setQuestionsError] = useState(null);
  const [buttonUrl, setButtonUrl] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dynamicResponses: {},
  });

  const [errors, setErrors] = useState({});
  const setId = "1750252659833";
  const pathname = usePathname();
  const hideOnPages = ["/courses/combo", "/courses/fmvm", "courses/fmvm-modelling",
  "courses/fmvm-modelling/thankyou",
  "courses/fmvm",
  "courses/fmvm/thankyou",
  "courses/combo-of-foundation-course-for-beginners-and-fundamental-analysis-2.O",
  "courses/big-combo",
   "courses/combo", 
   "courses/offer", 
   "courses/offer-marathi"];
  const isHidden = hideOnPages.includes(pathname);

  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(`[data-dropdown-id="${openDropdown}"]`)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  useEffect(() => {
    const hasCompleted = localStorage.getItem('modalCompleted2') === 'true';
    setFormCompleted(hasCompleted);
  }, []);

  useEffect(() => {
    if (showModal && questions.length === 0 && !questionsLoading) {
      const fetchQuestions = async () => {
        setQuestionsLoading(true);
        setQuestionsError(null);
        try {
          const response = await fetch(`https://brockersbackend.finnovationz.com/api/form/get-questions?setId=${setId}`);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch form questions.');
          }
          const data = await response.json();
          const fetchedQuestions = data.questions || [];
          
          // --- FIX: Find buttonUrl from the original data first ---
          const questionWithUrl = fetchedQuestions.find(q => q.buttonUrl);
          if (questionWithUrl) {
            setButtonUrl(questionWithUrl.buttonUrl);
          }

          // --- FIX: Filter out questions where the question text is null ---
          const visibleQuestions = fetchedQuestions.filter(q => q.question !== null);
          setQuestions(visibleQuestions);

        } catch (error) {
          setQuestionsError(error.message);
        } finally {
          setQuestionsLoading(false);
        }
      };
      fetchQuestions();
    }
  }, [showModal, questions.length, questionsLoading, setId]);

  useEffect(() => {
    if (formCompleted) {
      return;
    }
    const handleScroll = () => {
      if (!scrollTriggered && !showModal && window.scrollY > 100) {
        setScrollTriggered(true);
        setShowModal(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showModal, scrollTriggered, formCompleted]);

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
        setResponseType(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const validate = (values) => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Full Name is a required field";
    if (!values.email.trim()) {
      newErrors.email = "Email is a required field";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid email address";
    }
    const mobile = values.mobile.trim();
    if (!mobile) {
      newErrors.mobile = "Phone number is a required field";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }
    // This loop now only runs on the filtered, visible questions
    questions.forEach(q => {
      if (q.isRequired && (!values.dynamicResponses[q._id] || values.dynamicResponses[q._id].length === 0)) {
        newErrors[q._id] = `${q.question} is a required field.`;
      }
    });
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleDynamicQuestionChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      dynamicResponses: { ...prev.dynamicResponses, [questionId]: value },
    }));
    if (errors[questionId]) setErrors(prev => ({ ...prev, [questionId]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("--- 1. Submit button clicked. ---");
    console.log("Current form data:", formData);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    console.log("--- 2. Validation check complete. ---");
    console.log("Validation errors found:", validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("--- 3. Validation passed. Preparing to send data. ---");
      setLoading(true);
      const userInfo = { name: formData.name, email: formData.email, phoneNumber: formData.mobile };

      const formattedResponses = questions.reduce((acc, q) => {
        const answer = formData.dynamicResponses[q._id];
        if (answer) {
          acc[q._id] = Array.isArray(answer) ? answer.join(', ') : answer;
        }
        return acc;
      }, {});

      const payload = { setId, userInfo, responses: formattedResponses };
      console.log("--- 4. Payload constructed. ---");
      console.log("Payload to be sent:", JSON.stringify(payload, null, 2));

      try {
        console.log("--- 5. Sending data to backend... ---");
        const response = await fetch('https://brockersbackend.finnovationz.com/api/form/submit-responses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        console.log("--- 6. Received response from backend. ---");
        console.log("Response status:", response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Backend error response:", errorData);
          throw new Error(errorData.message || 'Something went wrong with the submission.');
        }

        const result = await response.json();
        console.log("Form Submitted Successfully:", result);

        const activeSheet = questions.find(q => q.google_sheets_status && q.google_sheet_id);
        if (activeSheet) {
          console.log("Sending data to Google Sheets via backend...");
          try {
            await fetch("https://brockersbackend.finnovationz.com/api/form/log-event", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                sheetId: activeSheet.google_sheet_id,
                setId,
                userInfo,
                responses: formattedResponses,
                timestamp: new Date().toISOString(),
              }),
            });
            console.log("✔️ Data sent to Google Sheets successfully!");
          } catch (gsError) {
            console.error("❌ Error sending data to Google Sheets:", gsError);
          }
        }

        setResponseType("success");
        setResponseMessage("Thank you for your submission.");
        setFormCompleted(true);
        localStorage.setItem("modalCompleted2", "true");

        setTimeout(() => {
          if (buttonUrl) {
            window.location.href = buttonUrl;
          } else {
            handleClose();
          }
        }, 2000);

      } catch (error) {
        console.error("--- ERROR DURING SUBMISSION ---", error);
        setResponseMessage(error.message);
        setResponseType("error");
      } finally {
        setLoading(false);
        console.log("--- 7. Submission process finished. ---");
      }
    } else {
        console.log("--- Validation FAILED. Data not sent. ---");
    }
  };

  const renderQuestion = (question) => {
    const questionId = question._id;
    const commonInputStyle = { width: '100%', padding: '8px 16px', borderRadius: '10px', fontSize: '14px', background: '#fafbfc', position: 'relative', cursor: 'pointer' };
    const errorBorderStyle = { border: errors[questionId] ? '2px solid #e74c3c' : '2px solid #e1e8ed' };

    const label = (
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50', fontSize: '14px' }}>
        {question.question} {question.isRequired && '*'}
      </label>
    );

    switch (question.type) {
      case 'single':
        return (
          <div key={questionId} style={{ marginBottom: '10px' }}>
            {label}
            <input
              type="text"
              name={questionId}
              placeholder={`Enter ${question.question.toLowerCase()}`}
              value={formData.dynamicResponses[questionId] || ''}
              onChange={(e) => handleDynamicQuestionChange(questionId, e.target.value)}
              disabled={loading}
              style={{ ...commonInputStyle, cursor: 'text', ...errorBorderStyle }}
            />
            {errors[questionId] && <div style={{ color: '#e74c3c', fontSize: '12px', marginTop: '6px' }}>{errors[questionId]}</div>}
          </div>
        );
      case 'select':
        return (
          <div key={questionId} style={{ marginBottom: '10px' }}>
            {label}
            <select
              name={questionId}
              value={formData.dynamicResponses[questionId] || ''}
              onChange={(e) => handleDynamicQuestionChange(questionId, e.target.value)}
              disabled={loading}
              style={{ ...commonInputStyle, ...errorBorderStyle }}
            >
              <option value="" disabled>Select an option</option>
              {question.options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
            </select>
            {errors[questionId] && <div style={{ color: '#e74c3c', fontSize: '12px', marginTop: '6px' }}>{errors[questionId]}</div>}
          </div>
        );
      case 'multi-select': {
        const currentSelection = formData.dynamicResponses[questionId] || [];
        const isDropdownOpen = openDropdown === questionId;

        return (
          <div key={questionId} style={{ marginBottom: '10px', position: 'relative' }} data-dropdown-id={questionId}>
            {label}
            <div
              onClick={() => setOpenDropdown(isDropdownOpen ? null : questionId)}
              style={{ ...commonInputStyle, ...errorBorderStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span style={{ color: currentSelection.length > 0 ? '#2c3e50' : '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {currentSelection.length > 0 ? currentSelection.join(', ') : 'Select one or more options'}
              </span>
              <span style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
            </div>
            {isDropdownOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff',
                border: '1px solid #e1e8ed', borderRadius: '10px', marginTop: '4px',
                padding: '8px', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                maxHeight: '200px', overflowY: 'auto'
              }}>
                {question.options.map((option, index) => (
                  <label key={index} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '14px', padding: '8px', borderRadius: '6px', userSelect: 'none' }}>
                    <input
                      type="checkbox"
                      name={questionId}
                      value={option}
                      checked={currentSelection.includes(option)}
                      onChange={() => {
                        const newSelection = currentSelection.includes(option)
                          ? currentSelection.filter(item => item !== option)
                          : [...currentSelection, option];
                        handleDynamicQuestionChange(questionId, newSelection);
                      }}
                      disabled={loading}
                      style={{ marginRight: '10px', cursor: 'pointer' }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {errors[questionId] && <div style={{ color: '#e74c3c', fontSize: '12px', marginTop: '6px' }}>{errors[questionId]}</div>}
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className={isHidden ? "d-none" : ""}>
      {!formCompleted && !showModal && (
        <button
          onClick={handleOpen}
          style={{
            position: 'fixed', bottom: '100px', right: '50px', width: '46px', height: '46px',
            borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: '5px solid lightgreen', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            transition: 'transform 0.2s ease-out', padding: '4px'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'blink 1.5s ease-in-out infinite' }}>
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </button>
      )}

      {showModal && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 10050, animation: 'slideInUp 0.4s ease-out forwards' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)', width: '300px', maxHeight: '600px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #87ceeb 100%)', padding: '15px 24px 16px', borderRadius: '16px 16px 0 0', position: 'relative', color: 'black' }}>
              <button onClick={handleClose} style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'black', fontSize: '18px', fontWeight: 'bold' }}>×</button>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 8px 0' }}>Get Instant Discount</h2>
              <p style={{ opacity: 0.9, margin: 0, fontSize: '14px' }}>Enter details to get discount</p>
            </div>
            <div style={{ padding: '18px', maxHeight: '450px', overflowY: 'auto' }}>
              {questionsLoading && <p style={{ textAlign: 'center' }}>Loading form...</p>}
              {questionsError && <p style={{ textAlign: 'center', color: 'red' }}>Error: {questionsError}</p>}
              {responseMessage && (<div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', backgroundColor: responseType === 'success' ? '#d4edda' : '#f8d7da', color: responseType === 'success' ? '#155724' : '#721c24' }}>{responseMessage}</div>)}
              
              {!questionsLoading && !questionsError && (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: '5px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50', fontSize: '14px' }}>Full Name *</label>
                    <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} disabled={loading} style={{ width: '100%', padding: '8px 16px', border: errors.name ? '2px solid #e74c3c' : '2px solid #e1e8ed', borderRadius: '10px', fontSize: '14px', background: '#fafbfc' }} />
                    {errors.name && (<div style={{ color: '#e74c3c', fontSize: '12px', marginTop: '6px' }}>{errors.name}</div>)}
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50', fontSize: '14px' }}>Email ID *</label>
                    <input type="email" name="email" placeholder="Enter your email ID" value={formData.email} onChange={handleInputChange} disabled={loading} style={{ width: '100%', padding: '8px 16px', border: errors.email ? '2px solid #e74c3c' : '2px solid #e1e8ed', borderRadius: '10px', fontSize: '14px', background: '#fafbfc' }} />
                    {errors.email && (<div style={{ color: '#e74c3c', fontSize: '12px', marginTop: '6px' }}>{errors.email}</div>)}
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50', fontSize: '14px' }}>Mobile Number *</label>
                    <div style={{ display: 'flex', border: errors.mobile ? '2px solid #e74c3c' : '2px solid #e1e8ed', borderRadius: '10px', background: '#fafbfc', overflow: 'hidden' }}>
                      <span style={{ background: '#f1f3f4', padding: '8px 14px', fontSize: '14px', color: '#5f6368', borderRight: '1px solid #e1e8ed' }}>+91</span>
                      <input inputMode="numeric" type="tel" name="mobile" placeholder="Enter mobile number" value={formData.mobile} onChange={handleInputChange} maxLength={10} disabled={loading} style={{ flex: 1, padding: '8px 16px', border: 'none', background: 'transparent', outline: 'none' }} />
                    </div>
                    {errors.mobile && (<div style={{ color: '#e74c3c', fontSize: '12px', marginTop: '6px' }}>{errors.mobile}</div>)}
                  </div>

                  {questions.map(q => renderQuestion(q))}

                  <button type="submit" disabled={loading} style={{ width: '100%', marginTop: '10px', padding: '10px 24px', background: loading ? '#bdc3c7' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
                    {loading ? 'Submitting...' : 'Get My Discount'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes slideInUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes blink { 50% { opacity: 0.5; } }
      `}</style>
    </div>
  );
};

export default ScrollModal;
