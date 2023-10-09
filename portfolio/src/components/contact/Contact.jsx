import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import {toast} from "react-toastify";
import config from "../../env";
import ContactCard from "./ContactCard";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SubmitButton from "./SubmitButton";
import {data, contactSectionSubtitle, contactSectionTitle} from "./Data";

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
            <h2 className="section__title">
                {contactSectionTitle}
            </h2>
            <span className="section__subtitle">
                {contactSectionSubtitle}
            </span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Check me at</h3>
                    <div className="contact__info">
                        {data.map((contact, index) => (
                            <ContactCard
                                key={index}
                                iconClassName={contact.iconClassName}
                                title={contact.title}
                                link={contact.link}
                                buttonText={contact.buttonText}
                            />
                        ))}
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Contact Me!</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <InputField label="Name" type="text" name="name" placeholder="Insert your name"/>
                        <InputField label="Email" type="email" name="email" placeholder="Insert your email"/>
                        <TextAreaField label="Message" name="message" placeholder="Write your message" cols="30"
                                       rows="10"/>
                        <SubmitButton text="Send Message" iconClassName="uil uil-message contact__button-send-icon"/>
                    </form>
                </div>

            </div>
        </section>
    );
}