import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {

  function openModal() {
    document.body.classList += " modal--open";
  }

  function closeModal() {
    document.body.classList.remove("modal--open");
  }

  return (
    <>
      <nav>
        <div className="container nav__container">
          <div className="row nav__row">
            <Link to="/" className="nav__logo">
              <h3 className="nav__logo--title">
                Milo Ali
              </h3>
            </Link>
            <button onClick={openModal} className="btn__menu">
              <FontAwesomeIcon icon="bars-staggered" />
            </button>
            <div className="nav__links">
              <Link to="/about" className="nav__link">
              About
              </Link>
              <Link to="/webdevelopment" className="nav__link">
              Web Development
              </Link>
              <Link to="/art" className="nav__link">
              Art
              </Link>
              <button onClick={openModal} className="nav__link--primary">
                Contact
              </button>
            </div>
            <div className="modal">
              <div className="modal__half modal__menu">
                <Link to="/" className="menu__link" onClick={closeModal}>
                Home
                </Link>
                <Link to="/about" className="menu__link" onClick={closeModal}>
                About
                </Link>
                <Link to="/webdevelopment" className="menu__link" onClick={closeModal}>
                Web Development
                </Link>
                <Link to="/art" className="menu__link" onClick={closeModal}>
                Art
                </Link>
              </div>
              <div className="modal__half modal__contact">
                <FontAwesomeIcon icon="slash" className="modal__exit" onClick={closeModal} />
                <h3 className="modal__contact--title">
                  Let's Connect!
                </h3>
                <form id="contact__form" onsubmit="contact(event)">
                  <div className="form__item">
                    <label className="form__item--label">
                      Name
                    </label>
                    <input type="text" className="input" name="First Name Last Name" />
                  </div>
                  <div className="form__item">
                    <label className="form__item--label">
                      Email
                    </label>
                    <input type="text" className="input" name="example@email.com" />
                  </div>
                  <div className="form__item">
                    <label className="form__item--label">
                      Message
                    </label>
                    <input type="text" className="input" name="Message" />
                  </div>
                  <button className="form__submit">
                    Send it my way
                    <FontAwesomeIcon icon="chevron-right" className="form__submit--arrow" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav