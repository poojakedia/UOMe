import "./ProfileSettings.css"

export default function ProfileSettings() {
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
                <input className="input" type="date" id="dob" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="ssn">
                  SSN
                </label>
                <input className="input" type="password" id="ssn" placeholder="XXX-XX-XXXX" maxLength="11" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="address">
                  Address
                </label>
                <input className="input" type="text" id="address" placeholder="Street Address" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="city">
                  City
                </label>
                <input className="input" type="text" id="city" placeholder="City" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="state">
                  State
                </label>
                <input className="input" type="text" id="state" placeholder="State" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="postal">
                  Postal Code
                </label>
                <input className="input" type="text" id="postal" placeholder="Postal Code" maxLength="5" />
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
                <input className="input" type="password" id="accountNumber" placeholder="Enter account number" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="routingNumber">
                  Routing Number
                </label>
                <input className="input" type="password" id="routingNumber" placeholder="Enter routing number" />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="accountType">
                  Account Type
                </label>
                <input className="input" type="text" id="accountType" placeholder="Checking or Savings" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

