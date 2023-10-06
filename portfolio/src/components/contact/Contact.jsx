import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import {toast} from "react-toastify";
import config from "../../env";
export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            config.SERVICE_ID,
            config.TEMPLATE_ID,
            form.current,
            config.PUBLIC_KEY)
            .then((result) => {
                toast.success("Thanks for the message. I'll answer soon.")
                e.target.reset()
            }, (error) => {
                toast.error("Something went wrong.")
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact me</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Check me at</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>
                            <h3 className="contact__card-title">Linked In</h3>
                            <a href="https://linkedin.com/in/stelmaszczykadrian" className="contact__button">
                                Linked In profile
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-github contact__card-icon"></i>
                            <h3 className="contact__card-title">Git Hub</h3>
                            <a href="https://github.com/stelmaszczykadrian" className="contact__button">
                                Git Hub profile
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">stelmaszczykadrian@gmail.com</span>
                            <a href="mailto:stelmaszczykadrian@gmail.com" className="contact__button">
                                Write me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Contact Me!</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"/>
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email"/>
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message"/>
                        </div>
                        <button className="button button--flex">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}