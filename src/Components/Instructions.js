import React from 'react'   //Keep React in scope

const Instructions = ({title, steps}) =>
  <section className="Instructions">
    <h2>{title}</h2>
    {steps.map((s,i) =>
      <p key={i}>{s}</p>
    )}
  </section>

  export default Instructions