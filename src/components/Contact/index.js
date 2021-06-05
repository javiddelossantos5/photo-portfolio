import React, { useState } from 'react';

function ContactForm() {
    // Hook that will manage the form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // destructure the formState into its named properties name, email message
    const { name, email, message } = formState;

    //handles input put by the user into form
    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
    

    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} rows='5' onChange={handleChange} />
                </div>
                    <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;