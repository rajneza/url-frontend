import React from 'react';
import { Route} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Implement authentication logic to determine if user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
        //   <Redirect to="/login" />
        ""
        )
      }
    />
  );
};

export default PrivateRoute;
