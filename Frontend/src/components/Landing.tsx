import { useState } from "react"

export const Landing = () => {

  const [name, setName] = useState('')
  return (
    <div>
      <input type="text" onChange={ } placeholder="name..." />

      <button onClick={hanldeClick}>click</button>
      <h1>landing page</h1>

    </div>
  )
}