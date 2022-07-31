import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({ size = 100 }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
      role="status" 
    >
      <Spinner style={{ width: size, height: size }} animation="border" />
    </div>
  );
};
export default Loading;
 