class Summary extends React.Component {
render() {
  const {ingredients, steps, title} = this.props
  return(
  <div className='summary'>
    <h1>{title}</h1>
    <p>
      <span> {ingredients} Ingredients</span>
      <span {steps} Steps></span>
   </p>
  </div>
  )
}
} // close <Summary />

Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props,propName) =>
(typeOf props[propName] !== 'string') ?
 new Error('sorry: title must be a string') :
 (props[propName].length > 20) ?
    new Error(`The title is over 20 characters long!`) :
    null
} //close Summary.PropTypes

Summary.defaultProps = {
    ingredients:0,
    steps:0,
    title:"[recipe untitled]"
}
