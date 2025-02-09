import Header from "./Header"
import AboutUs from "./AboutUs"
import './styles.css'

import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <div className="text-content">
          <h1 className="title">UOMe</h1>
          <p className="description">Simplify your shared expenses and settle debts effortlessly.</p>
          <Link to ="/login">
          <button className="button">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </button>
          </Link>
        </div>
        <div className="mascot">
          <div className="mascot-placeholder">Mascot Image</div>
        </div>
      </div>
      <AboutUs />
    </div>
  )
}

