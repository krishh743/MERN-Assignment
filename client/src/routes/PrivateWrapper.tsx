import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const [singleToast, setSingleToast] = useState(0);
  const isAuthenticated = !!Cookies.get('auth_token');
  if (!isAuthenticated && singleToast === 0) {
    setSingleToast(singleToast + 1);
    toast.error('You are not Login!!');
  }
  return isAuthenticated ? (
    children
  ) : (
    <>
      <Navigate to="/" replace />
    </>
  );
};

export default PrivateWrapper;
