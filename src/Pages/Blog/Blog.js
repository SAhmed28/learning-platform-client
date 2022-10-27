import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='my-4'>Blog page</h2>
            <div className='blog'>
                <h4>What is cors?</h4>
                <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
            </div>
            <div className='blog'>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
                <p>Some other alternatives:</p>
                <ul>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Okta</li>
                    <li>JSON Web Token</li>
                    <li>Keycloak</li>
                </ul>
            </div>
            <div className='blog'>
                <h4>How does the private route work?</h4>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='blog'>
                <h4>What is Node? How does Node work?</h4>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>

        </div>
    );
};

export default Blog;