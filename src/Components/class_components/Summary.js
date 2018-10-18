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
}
