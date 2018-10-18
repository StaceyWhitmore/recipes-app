const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients:PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: PropTypes.string
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className='summary'>
        <h1>{title}</h1>
        <p>
          <span> {ingredients} Ingredients</span>
          <span {steps} Steps></span>
       </p>
      </div>
    )
  }
})
