import React, { useEffect, useRef } from 'react'

// GSAP Import
import { gsap } from "gsap/dist/gsap";

const Contact = () => {
    const contactRef = useRef(null)

    useEffect(() => {
        gsap.from(contactRef.current, { opacity: 0, duration: 1.5 })
    }, [])

    return (
        <section className="form-section hidden" ref={contactRef}>
            <div className="form-container">
                <h2 className="form-title">Feel free to contact me at anytime!</h2>
                <form action="POST" data-netlify='true' className="contact-form">
                    <div className="form-name-container form-containers">
                        <label htmlFor="name" className="form-name">Name </label>
                        <input type="text" name='name' className="form-input-name" />
                        <h3 className="form-name-warning">*Please Enter Name</h3>
                    </div>
                    <div className="form-subject-container form-containers">
                        <label htmlFor="subject" className="form-subject">Subject </label>
                        <input type="text" name='subject' className="form-input-subject" />
                        <h3 className="form-subject-warning">*Please Enter Subject</h3>
                    </div>
                    <div className="form-message-container form-containers">
                        <label htmlFor="message" className="form-message">Message</label>
                        <textarea name="message" className="form-input-message" cols="30" rows="10"></textarea>
                        <h3 className="form-message-warning">*Please Enter Message</h3>
                    </div>
                    <div data-netlify-recaptcha='true'></div>
                    <button className="form-submit-button">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact