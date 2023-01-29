import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMessage = ({ children }) => (
  <Alert color="danger" fade={false} data->
    {children}
  </Alert>
);

export default ErrorMessage;
