import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Shikhram</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us
                    <br/>
                    Find your courses
                </span>
                <button className="button">
                    <a href='mailto:shikhraminstitute@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted