import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <section id="landing">
        <div className="container">
          <div className="landing__description">
            <h1 className="landing__title">
              Metalsmith & Web Developer
            </h1>
            <p className="landing__para">
              Milo Ali is a ...
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae totam deleniti optio distinctio, tempore itaque eaque quos ipsa dolorem earum commodi ut consequuntur nulla sed minus similique maxime eligendi libero.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae totam deleniti optio distinctio, tempore itaque eaque quos ipsa dolorem earum commodi ut consequuntur nulla sed minus similique maxime eligendi libero.
            </p>
            <Link to="/about" className="landing__button">
            More About Me
            <FontAwesomeIcon icon="chevron-right" className="landing__button--icon" />
            </Link>
          </div>
          <div className="landing__image--wrapper">
            <img src="" alt="" className="landing__image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing