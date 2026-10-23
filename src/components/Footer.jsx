import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row footer__row">
            <div className="footer__links">
              <Link to="/about" className="footer__link">
              About
              </Link>
              <Link to="/webdevelopment" className="footer__link">
              Web Development
              </Link>
              <Link to="/art" className="footer__link">
              Art
              </Link>
            </div>
            <div className="footer__copyright">
              Copyright Milo Ali 2026 ©
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer