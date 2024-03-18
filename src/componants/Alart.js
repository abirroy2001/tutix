import React from 'react';

const Alart = ({ alert }) => {
  return (
    alert && alert.msg && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type}:</strong>{alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}

export default Alart;
