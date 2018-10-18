import React from 'react'
//Be sure to install propTypes via npm `npm install --save prop-types^`
import PropTypes from 'prop-types';

const Summary = ({ingredients=0, steps=0, title='[recipe]'}) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
}


Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
}

export default Summary
