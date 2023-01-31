import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React from "react"

export const Home = () => {
  const pokemonList = [
    {
      name: "Carapuce",
      id: 7,
    },
    {
      name: "Carabaffe",
      id: 8,
    },
    {
      name: "Tortank",
      id: 9,
    },
  ]
  const [filterValue, setFilterValue] = React.useState("")

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  return (
    <div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      {pokemonList.map(pokemon => (
        <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
      ))}
    </div>
  )
}
