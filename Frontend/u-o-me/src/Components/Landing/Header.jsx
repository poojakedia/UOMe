import './styles.css'

export default function Header() {
    return (
      <header className="header">
        <div className="logo">UOMe</div>
        <button className="button">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
          </svg>
        </button>
      </header>
    )
  }
  
  