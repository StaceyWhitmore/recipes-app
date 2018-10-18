const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients:PropTypes.array,
    steps: PropTypes.array,
    title: PropTypes.string
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className='summary'>
        <h1>{title}</h1>
        <p>
          <span> {ingredients.length} Ingredients</span>
          <span {steps.length} Steps></span>
       </p>
      </div>
    )
  }
})
