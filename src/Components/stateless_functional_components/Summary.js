const Summary = ({ingredients, steps, title}) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
}

Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
} //close Summary.PropTypes
