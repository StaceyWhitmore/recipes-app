const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients:PropTypes.number,
    steps: PropTypes.number,
    title: PropTypes.string
  },
  getDefaultProps() {
    return {
      ingredients:0,
      steps:0,
      title:"[recipe untitled]"
    }
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
