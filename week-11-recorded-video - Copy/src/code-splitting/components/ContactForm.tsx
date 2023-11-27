import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = { };
type State = { };

class ContactForm extends Component<Props & RouteComponentProps, State> {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                    ></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        );
    }
}

export default ContactForm;