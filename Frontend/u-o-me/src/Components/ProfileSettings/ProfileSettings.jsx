import React, { useState } from "react";
import "./ProfileSettings.css";

import { setDefaultUserProfile, updateUserProfile } from "../../handlers/userInfoHandler.js";
import { setDefaultBankingProfile, updateBankingProfile } from "../../handlers/paymentHandler.js";

import { useNavigate } from "react-router-dom";
export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    dob: "",
    ssn: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    accountNumber: "",
    routingNumber: "",
    accountType: "",
  });
  const navigate = useNavigate();

  const [showSSN, setShowSSN] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showRouting, setShowRouting] = useState(false);
  const [errors, setErrors] = useState({});

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRedirect = ()=>{
    navigate("/friends");
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.ssn) newErrors.ssn = "SSN is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.postal || formData.postal.length !== 5)
      newErrors.postal = "Postal Code must be 5 digits.";
    if (!formData.accountNumber)
      newErrors.accountNumber = "Account Number is required.";
    if (!formData.routingNumber)
      newErrors.routingNumber = "Routing Number is required.";
    if (!formData.accountType)
      newErrors.accountType = "Account Type is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    /*if (validateForm()) {
      setDefaultUserProfile();
      setDefaultBankingProfile();
      
    }*/
    handleRedirect(); 
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Profile Settings</h1>

        <div className="grid-container">
          {/* User Information Section */}
          <div className="card">
            <h2 className="section-title">User Information</h2>
            <div>
              <div className="form-group">
                <label className="label" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  className="input"
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dob && <p className="error-text">{errors.dob}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="ssn">
                  SSN
                </label>
                <div className="password-group">
                  <input
                    className="input"
                    type={showSSN ? "text" : "password"}
                    id="ssn"
                    placeholder="XXX-XX-XXXX"
                    maxLength="11"
                    value={formData.ssn}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={() => setShowSSN(!showSSN)}>
                    {showSSN ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.ssn && <p className="error-text">{errors.ssn}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="address">
                  Address
                </label>
                <input
                  className="input"
                  type="text"
                  id="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="error-text">{errors.address}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="city">
                  City
                </label>
                <input
                  className="input"
                  type="text"
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="state">
                  State
                </label>
                <select
                  className="input"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select a State</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </select>
                {errors.state && <p className="error-text">{errors.state}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="postal">
                  Postal Code
                </label>
                <input
                  className="input"
                  type="text"
                  id="postal"
                  placeholder="Postal Code"
                  maxLength="5"
                  value={formData.postal}
                  onChange={handleChange}
                />
                {errors.postal && <p className="error-text">{errors.postal}</p>}
              </div>
            </div>
          </div>

          {/* Bank Information Section */}
          <div className="card">
            <h2 className="section-title">Bank Information</h2>
            <div>
              <div className="form-group">
                <label className="label" htmlFor="accountNumber">
                  Account Number
                </label>
                <div className="password-group">
                  <input
                    className="input"
                    type={showAccount ? "text" : "password"}
                    id="accountNumber"
                    placeholder="Enter account number"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={() => setShowAccount(!showAccount)}>
                    {showAccount ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.accountNumber && <p className="error-text">{errors.accountNumber}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="routingNumber">
                  Routing Number
                </label>
                <div className="password-group">
                  <input
                    className="input"
                    type={showRouting ? "text" : "password"}
                    id="routingNumber"
                    placeholder="Enter routing number"
                    value={formData.routingNumber}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={() => setShowRouting(!showRouting)}>
                    {showRouting ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.routingNumber && <p className="error-text">{errors.routingNumber}</p>}
              </div>
              <div className="form-group">
                <label className="label" htmlFor="accountType">
                  Account Type
                </label>
                <input
                  className="input"
                  type="text"
                  id="accountType"
                  placeholder="Checking or Savings"
                  value={formData.accountType}
                  onChange={handleChange}
                />
                {errors.accountType && <p className="error-text">{errors.accountType}</p>}
              </div>
            </div>
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
