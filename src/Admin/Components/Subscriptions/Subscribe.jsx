import React, { useEffect, useState } from 'react';
import axios from 'axios'






const Subscribe = () => {

    const [subscription, setSubscription] = useState([]);

    useEffect(() => {
        const fetchAllSubscription = async () => {
            try {
                const res = await axios.get('http://localhost:8800/list/subscribers')
                setSubscription(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllSubscription();
    }, []);

    
    return (
        <div className="list-blog-container">
            <h2>List of Subscriptions from my <span>Site</span></h2>
            {subscription.map(subscription => (
                <div className="list-blog-card" key={subscription.subscription_id} >
                    <div className="card-content">
                        <h3>Email</h3>
                        <p className="description">{subscription.email}</p>
                        <h3>Date</h3>
                        <p className="description">{subscription.date}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Subscribe