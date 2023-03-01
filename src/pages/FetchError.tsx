import React from 'react';
import errorImage from '../images/error.svg';

const FetchError = () => {
  return (
    <div className="loading fetch-error">
      <h1>Sorry, please tray again later </h1> <img src={errorImage} alt="fetch data error" />
    </div>
  );
};

export default FetchError;
