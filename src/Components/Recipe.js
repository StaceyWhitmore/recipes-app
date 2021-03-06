import React from 'react' //Keep React in scope

import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import Summary from './stateless_functional_components/Summary'

const Recipe = ({name, ingredients, steps}) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking Instructions"
                  steps={steps} />
    <Summary />
  </section>

  export default Recipe
