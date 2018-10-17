import React from 'react'   //Keep React in scope

import Ingredient from './Ingredient'

const IngredientsList = ({list}) =>
<ul className="ingredients">
  {list.map((ingredient, i) =>
    <Ingredient key={i} {...ingredient} />
  )}
</ul>
/*
`<Ingredient {...ingredient} />`

is another way of expressing...

`    <Ingredient amount={ingredient}
                 measurement={ingredient.measurement}
                 name={ingredient.name}/>
`
*/

export default IngredientsList
