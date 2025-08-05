"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import  { forwardRef } from "react";
const Form=forwardRef((props, ref) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(""); 
const router=useRouter()
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(null);
    setResponseType("");

    // Basic validation
    if (!userInfo.name || !userInfo.phoneNumber || !userInfo.email) {
        setResponseMessage("All fields are required.");
        setResponseType("error");
        return;
    }

    setLoading(true);

    const setId = "1743579594048"; 
    const payload = {
        setId,
        userInfo: {
            name: userInfo.name,
            email: userInfo.email,
            phoneNumber: userInfo.phoneNumber,
        },
        responses: [],
    };

    try {
        // Fetch integration details to get the Pabbly URL
        const integrationResponse = await fetch(`https://brockersbackend.finnovationz.com/api/form/forms/${setId}/integrations`);
        if (!integrationResponse.ok) {
            throw new Error("Failed to fetch integration data!");
        }

        const integrationData = await integrationResponse.json();
        const pabblyWebhook = integrationData.integrations?.["pabbly-webhook"];
        const pabblyUrl = pabblyWebhook?.connected ? pabblyWebhook.integrationId : null;
console.log(pabblyUrl)
        // Send data to backend with the Pabbly URL (if available)
        const formResponse = await fetch("https://brockersbackend.finnovationz.com/api/form/submit-responses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...payload, pabblyUrl }),  // Send Pabbly URL to the backend
        });

        if (!formResponse.ok) {
            throw new Error(`Data submission failed! Status: ${formResponse.status}`);
        }

        router.push('/smm-marathi1/thankyou');

        setResponseType("success");

    } catch (error) {
        setResponseMessage(error.message);
        setResponseType("error");
    } finally {
        setLoading(false);
        setTimeout(() => {
            setResponseMessage(null);
        }, 3000);
    }
};

  
  return (
    <div  ref={ref} className="flex mt-5 justify-center items-center min-h-screen p-4 relative mt-[-100px]  md:mt-[-50px] mb-[-100px]">
     
      <AnimatePresence>
        {responseMessage && (
          <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className={`fixed top-16 right-4 px-6 py-3 rounded-lg shadow-lg text-white text-sm ${
            responseType=== "success" ? "bg-green-500" : "bg-red-500"
          }`} style={{zIndex:1100}}
        >
          {responseMessage}
        </motion.div>
        )}
      </AnimatePresence>

      <div
        className="bg-transparent shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-md"
        style={{ background: "linear-gradient(180deg, #E7F1FA 18%, #FFF 50.07%)" }}
      >
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name */}
          <label className="block text-center text-gray-700 md:text-[30px] text-[25px] font-extrabold mb-6">
          Reserve Your Spot Now
            </label>
          <div className="mb-4 relative">
            <label className="block text-left text-gray-700 md:text-[20px] text-[15px] font-extrabold mb-3">
              Your Full Name :<span className="text-red-500">*</span>
            </label>
            <fieldset className="border border-gray-300 rounded-lg h-11 relative">
             
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="w-full focus:ring-2 h-10  bg-transparent rounded-lg focus:ring-blue-400 focus:outline-none"
                required
              />
            </fieldset>
          </div>

   
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-left md:text-[20px] text-[15px] font-extrabold mb-3">
             Your Phone Number :<span className="text-red-500">*</span>
            </label>
            <fieldset className="border border-gray-300 rounded-lg h-11 relative">
              
              <input
                type="text"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                className="w-full bg-white focus:ring-2 h-10 rounded-lg focus:ring-blue-400 focus:outline-none"
                required
              />
            </fieldset>
          </div>
 
      
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-left md:text-[20px] text-[15px] font-extrabold mb-3">
             Your Email ID :<span className="text-red-500">*</span>
            </label>
            <fieldset className="border border-gray-300 rounded-lg h-11 relative">
             
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="w-full bg-white focus:ring-2 h-10 rounded-lg focus:ring-blue-400 focus:outline-none"
                required
              />
            </fieldset>
          </div>

          
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-14 py-3 rounded-full text-white bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-90 transition"
              disabled={loading}
            >
{loading ? (
  <div className="flex items-center">
    <svg
      className="animate-spin h-5 w-5 mr-2 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  </div>
) : (
  "Reserve My Spot"
)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
})
export default Form;