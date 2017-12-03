import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>404</h1> 
        <p>Resource not found!</p>
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;
