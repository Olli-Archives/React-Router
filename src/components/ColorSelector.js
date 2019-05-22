import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ onTextChange, onSubmit }){


  return (
    <form onSubmit={onSubmit}>
      <input onChange={onTextChange} type="text"></input>
      <button>SUBMIT</button>
    </form>

  );
}

ColorSelector.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
