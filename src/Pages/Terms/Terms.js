import React from 'react';
import {Link} from 'react-router-dom'

const Terms = () => {
    return (
        <div>
            <h2>We will post more about our Terms and Condition</h2>
            <Link to='/register'><button>Go Back to register</button></Link>
        </div>
    );
};

export default Terms;