//Higher Order Component (HOC) -A Component that renders another component
//Reuse code
//Render hijacking
//Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. DONT SHARE!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
      <div>
          { props.isAuthenticated ? (
              <WrappedComponent {...props} />
          ) : (
              <p>Please login to see shit</p>
          ) }
      </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This shit right here!"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This shit right here!"/>, document.getElementById('app'));

