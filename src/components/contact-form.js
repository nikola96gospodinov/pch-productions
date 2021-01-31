import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact-form.scss'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

const ContactForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        formSubmited: false,
        triedSubmitting: false
    })

    const [formErrors, setFormErrors] = useState({
        name: 'Please enter your name',
        email: 'Please enter a valid email',
        message: 'Message must be at least 50 caharacters'
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        let errors = formErrors
  
        switch (name) {
          case 'name':
            errors.name = value.length < 1
              ? 'Please enter your name'
              : ''
            break
          case 'email':
            errors.email = validEmailRegex.test(value)
              ? ''
              : 'Please enter a valid email'
            break
           case 'message':
              errors.message = value.length < 50
                ? 'Message must be at least 50 caharacters'
                : ''
              break
            default:
              break;
        }
  
        setFormErrors({
            ...formErrors,
            name: errors.name,
            email: errors.email,
            message: errors.message
        })

        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (validateForm(formErrors) && formState.email != '' && formState.message != '' && formState.subject != '' && formState.name != '') {
            setFormState({
                ...formState,
                formSubmited: true,
                triedSubmitting: true
            })
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formState })
              })
                .then(() => alert("Success!"))
                .catch(error => alert(error))
            console.log('SUCCESS')
        } else {
            setFormState({
                ...formState,
                triedSubmitting: true
            })
            console.log('FAILURE' + formErrors.name + formErrors.email + formErrors.message + formState.invalidFormMessage)
        }
    }

    return (
        <div>
            {
                formState.formSubmited ? 
                <p className="thank-you">Thank you for contacting me! I will be in touch with you shortly!</p>
                :
                <form 
                    onSubmit={handleSubmit} 
                    name="contact" 
                    method="post" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    id="form"
                >
                    <input 
                        type="hidden" 
                        name="form-name" 
                        value="contact"
                    />
                    <h2 className="sub-heading">Send me an email</h2>
                    <hr className="divider"/>
                    <br/>
                    <br/>
                    <div className="icon-field">
                        <FontAwesomeIcon icon={['fas', 'user']}/>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={formState.name}
                            placeholder="Name"
                        />
                    </div>
                    <p className="individual-error">{formState.triedSubmitting ? formErrors.name : null}</p>
                    <div className="icon-field">
                        <FontAwesomeIcon icon={['fas', 'envelope']}/>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formState.email}
                            placeholder="Email"
                        />
                    </div>
                    <p className="individual-error">{formState.triedSubmitting ? formErrors.email : null}</p>
                    <div className="icon-field">
                        <FontAwesomeIcon icon={['fas', 'phone']}/>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={formState.phone}
                            placeholder="Phone number (optional)"
                        />
                    </div>
                    <p className="individual-error"></p>
                    <textarea
                        id="message"
                        type="text"
                        name="message"
                        onChange={handleChange}
                        value={formState.message}
                        placeholder="Message"
                    />
                    {formState.triedSubmitting ? 
                    <p className="individual-error">{formErrors.message}</p>
                    :
                    <p style={{
                        margin: '0',
                        fontSize: '.6rem',
                        marginTop: '-.1rem',
                        height: '1.1rem'
                    }}>Message must be at least 50 characters</p>}
                    <button className="button" type="submit">Send</button>
                    <br/>
                    <br/>
                    <p className="instagram-dm">...or DM me on <a href="https://www.instagram.com/p.ch.production/" target="_blank" rel="noreferrer">Instagram</a></p>
                </form>
            }
        </div>
    )
}


export default ContactForm