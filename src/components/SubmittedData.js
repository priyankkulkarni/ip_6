import React from 'react';

function SubmittedData(props) {
  return (
    <div>
      <h2>Submitted Data</h2>
      <p>Name: {props.formData.name}</p>
      <p>Email: {props.formData.email}</p>
      <p>Message: {props.formData.message}</p>
    </div>
  );
}

export default SubmittedData;
