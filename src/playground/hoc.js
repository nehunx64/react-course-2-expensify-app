// Higher Order Component (HOC): A component that renders another component.
// Reuser code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {/* { !props.isAuthenticated && <p>You are not logged in. Please login to view Info!</p>}
            { props.isAuthenticated && <WrappedComponent {...props} /> } */}
            { 
                props.isAuthenticated ? 
                <WrappedComponent {...props} /> : 
                <p>You are not logged in. Please login to view Info!</p> 
            }
        </div>
    );
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the details' />, document.getElementById('app'));
