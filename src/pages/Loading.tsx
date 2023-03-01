import React from 'react';
import loadingImage from '../images/loading.svg';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingImage} alt="loading" />
    </div>
  );
};

export default Loading;
