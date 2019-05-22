import React from 'react';
import PropTypes from 'prop-types';

export default function Custom({ match }){

  console.log('match', match);
  
  return (
    
    <div style={{ width:'200px', height:'100px', backgroundColor: match.params.color }}> </div>
  );
}

Custom.propTypes = {
  match:PropTypes.string.isRequired
};
