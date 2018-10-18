const Summary = ({ingredients=0, steps=0, title='[recipe]'}) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
}

/*
Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
}
*/
