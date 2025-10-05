import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import redlogo from "../assets/images/voicebit-brand-icon.png";

// Simple sanitization function to remove HTML tags
const sanitizeInput = (input) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
};

const ContactForm = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState(() => {
    const cached = localStorage.getItem("formData");
    return cached
      ? JSON.parse(cached)
      : {
          firstName: "",
          lastName: "",
          title: "",
          email: "",
          phone: "",
          countryCode: "+1",
          restaurantName: "",
          locationName: "",
          website: "",
          restaurantType: "",
        };
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => {
      const updated = { ...prev, [name]: sanitizedValue };
      localStorage.setItem("formData", JSON.stringify(updated));
      return updated;
    });
    // Real-time validation
    const newErrors = { ...errors };
    switch (name) {
      case "firstName":
      case "lastName":
        newErrors[name] =
          value.trim() === ""
            ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
            : "";
        break;
      case "email":
        newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedValue)
          ? "Invalid email format"
          : "";
        break;
      default:
        newErrors[name] = "";
    }
    setErrors(newErrors);
  };

  const handlePhoneChange = (value, country) => {
    const dialCode = country.dialCode || "91";
    let phoneNumber = value;
    if (value.startsWith(dialCode)) {
      phoneNumber = value.slice(dialCode.length);
    }
    const formattedPhone = dialCode + " " + phoneNumber;

    setFormData((prev) => {
      const updated = {
        ...prev,
        phone: phoneNumber,
        countryCode: `+${dialCode}`,
        formattedPhone: formattedPhone,
      };
      localStorage.setItem("formData", JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(
          "https://api-dev.voicebit.ai/api/v1/inquiries/inquiry",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          setIsSubmitted(true);
          setSubmitError("");
          localStorage.removeItem("formData");
          if (onSubmitSuccess) onSubmitSuccess();
        } else {
          const errorData = await response.json();
          setSubmitError(
            errorData.message || "Failed to submit the form. Please try again."
          );
        }
      } catch (error) {
        setSubmitError("An error occurred. Please try again later.");
      }
    } else {
      setErrors(newErrors);
    }
  };

  const closeForm = () => {
    onClose();
    setFormData({
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phone: "",
      countryCode: "+1",
      restaurantName: "",
      locationName: "",
      website: "",
      restaurantType: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError("");
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="popup-header">
            <button className="close-button" onClick={closeForm}>
              ×
            </button>
            <img src={redlogo} alt="VoiceBit Logo" className="form-logo" />
          </div>
          <div className={`popup-body ${isSubmitted ? "success-mode" : ""}`}>
            {!isSubmitted ? (
              <>
                <h2 className="form-title">Get In Touch with VoiceBit</h2>
                <p className="form-description">
                  Want to see how VoiceBit can simplify phone orders for your
                  restaurant? Fill out this quick form and our team will reach
                  out shortly.
                </p>
                <form onSubmit={handleSubmit}>
                  <h3 className="form-subtitle">Contact Info</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    {errors.firstName && (
                      <span className="error">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    {errors.lastName && (
                      <span className="error">{errors.lastName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title (e.g., Owner, Manager)"
                      value={formData.title}
                      onChange={handleChange}
                    />
                    {errors.title && <span className="error">{errors.title}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <PhoneInput
                      country={"us"}
                      onChange={handlePhoneChange}
                      inputProps={{ name: "phone", required: true, placeholder: "Phone *" }}
                      disableCountryCode={false}
                      autoFormat={false}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>
                  <h3 className="form-subtitle">Business Information (Optional)</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="restaurantName"
                      placeholder="Restaurant and Business Name"
                      value={formData.restaurantName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                  {submitError && <span className="error">{submitError}</span>}
                </form>
              </>
            ) : (
              <div className="success-message">
                <h2 className="form-title">Thank You!</h2>
                <p className="form-description">
                  Your request has been received successfully.
                </p>
                <p className="form-description">
                  Our team will connect with you shortly to assist you further.
                </p>
                <button className="close-btn" onClick={closeForm}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ContactForm;