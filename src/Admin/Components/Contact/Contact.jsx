import React, { useEffect, useState } from 'react';
import axios from 'axios'
//import { format } from 'date-fns';

const Contact = () => {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        const fetchAllContact = async () => {
            try {
                const res = await axios.get('http://localhost:8800/list/contacts')
                setContact(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllContact();
    }, []);

    return (
        <div className="list-blog-container">
            <h2>List of Contacts from my <span>Site</span></h2>
            {contact.map(contact => (
                <div className="list-blog-card" key={contact.contact_id} >
                    <div className="card-content">
                        <h3>Names</h3>
                        <p className="description">{contact.prefix}. {contact.names}</p>
                        <h3>Email and Phone</h3>
                        <p className="description">{contact.email} | Telephone: {contact.phone_prefix}-{contact.phone_number}</p>
                        <h3>Subject</h3>
                        <p className="description">{contact.subject}</p>
                        <h3>Body</h3>
                        <p className="description">{contact.message}</p>
                        <h3>Date</h3>
                        <p className="description">{contact.date}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};


export default Contact