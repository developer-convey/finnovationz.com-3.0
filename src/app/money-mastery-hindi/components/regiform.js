import React, { useState } from "react";
import { forwardRef } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = forwardRef((props, ref) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(null);
    setResponseType("");

    if (!userInfo.name || !userInfo.phoneNumber || !userInfo.email) {
      setResponseMessage("All fields are required.");
      setResponseType("error");
      return;
    }

    setLoading(true);

    const setId = "1741681015560";
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
      const integrationResponse = await fetch(
        `https://brockersbackend.finnovationz.com/api/form/forms/${setId}/integrations`
      );
      if (!integrationResponse.ok) {
        throw new Error("Failed to fetch integration data!");
      }
      const integrationData = await integrationResponse.json();
      const pabblyWebhook = integrationData.integrations?.["pabbly-webhook"];
      const pabblyUrl = pabblyWebhook?.connected ? pabblyWebhook.integrationId : null;

      const formResponse = await fetch(
        "https://brockersbackend.finnovationz.com/api/form/submit-responses",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!formResponse.ok) {
        throw new Error(`Data submission failed! Status: ${formResponse.status}`);
      }

      if (pabblyUrl) {
        await fetch(pabblyUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      router.push("/money-mastery-hindi/thankyou");

      setResponseType("success");
      setUserInfo({ name: "", email: "", phoneNumber: "" });
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
    <div ref={ref} className="flex items-center justify-center bg-[#EAF5FC] px-6">
      <div className="md:w-[1100px] lg:w-[1220px] md:px-6 pt-[50px] pb-[50px] w-full">
        <h2 className="text-[26px] md:text-[55px] leading-[70px] font-light md:mb-[60px]">
          Reserve Your <br className="hidden md:block" />
          <span className="font-bold">Spot Now</span>
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-900 font-semibold mb-3">Your Full Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="Ex: Alex Worker"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
            <div>
              <label className="block text-gray-900 font-semibold mb-3">Phone</label>
              <input
                type="tel"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                placeholder="Ex: +91 01234 56789"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="Ex: yourmail@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 flex items-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#44C4B8] to-[#3A89F8] rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Reserve My Spot"}
            <span className="ml-2">➝</span>
          </button>
          {responseMessage && (
            <p className={`mt-4 text-${responseType === "error" ? "red" : "green"}-500`}>
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
});

export default RegisterForm;
