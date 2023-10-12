import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import {toast} from "react-toastify";
import * as Yup from 'yup';
import ContactCard from "./ContactCard";
import {data, contactSectionSubtitle, contactSectionTitle} from "./Data";
import {Formik, ErrorMessage, Field, Form} from "formik";
import {config} from "../../env";


export default function Contact() {
    const formRef = useRef();

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required.')
            .min(3, "Name too short.")
            .max(20, "Name too long."),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        message: Yup.string()
            .required('Message is required.')
            .max(500, 'Max 500 characters.'),
    });

    const sendEmail = (e, formik) => {
        emailjs.sendForm(
            config.SERVICE_ID,
            config.TEMPLATE_ID,
            formRef.current,
            config.PUBLIC_KEY)
            .then((result) => {
                toast.success("Thanks for the message. I'll answer soon.")
                formik.resetForm();
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
                        {data.map(({ iconClassName, title, link, buttonText }, index) => (
                            <ContactCard
                                key={index}
                                iconClassName={iconClassName}
                                title={title}
                                link={link}
                                buttonText={buttonText}
                            />
                        ))}
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Contact Me!</h3>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values,formik) => sendEmail(values, formik)}
                    >
                        <Form ref={formRef}>
                            <div className="contact__form">
                                <div className="contact__form-div">
                                    <label className="contact__form-tag" htmlFor="name">Name</label>
                                    <Field name="name" type="text" className="contact__form-input"/>
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                            </div>
                            <div className="contact__form">
                                <div className="contact__form-div">
                                    <label className="contact__form-tag" htmlFor="email">Email</label>
                                    <Field name="email" type="email" className="contact__form-input"/>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                            </div>
                            <div className="contact__form">
                                <div className="contact__form-div">
                                    <label className="contact__form-tag" htmlFor="message">Message</label>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        type="message"
                                        className="contact__form-input custom-textarea"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="button button--flex contact__button-send">
                                {"Send message"}
                                <i className={"uil uil-message contact__button-send-icon"}></i>
                            </button>
                        </Form>
                    </Formik>
                </div>

            </div>
        </section>
    );
}